import { createAction, createReducer } from '@reduxjs/toolkit'

export const increment = createAction('reward/increment')

const initialState = { rewardPoints: 0 }

export const rewardReducer = createReducer(initialState, (builder) => {
    builder
        .addCase(increment, (state, action) => {
            state.rewardPoints++
        })
})

