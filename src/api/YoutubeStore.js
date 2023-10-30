import { configureStore } from "@reduxjs/toolkit";
import YoutubeSlice from "./YoutubeSlice";

export const YoutubeStore = configureStore({
  reducer: {
    youtubeApp: YoutubeSlice,
  },
});
