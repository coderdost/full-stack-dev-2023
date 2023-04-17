import {
  getAccUserFulFilled,
  getAccUserPending,
  getAccUserRejected,
  inc,
  dec,
  incByAmt
} from '../actions';

export function accountReducer(state = { amount: 1 }, action) {
  switch (action.type) {
    case getAccUserFulFilled:
      return { amount: action.payload, pending: false };
    case getAccUserRejected:
      return { ...state, error: action.error, pending: false };
    case getAccUserPending:
      return { ...state, pending: true };
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
