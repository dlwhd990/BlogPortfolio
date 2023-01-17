import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  toastOn: false,
  message: "검색어는 최소 2자 이상이어야 합니다!",
};

const toastSlice = createSlice({
  name: "toast",
  initialState,
  reducers: {
    popupToast(state, action) {
      state.toastOn = true;
      state.message = action.payload;
    },
    closeToast(state) {
      state.toastOn = false;
      state.message = "";
    },
  },
});

export const { popupToast, closeToast } = toastSlice.actions;

export default toastSlice;
