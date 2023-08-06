import { createContext, useState } from "react";
import videosDB from "../data/data";

const VideosContext = createContext({
    videos: null,
    setVideos: () => { }
})

const VideosProvider = ({ children }) => {
    const [videos, setVideos] = useState(videosDB);
    const [editableVideo, setEditableVideo] = useState(null);

    function addVideos(video) {
        setVideos([
            ...videos,
            { ...video, id: videos.length + 1 }
        ]);
    }
    function deleteVideo(id) {
        setVideos(videos.filter(video => video.id !== id))
    }
    function editVideo(id) {
        setEditableVideo(videos.find(video => video.id === id))
    }

    function updateVideo(video) {
        const index = videos.findIndex(v => v.id === video.id)
        const newVideos = [...videos]
        newVideos.splice(index, 1, video)
        setVideos(newVideos)
    }

    const value = {
        videos,
        setVideos,
        addVideos,
        deleteVideo,
        editVideo,
        updateVideo,
        editableVideo
    }

    return <VideosContext.Provider value={value}>{children}</VideosContext.Provider>
}

export { VideosContext, VideosProvider }