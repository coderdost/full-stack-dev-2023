import { useState } from "react";
import { useCounter, useWindowSize } from "../hooks/use-counter";

function Counter(){
    console.log('render Counter')
    const [number, setNumber] = useState(0);
    const [num, inc, dec] = useCounter(10);
    const [width, height] = useWindowSize();
    console.log({width,height})

    function handleClick(e){
        e.stopPropagation();
       
       setNumber(number=>number+1);
       setNumber(number=>number+1);
       setNumber(number=>number+1);
        
        console.log(number)
    }

    return(
        <>
        <h1 style={{color:'white'}}>{number}</h1>
        <button onClick={handleClick}>Add</button>
        <h1 style={{color:'white'}}>Counter Hook : {num} </h1>
        <button onClick={inc}>Inc</button>
        <button onClick={dec}>Dec</button>

        </>
    )

}

export default Counter;