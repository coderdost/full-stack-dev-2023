import { useEffect } from 'react';
import { useState } from 'react';

const Clock = () => {
  const [startDate, setStartDate] = useState(new Date());

  const [date, setDate] = useState(new Date());

  // const id = setInterval(()=>{
  //     setDate(new Date())
  // },1000)
  // console.log(id);
  useEffect(() => {
    // const id = setInterval(() => {
    //   setDate(new Date());
    // }, 1000);
    // console.log(id);

    const id = setInterval(() => {
      setDate(new Date());
    }, 1000);
    console.log(id);
  }, []);

  return (
    <h1>
        <button onClick={()=>setStartDate(new Date())}>Reset</button>
      {Math.floor((date-startDate)/(1000*60*60))%24 + ':' + Math.floor((date-startDate)/(1000*60))%60 + ':' + Math.floor((date-startDate)/1000)%60}
    </h1>
  );
};

export default Clock;
