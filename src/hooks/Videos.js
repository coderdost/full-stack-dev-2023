import { useContext } from "react";
import VideosContext from "../context/VideosContext";


function useVideos(){
    return useContext(VideosContext)
}

export default useVideos
