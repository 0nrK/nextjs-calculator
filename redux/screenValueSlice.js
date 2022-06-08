import { createSlice } from '@reduxjs/toolkit'

const screenValueSlice = createSlice({
    name: 'screenValue',
    initialState: {
        text: []
    },
    reducers: {
        updateScreenValue: (state, action) => {
            state.text = action.payload
        }
    }
})

export const { updateScreenValue } = screenValueSlice.actions;
export default screenValueSlice.reducer