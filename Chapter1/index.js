import { createStore, applyMiddleware, combineReducers } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import axios from 'axios';

//action name constants
// const init = 'account/init';
const inc = 'account/increment';
const dec = 'account/decrement';
const incByAmt = 'account/incrementByAmount';
const getAccUserPending = 'account/getUser/pending';
const getAccUserFulFilled = 'account/getUser/fulfilled';
const getAccUserRejected = 'account/getUser/rejected';
const incBonus = 'bonus/increment';
//store
const store = createStore(
  combineReducers({
    account: accountReducer,
    bonus: bonusReducer
  }),
  applyMiddleware(logger.default, thunk.default)
);

const history = [];

//reducer

function accountReducer(state = { amount: 1 }, action) {
  switch (action.type) {
    case getAccUserFulFilled:
      return { amount: action.payload, pending:false };
    case getAccUserRejected:
        return {...state, error:action.error, pending:false  };
    case getAccUserPending:
            return { ...state,pending:true };
    case inc:
      return { amount: state.amount + 1 };
    case dec:
      return { amount: state.amount - 1 };
    case incByAmt:
      return { amount: state.amount + action.payload };
    default:
      return state;
  }
}

function bonusReducer(state = { points: 0 }, action) {
    switch (action.type) {
        case incBonus:
            return { points:  state.points + 1 };
        case incByAmt:
            if(action.payload>=100)
              return { points:  state.points + 1 };
        default:
            return state;    
    }
}


//global state

// store.subscribe(() => {
//   history.push(store.getState());
//   console.log(history);
// });


//Action creators
function getUserAccount(id) {
  return async (dispatch, getState) => {
    try{
        dispatch(getAccountUserPending());
        const { data } = await axios.get(`http://localhost:3000/accounts/${id}`);
        dispatch(getAccountUserFulFilled(data.amount));
    } catch(error){
        dispatch(getAccountUserRejected(error.message));
    }
   
  };
}
function getAccountUserFulFilled(value) {
  return { type: getAccUserFulFilled, payload: value };
}
function getAccountUserRejected(error) {
    return { type: getAccUserRejected, error: error };
}
  function getAccountUserPending() {
    return { type: getAccUserPending };
}

function increment() {
  return { type: inc };
}
function decrement() {
  return { type: dec };
}
function incrementByAmount(value) {
  return { type: incByAmt, payload: value };
}
function incrementBonus(value) {
    return { type: incBonus};
  }

setTimeout(() => {
  store.dispatch(getUserAccount(2));
// store.dispatch(incrementByAmount(200))
// store.dispatch(incrementBonus());
}, 2000);
