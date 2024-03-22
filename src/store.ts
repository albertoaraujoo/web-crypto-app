import { configureStore } from "@reduxjs/toolkit";
import accountAndBalanceReducers from "./features/account-and-balance/account-and-balance-slice";
import connectedReducer from "./features/connected/connectedSlice";

export const store = configureStore({
  reducer: {
    ...accountAndBalanceReducers,
    connected: connectedReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
