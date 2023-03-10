import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import productsReducer from '../features/products/productsSlice';
import cartReducer from '../features/cart/cartSlice';
import createSagaMiddleware from 'redux-saga';
import { getDefaultNormalizer } from '@testing-library/react';
import { mySaga } from '../features/cart/cartSaga';
const sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware];

export const store = configureStore({
  reducer: {
    product: productsReducer,
    cart: cartReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(middleware),
});

sagaMiddleware.run(mySaga)

