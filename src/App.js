import { useCallback, useReducer, useState,useRef,lazy,Suspense } from 'react';
import './App.css';
import AddVideo from './components/AddVideo';
import videoDB from './data/data';
import VideoList from './components/VideoList';
import ThemeContext from './context/ThemeContext';
import VideosContext from './context/VideosContext';
import VideoDispatchContext from './context/VideoDispatchContext';
import Counter from './components/Counter';

const Dummy = lazy(() => import('./components/Dummy.js'));

function App() {
  console.log('render App');
  const [editableVideo, setEditableVideo] = useState(null);
  const [mode, setMode] = useState('darkMode');
  const [show, setShow] = useState(false);
  const inputRef = useRef(null);


  function videoReducer(videos, action) {
    switch (action.type) {
      case 'LOAD':
        return action.payload;
      case 'ADD':
        return [...videos, { ...action.payload, id: videos.length + 1 }];
      case 'DELETE':
        return videos.filter((video) => video.id !== action.payload);
      case 'UPDATE':
        const index = videos.findIndex((v) => v.id === action.payload.id);
        const newVideos = [...videos];
        newVideos.splice(index, 1, action.payload);
        setEditableVideo(null);
        return newVideos;
      default:
        return videos;
    }
  }
  const [videos, dispatch] = useReducer(videoReducer, videoDB);

  const editVideo = useCallback(function editVideo(id) {
    setEditableVideo(videos.find((video) => video.id === id));
  },[videos])
  

  return (
    <ThemeContext.Provider value={mode}>
      <VideosContext.Provider value={videos}>
        <VideoDispatchContext.Provider value={dispatch}>
        <div className={`App ${mode}`} onClick={() => console.log('App')}>
        <Counter></Counter>

          <button onClick={()=>{inputRef.current.jumpTo()}}>Focus</button>
          <button
            onClick={() =>
              setMode(mode === 'darkMode' ? 'lightMode' : 'darkMode')
            }
          >
            Mode
          </button>
          <AddVideo 
            ref={inputRef} 
            editableVideo={editableVideo}
          ></AddVideo>
          <VideoList
            editVideo={editVideo}
          ></VideoList>
          <button onClick={()=>setShow(true)}>Show</button>
          {show?
          <Suspense fallback={<>Loading.......</>}>
          <Dummy/>
          </Suspense>
          :null}
        </div>
        </VideoDispatchContext.Provider>
      </VideosContext.Provider>
    </ThemeContext.Provider>
  );
}

export default App;
