import { createSlice } from "@reduxjs/toolkit";
import { build } from "vite";
import { HomePageVideos } from "./reducers/GetHomePageVideos";

const initialState = {
        
    videos : [],
    recommendedVideos : [],
    searchResults : [],
    searchTerm : '',
    nextPageToken : null,
    curruntPlaying : null

}

const YoutubeSlice = createSlice({
      name : "youtubeApp",
      initialState,
      reducers : {

      },
     
    
})

export default YoutubeSlice.reducer