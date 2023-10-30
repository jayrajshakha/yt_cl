import { createSlice } from "@reduxjs/toolkit";
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
      extraReducers : (builder) => {
         builder.addCase(HomePageVideos.fulfilled, (state , action) => {
              console.log(action);
              state.videos = action.payload.parsedData
              state.nextPageToken = action.payload.parsedData.nextPageToken
         })
      }
})

export default YoutubeSlice.reducer