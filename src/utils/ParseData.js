import axios from "axios";
import { parseVideoDuration } from "./parseVideoDuration";
import { convertRawtoString } from "./convertRawtoString";
import { timeSince } from "./timeSince";

const BASE_URL = import.meta.env.VITE_BASE_URL;

const API_KEY = import.meta.env.VITE_API_KEY;

export const ParseData = async (items) => {
  try {
    const videoIds = [];
    const channelIds = [];

    items.forEach((i) => {
      videoIds.push(i.id.videoId);
      channelIds.push(i.snippet.channelId);
    });

    const {
      data: { items: channelsData },
    } = await axios.get(
      `${BASE_URL}/channels?part=snippet,contentDetails&id=${channelIds.join(
        ","
      )}&key=${API_KEY}`
    );
    const parseChannelData = [];

    channelsData.forEach((i) => {
      parseChannelData.push({
        id: i.id,
        image: i.snippet.thumbnails.default.url,
      });
    });

    const {
      data: { items: videoData },
    } = await axios.get(
      `${BASE_URL}/videos?part=contentDetails,statistics&id=${videoIds.join(
        ","
      )}&key=${API_KEY}`
    );

    const parseData = [];

    items.forEach((item, index) => {
      const { image: channelImage } = parseChannelData.find(
        (data) => data.id === item.snippet.channelId
      );
      if (channelImage) {
        parseData.push({
          videoId: item.id.videoId,
          videoTitle: item.snippet.title,
          videoDescription: item.snippet.description,
          videoThumbnail: item.snippet.thumbnails.medium.url,
          videoLink: `https://www.youtube.com/watch?v=${item.id.videoId}`,
          videoDuration: parseVideoDuration(
            videoData[index].contentDetails.duration
          ),
          videoViews: convertRawtoString(videoData[index].statistics.viewCount),
          videoAge: timeSince(new Date(item.snippet.publishedAt)),
          channelInfo: {
            id: item.snippet.channelId,
            image: channelImage,
            name: item.snippet.channelTitle,
          },
        });
      }
    });
     
    return parseData;

  } catch (error) {
    console.log(error);
  }
};
