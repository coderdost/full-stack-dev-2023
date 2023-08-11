import { createAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchItems, addItem, updateItem, deleteItem } from './cartAPI';

const initialState = {
  items: [] ,
  status: 'idle',
};

export const fetchAsync = createAction('cart/fetchItems/pending')
export const fetchAsyncFulfilled = createAction('cart/fetchItems/fulfilled')
export const addAsync = createAction('cart/addItem/pending')
export const addAsyncFulfilled = createAction('cart/addItem/fulfilled')

export const deleteAsync = createAction('cart/deleteItem/fulfilled')
export const updateAsync = createAction('cart/udpateItem/fulfilled')

// export const fetchAsync = createAsyncThunk(
//   'cart/fetchItems',
//   async () => {
//     const response = await fetchItems();
//     return response.data;
//   }
// );

// export const addAsync = createAsyncThunk(
//   'cart/addItem',
//   async (item) => {
//     const {id,title,brand,thumbnail,price} = item;
//     const response = await addItem({id,title,brand,thumbnail,price,quantity:1});
//     return response.data;
//   }
// );
// export const deleteAsync = createAsyncThunk(
//   'cart/deleteItem',
//   async (id) => {
//     await deleteItem(id);
//     return id;
//   }
// );

// export const updateAsync = createAsyncThunk(
//   'cart/updateItem',
//   async ({id,change}) => {
//     const response = await updateItem(id, change);
//     return response.data;
//   }
// );

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
  
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAsyncFulfilled, (state, action) => {
        state.status = 'idle';
        state.items = action.payload;
      })
      .addCase(addAsyncFulfilled, (state, action) => {
        state.status = 'idle';
        state.items.push(action.payload);
      })
      .addCase(deleteAsync, (state, action) => {
        state.status = 'idle';
        const index =state.items.findIndex(item=>item.id===action.payload)
        state.items.splice(index,1);
      }).addCase(updateAsync, (state, action) => {
        state.status = 'idle';
        const index =state.items.findIndex(item=>item.id===action.payload.id)
        console.log(index,action.payload)
        state.items.splice(index,1, action.payload);
      });
  },
});

// export const { } = cartSlice.actions;

export default cartSlice.reducer;
