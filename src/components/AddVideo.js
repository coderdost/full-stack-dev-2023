import './AddVideo.css';
import {useEffect, useState} from 'react';

const initialState = {
    time: '1 month ago',
    channel: 'Coder Dost',
    verified: true,
    title:'',
    views:''
  }

function AddVideo({addVideos,updateVideo,editableVideo}) {
  const [video, setVideo] = useState(initialState);

  function handleSubmit(e) {
    e.preventDefault();
    if(editableVideo){
      updateVideo(video)
    }else{
      addVideos(video)
    }
    
    setVideo(initialState)

  }
  function handleChange(e) {
    setVideo({...video,
        [e.target.name] : e.target.value
    })
  }

  useEffect(()=>{
    if(editableVideo){
      setVideo(editableVideo)
    }
  },[editableVideo])

  return (
    <form>
      <input
        type="text"
        name="title"
        onChange={handleChange}
        placeholder="title"
        value={video.title}
      />
      <input
        type="text"
        name="views"
        onChange={handleChange}
        placeholder="views"
        value={video.views}
      />
      <button
        onClick={handleSubmit}
      >
        {editableVideo?'Edit':'Add'} Video
      </button>
    </form>
  );
}

export default AddVideo;
