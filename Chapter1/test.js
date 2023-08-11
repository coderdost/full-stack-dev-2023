const state = { account: { amount: 1 }, bonus: { points: 2 } };
const newState = { account: {...state.account}, bonus: {points: state.bonus.points+1} };

console.log(newState, state);
state.account.amount=100;
console.log(newState, state);
