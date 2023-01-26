import { useState } from 'react';
import './App.css';
import AddVideo from './components/AddVideo';
import videoDB from './data/data';
import VideoList from './components/VideoList';
function App() {
  console.log('render App')

  const [videos,setVideos] = useState(videoDB);

  function addVideos(video){
      setVideos([
            ...videos,
            {...video, id: videos.length+1}
          ]);
  }

  return (
    <div className="App" onClick={()=>console.log('App')}>
       <AddVideo addVideos={addVideos}></AddVideo>
       <VideoList videos={videos}></VideoList>


    </div>
  );
}

export default App;
