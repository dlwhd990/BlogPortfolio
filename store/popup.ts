import { createSlice } from "@reduxjs/toolkit";

const initialState = { menu: false };

const popupSlice = createSlice({
  name: "popup",
  initialState,
  reducers: {
    changeMenuState(state) {
      state.menu = !state.menu;
    },
    closeMenu(state) {
      state.menu = false;
    },
  },
});

export const { changeMenuState, closeMenu } = popupSlice.actions;
export default popupSlice;
