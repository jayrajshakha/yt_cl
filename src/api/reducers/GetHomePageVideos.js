import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import {ParseData} from "../../utils/ParseData";

const BASE_URL = import.meta.env.VITE_BASE_URL;

const API_KEY = import.meta.env.VITE_API_KEY;

export const HomePageVideos = createAsyncThunk(
  "youtube/app/homepagevideos",
  async (isNext, { getState }) => {
    const {
      youtubeApp: { nextPageToken: nextPageTokenFromState, videos },
    } = getState();

    const { data : { items, nextPageToken}, } = await axios.get(
      `${BASE_URL}/search?maxResults=20&q=%22%22&key=${API_KEY}&part=snippet&type=video`
    );
    console.log(items, nextPageToken);

    const parseData = await ParseData(items)
  }
);

// https://youtube.googleapis.com/youtube/v3/search?maxResults=20&q=%22%22&key=AIzaSyCMx0dVZqePsVcmO4sS_iQpkEyOmvc9gmc&part=snippet&type=video
