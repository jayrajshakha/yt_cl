import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { ParseData } from "../../utils/ParseData";

const BASE_URL = import.meta.env.VITE_BASE_URL;

const API_KEY = import.meta.env.VITE_API_KEY;

export const HomePageVideos = createAsyncThunk(
  "youtube/app/homepagevideos",
  async (isNext, { getState }) => {
    const {
      youtubeApp: { nextPageToken: nextPageTokenFromState, videos },
    } = getState();

    const response = await axios.get(
      `${BASE_URL}/search?maxResults=20&q=%22%22&key=${API_KEY}&part=snippet&type=video`
    );

    const items = response.data.items;

    const parsedData = await ParseData(items);
    // console.log(parsedData , nextPageTokenFromState);
    return {parsedData : { ...videos ,...parsedData, nextPageToken : nextPageTokenFromState}}
  }
);
