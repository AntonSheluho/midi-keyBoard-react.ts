import { createSlice } from "@reduxjs/toolkit";

interface RegistrationState {
    registration: boolean
}

const initialState: RegistrationState = {
    registration: false
}

const registrationSlice = createSlice({
    name: 'registration',
    initialState,
    reducers: {
        toggleRegistrationState: (state) => {
            state.registration = !state.registration
        }
    }
})

export const {toggleRegistrationState} = registrationSlice.actions
export default registrationSlice.reducer