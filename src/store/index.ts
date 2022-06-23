import { combineReducers, configureStore } from '@reduxjs/toolkit'
import entranceSlice from './EntranceSlice'

const rootReducer = combineReducers({
    entrance: entranceSlice
})

const store = configureStore({
    reducer: rootReducer
})

type RootState = ReturnType<typeof store.getState>;

export const selectorEnrtance = (state: RootState) => state.entrance.entrance

export default store