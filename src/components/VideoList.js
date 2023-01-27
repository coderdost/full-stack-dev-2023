import Video from "./Video";
import PlayButton from "./PlayButton";
import useVideos from "../hooks/Videos";
import axios from 'axios';
import {useState, useEffect} from 'react';
import useVideoDispatch from "../hooks/VideoDispatch";

function VideoList({editVideo}){
   const url ="https://my.api.mockaroo.com/video.json?key=2a12c4d0"

   const videos = useVideos()
   const dispatch = useVideoDispatch();

   async function handleClick (){
    const res = await axios.get(url);
    console.log('getVideos', res.data)
    dispatch({type:'LOAD',payload:res.data})
   }

  useEffect(()=>{
    async function getVideos (){
      const res = await axios.get(url);
      console.log('getVideos', res.data)
      dispatch({type:'LOAD',payload:res.data})
     }
     getVideos()
  },[dispatch])


    return(
        <>
        {videos.map((video) => (
            <Video
              key={video.id}
              title={video.title}
              views={video.views}
              time={video.time}
              channel={video.channel}
              verified={video.verified}
              id={video.id}
              editVideo={editVideo}
            >
              <PlayButton
                onPlay={() => console.log('Playing..',video.title)}
                onPause={() => console.log('Paused..',video.title)}
              >
                {video.title}
              </PlayButton>
            </Video>
          ))}
          <button onClick={handleClick}>Get Videos</button>
          </>
    )
}

export default VideoList