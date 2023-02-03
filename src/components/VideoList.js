import Video from './Video';
import PlayButton from './PlayButton';
import useVideos from '../hooks/Videos';
import { useEffect, useCallback, useMemo } from 'react';
import useVideoDispatch from '../hooks/VideoDispatch';
import moreVideos  from '../data/moredata';

function VideoList({ editVideo }) {

  const videos = useVideos();
  const dispatch = useVideoDispatch();

  function getVideos() {
       dispatch({ type: 'LOAD', payload: moreVideos  });
  }

  useEffect(() => {
    
  }, [dispatch]);

  const play = useCallback(() => console.log('Playing..'), []);
  const pause = useCallback(() => console.log('Pause..'), []);
  const memoButton = useMemo(() => (
    <PlayButton onPlay={play} onPause={pause}>
      Play
    </PlayButton>
  ),[pause, play]);
  return (
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
          {memoButton}
        </Video>
      ))}
      <button onClick={getVideos}>Get Videos</button>
    </>
  );
}

export default VideoList;
