import './AddVideo.css';
import { useEffect, useState } from 'react';

const initialState = {
  time: '1 month ago',
  channel: 'Coder Dost',
  verified: true,
  title: '',
  views: ''
}

function AddVideo({ addVideos, editVideo, setEditVideo, updateVideo }) {
  const [video, setVideo] = useState(editVideo || initialState);
  setEditVideo(editVideo);

  function handleSubmit(e) {
    e.preventDefault();
    if (editVideo) {
      updateVideo(video)
    } else {
      addVideos(video)
    }
    setVideo(initialState)
    setEditVideo(null)
  }

  function handleChange(e) {
    setVideo({
      ...video,
      [e.target.name]: e.target.value
    })
  }

  useEffect(() => {
    if (editVideo) setVideo({ ...editVideo })
  }, [editVideo])

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
        {editVideo ? 'Edit Video' : 'Add Video'}
      </button>
    </form>
  );
}

export default AddVideo;
