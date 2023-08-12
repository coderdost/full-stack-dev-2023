import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

export const getUser = createAsyncThunk(
    'account/getUser',
    async (userId, thunkAPI) => {
        await new Promise((resolve, rejected) => {
            setTimeout(() => {
                resolve()
            }, 5000);
        })
        const { data } = await axios(`http://localhost:8080/accounts/${userId}`);

        return data;
    }
)

const initialState = {
    amount: 1,
    pending: false
}

export const accountSlice = createSlice({
    name: 'account',
    initialState,
    reducers: {
        increment: (state) => {
            state.amount += 1
        },
        decrement: (state) => {
            state.amount -= 1
        },
        incrementByAmount: (state, action) => {
            state.amount += action.payload
        }
    },
    extraReducers: (builder) => {
        builder.addCase(getUser.pending, (state, action) => {
            state.pending = true;
        }).addCase(getUser.fulfilled, (state, action) => {
            state.pending = false;
        }).addCase(getUser.rejected, (state, action) => {
            state.pending = false;
        })
    }
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = accountSlice.actions

export default accountSlice.reducer