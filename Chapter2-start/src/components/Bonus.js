import { useSelector, useDispatch } from "react-redux";
import { increment } from "../slices/bonusSlice";

function Bonus() {
  const point = useSelector(state => state.bonus.point);
  const dispatch = useDispatch();

  return (
    <div className="card">
      <div className="container">
        <h4>
          <b>Bonus Component</b>
        </h4>
        <h3>Total Point : ${point}</h3>
        <button onClick={() => dispatch(increment())}>Increment +</button>
      </div>
    </div>
  );
}

export default Bonus;
