import { createSlice } from "@reduxjs/toolkit"

interface Eye3State {
    eye3: boolean
}

const initialState: Eye3State = {
    eye3: false
}

const Eue3Slice = createSlice({
    name: 'eye3',
    initialState,
    reducers: {
        disabledEye3: (state) => {
            state.eye3 = !state.eye3
        }
    }
})

export const {disabledEye3} = Eue3Slice.actions
export default Eue3Slice.reducer