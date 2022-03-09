import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  rides: [],
};

const ridesSlice = createSlice({
  name: "rides",
  initialState,
  reducers: {
    setRides: (state, action) => {
      state.rides = action.payload.rides;
    },
    clearRides: (state) => {
      state.rides = null;
    },
  },
});

export const { setRides, clearRides } = ridesSlice.actions;

export const selectRides = (state) => state.rides;

export default ridesSlice.reducer;
