import { useSelector, useDispatch } from "react-redux";
import { increment } from "../reducers/reducer";

function Reward() {
    const point = useSelector(state => state.reward.rewardPoints);
    const dispatch = useDispatch();

    return (
        <div className="card">
            <div className="container">
                <h4>
                    <b>Reward Component</b>
                </h4>
                <h3>Total Point : ${point}</h3>
                <button onClick={() => dispatch(increment())}>Increment +</button>
            </div>
        </div>
    );
}

export default Reward;
