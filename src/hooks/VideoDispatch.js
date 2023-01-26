import { useContext } from "react";
import VideoDispatchContext from "../context/VideoDispatchContext";


function useVideoDispatch(){
    return useContext(VideoDispatchContext)
}

export default useVideoDispatch
