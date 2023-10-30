import { useEffect } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import { useAppDispatch, useAppSelector } from "../hooks/useApp";
import { HomePageVideos } from "../api/reducers/GetHomePageVideos";
import Spinner from "../components/Spinner";

const Home = () => {

  const dispatch = useAppDispatch()
  const data = useAppSelector(state => state.youtubeApp.videos);

  // console.log(data);

  useEffect(() => {
        dispatch(HomePageVideos(false))
  },[dispatch])




  return (
    <div className="max-h-screen overflow-hidden">
      <div className="h-[7.5vh]">
        <Navbar />
      </div>
      <div className=" flex h-[92.5vh]">
        
        <Sidebar  />

        <div className="flex w-[100%] justify-center items-center">
          <Spinner />
        </div>
       
      
      </div>
    </div>
  );
};

export default Home;
