import { useState } from "react";


function useCounter(value){

    const [number, setNumber]  = useState(value)

    const increment = ()=>{
        setNumber(number+1)
    }

    const decrement = ()=>{
        setNumber(number-1)
    }

    return [number, increment, decrement];

}

function useWindowSize(){
    return [window.innerWidth, window.innerHeight]
}
//const [width, height] = useWindowSize();

export {useCounter, useWindowSize};