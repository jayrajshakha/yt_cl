import { useEffect } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import { useAppDispatch, useAppSelector } from "../hooks/useApp";
import { HomePageVideos } from "../api/reducers/GetHomePageVideos";
import Spinner from "../components/Spinner";
import InfiniteScroll from "react-infinite-scroll-component";
import Card from "../components/Card";

const Home = () => {
  const dispatch = useAppDispatch();
  const data = useAppSelector((state) => state.youtubeApp.videos);

  console.log(data);

  useEffect(() => {
    dispatch(HomePageVideos(false));
  }, [dispatch]);

  return (
    <div className='max-h-screen overflow-hidden'>
    <div style={{height:"7.5vh"}}>
    <Navbar/>
    </div>
    <div className='flex' style={{height:"92.5vh"}}>
    <Sidebar/>
    {
      data.length ? (
        <InfiniteScroll 
        dataLength={data.length} 
        next={()=> dispatch(HomePageVideos(true))}
        hasMore={data.length<500}
        loader={<Spinner/>}
        height={650}
        >
            <div className='grid gap-y-14 gap-x-8 grid-cols-4 p-8'>
              {data.map((item) => {
                return <Card data={item} key={item.videoId}/>
              })}
            </div>
        </InfiniteScroll>
      ):(
        <Spinner/>
      )
    }
    </div>
  </div>
  );
};

export default Home;
