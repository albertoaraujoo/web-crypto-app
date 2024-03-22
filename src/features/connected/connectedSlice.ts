import { createSlice } from "@reduxjs/toolkit";

const initialConnectedState: boolean = false;

const connectedSlice = createSlice({
  name: "connected",
  initialState: initialConnectedState,
  reducers: {
    setConnected: (state, action) => action.payload,
  },
});

export const { setConnected } = connectedSlice.actions;

export default connectedSlice.reducer;
