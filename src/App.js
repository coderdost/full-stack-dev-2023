import { useState } from 'react';
import './App.css';
import AddVideo from './components/AddVideo';
import videoDB from './data/data';
import VideoList from './components/VideoList';
import Counter from './components/Counter';
function App() {
  console.log('render App')

  const [videos,setVideos] = useState(videoDB);
  const [editableVideo,setEditableVideo] = useState({title:'',views:'',id:''});

  function addVideos(video){
      setVideos([
            ...videos,
            {...video, id: videos.length+1}
          ]);
  }
  function deleteVideo(id){
    setVideos(videos.filter(video=>video.id!==id))
  }
  function editVideo(id){
    setEditableVideo(videos.find(video=>video.id===id))
  }

  function updateVideo(video){
    const index = videos.findIndex(v=>v.id===video.id)
    const newVideos = [...videos]
    newVideos.splice(index,1,video)
    setVideos(newVideos)
    setEditableVideo({title:'',views:'',id:''});
  }

  return (
    <div className="App" onClick={()=>console.log('App')}>
       <Counter></Counter>
       <AddVideo addVideos={addVideos} updateVideo={updateVideo} editableVideo={editableVideo}></AddVideo>
       <VideoList deleteVideo={deleteVideo} editVideo={editVideo}  videos={videos}></VideoList>


    </div>
  );
}

export default App;
