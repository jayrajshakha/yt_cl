import axios from "axios";

const BASE_URL = import.meta.env.VITE_BASE_URL;

const API_KEY = import.meta.env.VITE_API_KEY;

export const ParseData = async (items) => {
  try {
    const videoIds = [];
    const channelIds = [];

    for (let i = 0; i < items.length; i++) {
      videoIds.push(items[i].snippet.channelId);
      channelIds.push(items[i].id.videoId);
    }

    const {
      data: { item: chanelsData },
    } = await axios.get(
      `${BASE_URL}/channels?part=snippet,contentDetails&id=${channelIds.join(
        ","
      )}&key=${API_KEY}`
    );

    const parseChannelsData = [];

    chanelsData.forEach((i) => {
      parseChannelsData.push({
        videoId: i.id,
        image: i.snippet.thumbnails.default.url,
      });
    });
   
    const {data : {items : videoData},} =  await axios.get(`${BASE_URL}/videos?part=contentDetails,statistics&id=${videoIds.join(
      ","
    )}&key=${API_KEY}`)

    const parseData = [];

    
 

    

    
}

catch (error) {}

  return <div>ParseData</div>;
};
