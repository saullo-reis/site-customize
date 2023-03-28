import { createSlice } from "@reduxjs/toolkit";

const data = createSlice({
  name: "data",
  
  initialState: {
    layout: "",
    backgroundMain: "",
    headerAndFooter: {
      background: "#324fcf",
      logo: "https://cdn-icons-png.flaticon.com/512/1373/1373255.png",
    },
    box: {
      images: [],
      texts: [],
      backgroundBox: "",
      quantity: 0,
    },
    text: {
      text: "",
    },
    textAndImage: {
      image: "",
      text: "",
    },
  },

  reducers: {
    addMainBackground(state, action){
      state.backgroundMain = action.payload
    },
    addLayout(state, action) {
      state.layout = action.payload;
    },
    addDataHeaderFooter(state, action) {
      state.headerAndFooter = action.payload;
    },
    //BOX
    AddBoxData(state, action) {
      state.box = action.payload;
    },
    //TEXT
    AddText(state, action) {
      state.text.text = action.payload;
    },
    //TEXT AND IMAGE
    AddTextAndImage(state, action) {
      state.textAndImage = action.payload;
    },
  },
});

export const { addMainBackground, addLayout, addDataHeaderFooter, AddBoxData, AddTextAndImage, AddText } = data.actions;
export default data.reducer;
