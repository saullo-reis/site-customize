import {configureStore} from '@reduxjs/toolkit'
import nameReducer from './name'
import boxReducer from './data'

const store = configureStore({
    reducer: {
        name: nameReducer,
        boxData: boxReducer
    }
})

export type RootState = ReturnType<typeof store.getState>
export default store