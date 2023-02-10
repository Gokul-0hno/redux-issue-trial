import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";

export function initStore() {
  return configureStore({
    reducer: {
      counter: counterReducer
    }
  });
}
