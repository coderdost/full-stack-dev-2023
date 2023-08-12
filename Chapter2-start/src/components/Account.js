import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, incrementByAmount, getUser } from '../slices/accountSlice';

function Account() {
  const amount = useSelector(state => state.account.amount);
  const dispatch = useDispatch();

  return (
    <div className="card">
      <div className="container">
        <h4>
          <b>Account Component</b>
        </h4>
        <h3>Amount:${amount}</h3>
        <button onClick={() => dispatch(increment())}>Increment +</button>
        <button onClick={() => dispatch(decrement())}>Decrement -</button>
        <button onClick={() => dispatch(incrementByAmount(1011))}>
          Increment By +
        </button>
        <button onClick={() => dispatch(getUser(1))}>
          get user
        </button>
      </div>
    </div>
  );
}

export default Account;
