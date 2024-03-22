import { createSlice } from "@reduxjs/toolkit";

const initialAccountState: string = "";
const initialBalanceState: string = "";

const accountSlice = createSlice({
  name: "account",
  initialState: initialAccountState,
  reducers: {
    setAccount: (state, action) => action.payload,
  },
});

const balanceSlice = createSlice({
  name: "balance",
  initialState: initialBalanceState,
  reducers: {
    setBalance: (state, action) => action.payload,
  },
});

export const { setAccount } = accountSlice.actions;
export const { setBalance } = balanceSlice.actions;

export default {
  account: accountSlice.reducer,
  balance: balanceSlice.reducer,
};
