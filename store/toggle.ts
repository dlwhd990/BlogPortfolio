import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  menu: false,
  sidebar: false,
  darkMode: false,
};

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
    changeSidebarState(state) {
      state.sidebar = !state.sidebar;
    },
    closeSidebar(state) {
      state.sidebar = false;
    },
    changeDarkModeState(state) {
      state.darkMode = !state.darkMode;
    },
  },
});

export const {
  changeMenuState,
  closeMenu,
  changeSidebarState,
  closeSidebar,
  changeDarkModeState,
} = toggleSlice.actions;
export default toggleSlice;
