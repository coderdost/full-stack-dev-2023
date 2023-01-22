import './App.css';
import Video from './components/Video';

function App() {
  let obj = {
    title: 'React JS tutorial',
    views: '999K',
    time: '1 year ago',
    channel: 'Coder Dost',
  };
  return (
    <div className="App">
      <div>Videos</div>
      <Video {...obj}></Video>
      <Video title="Node JS tutorial" views="100K" time="1 month ago"></Video>
      <Video
        title="Mongo DB tutorial"
        views="1M"
        time="1 month ago"
        channel="Coder Dost"
      ></Video>
    </div>
  );
}

export default App;
