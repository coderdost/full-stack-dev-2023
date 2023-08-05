import { useState } from 'react';
import './App.css';
import AddVideo from './components/AddVideo';
import videoDB from './data/data';
import VideoList from './components/VideoList';
function App() {
  console.log('render App')

  const [videos, setVideos] = useState(videoDB);
  const [editVideo, setEditVideo] = useState(null)

  function addVideos(video) {
    setVideos([
      ...videos,
      { ...video, id: videos.length + 1 }
    ]);
  }

  const editableVideo = (id) => {
    let editVideo = videos.find(video => video.id === id)
    setEditVideo(editVideo);
  }

  const updateVideo = (updatedVideo) => {
    const newVideos = videos.map(video => video.id === updatedVideo.id ? updatedVideo : video);
    setVideos([...newVideos])
  }

  return (
    <div className="App" onClick={() => console.log('App')}>
      <AddVideo addVideos={addVideos} editVideo={editVideo} setEditVideo={setEditVideo} updateVideo={updateVideo}></AddVideo>
      <VideoList videos={videos} editableVideo={editableVideo}></VideoList>
    </div>
  );
}

export default App;
