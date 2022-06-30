import { createSlice } from "@reduxjs/toolkit";
import { SliceInterface } from "./SliceInterface";

const initialState: SliceInterface = {
    value: false
}

const Song2Slice = createSlice({
    name: 'song2',
    initialState,
    reducers: {
        toggleSong2View: (state) => {
            state.value = !state.value
        }
    }
})

export const {toggleSong2View} = Song2Slice.actions
export default Song2Slice.reducer