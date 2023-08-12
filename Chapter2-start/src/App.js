import { useSelector } from 'react-redux';
import './App.css';
import Account from './components/Account';
import Bonus from './components/Bonus';
import Reward from './components/Reward';

function App() {
  const amount = useSelector(state => state.account.amount);
  const bonus = useSelector(state => state.bonus.point)
  const pending = useSelector(state => state.account.pending);
  return (
    <div className="App">
      <h4>App</h4>
      <h3>Current Amount : {pending ? 'Loadiiing...' : amount} </h3>
      <h3>Total Bonus : {pending ? 'Loading....' : bonus}</h3>

      <Account></Account>
      <Bonus></Bonus>
      <Reward></Reward>
    </div>
  );
}

export default App;
