import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const BASE_URL = "https://youtube.googleapis.com/youtube/v3"

const API_KEY = import.meta.env.VITE_API_KEY;

export const HomePageVideos = createAsyncThunk(
  "youtube/app/homepagevideos",
  async (isNext, { getState }) => {
    const {
      youtubeApp: { nextPageToken: nextPageTokenFromState, videos },
    } = getState();

    const {data : {items, nextPageToken}} = await axios.get(`${BASE_URL}/search?maxResults=20&q=%22%22&key=${API_KEY}&part=snippet&type=video`)



  }
);

