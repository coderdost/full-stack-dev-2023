import './App.css';
import PlayButton from './components/PlayButton';
import Video from './components/Video';
import Events from './components/Events';

import videos from './data/data';
function App() {
  const levels = []
  return (
    <div className="App" onClick={()=>{levels.push('App'); console.log(levels.reverse().join('>')) }}>
      <div>Videos</div>
      {videos.map((video) => (
        <Video
          levels={levels} 
          key={video.id}
          title={video.title}
          views={video.views}
          time={video.time}
          channel={video.channel}
          verified={video.verified}
          id={video.id}
        >
          <PlayButton
            onPlay={() => console.log('Playing..',video.title)}
            onPause={() => console.log('Paused..',video.title)}
          >
            {video.title}
          </PlayButton>
        </Video>
      ))}

      <Events></Events>

      <div style={{ clear: 'both' }}>
        {/* <PlayButton message="play-msg" onPlay={()=>console.log('Play')} onPause={()=>console.log('Pause')}>Play</PlayButton> */}

        {/* <PlayButton message="pause-msg" onSmash={()=>alert('Playyy')}>Pause</PlayButton> */}
      </div>
    </div>
  );
}

export default App;
