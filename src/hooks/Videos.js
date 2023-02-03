import { useContext,useDebugValue } from "react";
import VideosContext from "../context/VideosContext";


function useVideos(){
    useDebugValue(useContext(VideosContext).length);
    return useContext(VideosContext)
}

export default useVideos
