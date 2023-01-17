import { configureStore } from "@reduxjs/toolkit";
import toastSlice from "./toast";
import toggleSlice from "./toggle";

const store = configureStore({
  reducer: { toggle: toggleSlice.reducer, toast: toastSlice.reducer },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
