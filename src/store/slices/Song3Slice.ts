import { createSlice } from "@reduxjs/toolkit";
import { SliceInterface } from "./SliceInterface";

const initialState: SliceInterface = {
    value: false
}

const Song3Slice = createSlice({
    name: 'song3',
    initialState,
    reducers: {
        toggleSong3View: (state) => {
            state.value = !state.value
        }
    }
})

export const {toggleSong3View} = Song3Slice.actions
export default Song3Slice.reducer