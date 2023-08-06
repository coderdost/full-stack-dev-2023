import './App.css';
import AddVideo from './components/AddVideo';
import VideoList from './components/VideoList';
import { useContext } from 'react';
import { VideosContext } from './contexts/videosContext';

function App() {
  const { videos, setVideos } = useContext(VideosContext)

  return (
    <div className="App">
      <AddVideo />
      <VideoList />
    </div>
  );
}

export default App;
