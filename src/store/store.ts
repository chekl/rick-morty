import { configureStore } from "@reduxjs/toolkit";
import characterReducer from './characters'

export const store = configureStore({ reducer: characterReducer });

export type AppDispatch = typeof store.dispatch;