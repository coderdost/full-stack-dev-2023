import { useReducer, useState } from 'react';
import './App.css';
import AddVideo from './components/AddVideo';
import videoDB from './data/data';
import VideoList from './components/VideoList';
function App() {
  console.log('render App')
  const [editableVideo,setEditableVideo] = useState(null);

  function videoReducer(videos,action){
    switch(action.type){
      case 'ADD':
        return [
          ...videos,
          {...action.payload, id: videos.length+1}
        ]
      case 'DELETE':
        return videos.filter(video=>video.id!==action.payload)  
      case 'UPDATE':
        const index = videos.findIndex(v=>v.id===action.payload.id)
        const newVideos = [...videos]
        newVideos.splice(index,1,action.payload)
        setEditableVideo(null);
        return newVideos;
      default:
        return videos  
    }

  }

  const [videos,dispatch] = useReducer(videoReducer,videoDB)


  function editVideo(id){
    setEditableVideo(videos.find(video=>video.id===id))
  }

  return (
    <div className="App" onClick={()=>console.log('App')}>
       <AddVideo dispatch={dispatch} editableVideo={editableVideo}></AddVideo>
       <VideoList dispatch={dispatch} editVideo={editVideo}  videos={videos}></VideoList>


    </div>
  );
}

export default App;
