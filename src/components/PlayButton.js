import './PlayButton.css';
import { useContext, useState, memo } from 'react';
import ThemeContext from '../context/ThemeContext';

const PlayButton = memo(function PlayButton({message,children,onPlay,onPause}){
    console.log('render PlayButton')
    const theme = useContext(ThemeContext)

    const [playing, setPlaying] = useState(false);  
    function handleClick(e){
        // console.log(e)
        e.stopPropagation()

        if(playing) onPause()
        else onPlay();

        setPlaying(!playing);
    }

    return (
        <button className={theme} onClick={handleClick}>{children} : {playing?'⏸️':'⏯️'}</button>
    )

});

export default PlayButton;