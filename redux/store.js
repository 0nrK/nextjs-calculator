import { configureStore } from '@reduxjs/toolkit'
import screenValueReducer from './screenValueSlice'


const store = configureStore({
    reducer: {
        screenValue: screenValueReducer,
    }
})

export default store