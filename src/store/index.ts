import { combineReducers, configureStore } from '@reduxjs/toolkit'
import entranceSlice from './slices/EntranceSlice'
import RegistrationSlice from './slices/RegistrationSlice'
import Eye3Slice from './slices/Eye3Slice'

const rootReducer = combineReducers({
    entrance: entranceSlice,
    regisrtation: RegistrationSlice,
    eye3: Eye3Slice
})

const store = configureStore({
    reducer: rootReducer
})

type RootState = ReturnType<typeof store.getState>

// export const selectors = {
//     selectorEnrtance(state: RootState) {state.entrance.entrance},
//     selectorRegistration(state: RootState) {state.regisrtation.registration},
// }
export const selectorEnrtance = (state: RootState) => state.entrance.entrance
export const selectorRegistration = (state: RootState) => state.regisrtation.registration

export default store