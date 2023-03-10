import { call, put, takeEvery, all } from 'redux-saga/effects';
import { addAsync, addAsyncFulfilled, fetchAsync, fetchAsyncFulfilled } from './cartSlice';
import { addItem, fetchItems } from './cartAPI';

// Worker saga will be fired on USER_FETCH_REQUESTED actions
function* getCartItems(action) {
  const response = yield call(fetchItems); 
  yield put({ type:fetchAsyncFulfilled.toString() , payload: response.data });
}

function* addCartItem(action) {
  const {id,title,brand,thumbnail,price} = action.payload;  
  const response = yield call(addItem,{id,title,brand,thumbnail,price,quantity:1}); 
  yield put({ type:addAsyncFulfilled.toString() , payload: response.data });
}

 function* watchGetItem() {
  yield takeEvery(fetchAsync.toString(), getCartItems);
}
 function* watchAddItem() {
    yield takeEvery(addAsync.toString(), addCartItem);
  }

export  function* mySaga() {
    yield all([
        watchGetItem(),
        watchAddItem()
    ])
  }
