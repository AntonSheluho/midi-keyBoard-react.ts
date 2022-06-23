import { createSlice } from "@reduxjs/toolkit";

// const initialState = {
//     entranceState: false
// }

interface EntranceState {
    entrance: boolean
}

const initialState: EntranceState = {
    entrance: true
}

const entranceSlice = createSlice({
    name: 'entrance',
    initialState,
    reducers: {
        toggleEntranceState: (state) => {
            state.entrance = !state.entrance
        }
    }
})

export default  entranceSlice.reducer
export const {toggleEntranceState} = entranceSlice.actions
