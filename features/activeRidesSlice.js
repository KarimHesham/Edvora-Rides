import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  activeRides: [],
};

const activeRidesSlice = createSlice({
  name: "activeRides",
  initialState,
  reducers: {
    setActiveRides: (state, action) => {
      state.activeRides = action.payload.activeRides;
    },
    clearActiveRides: (state) => {
      state.activeRides = null;
    },
  },
});

export const { setActiveRides, clearActiveRides } = activeRidesSlice.actions;

export const selectActiveRides = (state) => state.activeRides.activeRides;

export default activeRidesSlice.reducer;
