import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    point: 1,
}

export const bonusSlice = createSlice({
    name: 'bonus',
    initialState,
    reducers: {
        increment: (state) => {
            state.point += 1
        },
    },
})

// Action creators are generated for each case reducer function
export const { increment } = bonusSlice.actions

export default bonusSlice.reducer