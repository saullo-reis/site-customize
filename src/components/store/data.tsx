import { createSlice } from "@reduxjs/toolkit";

const boxData = createSlice({
    name: 'boxData',
    initialState: {
        images:[],
        texts:[],
        backgroundBox: '',
        quantity: 0
    },
    reducers:{
        AddBackgroundBox(state, action){
            state.backgroundBox = action.payload
        },
        AddImagesBox(state,action){
            state.images = action.payload
        },
        AddTextsBox(state,action){
            state.texts = action.payload
        },
        AddQuantityBox(state,action){
            state.quantity = action.payload
        }
    }
})

export const {AddBackgroundBox, AddImagesBox, AddQuantityBox, AddTextsBox} = boxData.actions
export default boxData.reducer