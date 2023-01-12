import { configureStore } from "@reduxjs/toolkit";
import toggleSlice from "./toggle";

const store = configureStore({ reducer: { toggle: toggleSlice.reducer } });

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
