import { createSlice } from "@reduxjs/toolkit";

const initialState = { menu: false };

const toggleSlice = createSlice({
  name: "toggle",
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

export const { changeMenuState, closeMenu } = toggleSlice.actions;
export default toggleSlice;
