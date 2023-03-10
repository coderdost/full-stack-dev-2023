import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment } from "../slices/bonusSlice";
function Bonus() {

 const dispatch = useDispatch();
 const points= useSelector(state=>state.bonus.points);


  return (
      <div className="card">
        <div className="container">
          <h4>
            <b>Bonus Component</b>
          </h4>
          <h3>Total point : {points}</h3>
          <button onClick={()=>dispatch(increment())}>Increment +</button>
        </div>
      </div>
  );
}

export default Bonus;
