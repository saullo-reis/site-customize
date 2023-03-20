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
    addLayout(state, action) {
      state.layout = action.payload;
    },
    addDataHeaderFooter(state, action) {
      state.headerAndFooter = action.payload;
    },
    //BOX
    AddBackgroundBox(state, action) {
      state.box.backgroundBox = action.payload;
    },
    //TEXT
    AddText(state, action) {
      state.text.text = action.payload;
    },
    //TEXT AND IMAGE
    AddTextOnImage(state, action) {
      state.textAndImage.text = action.payload;
    },
  },
});

export const { addLayout, addDataHeaderFooter } = data.actions;
export default data.reducer;
