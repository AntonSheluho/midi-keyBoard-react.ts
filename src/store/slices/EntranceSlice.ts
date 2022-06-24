import { createSlice } from "@reduxjs/toolkit";

interface EntranceState {
    entrance: boolean
}

const initialState: EntranceState = {
    entrance: false
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
