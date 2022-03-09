import { configureStore } from "@reduxjs/toolkit";
import ridesReducer from "../features/ridesSlice";
import activeRidesReducer from "../features/activeRidesSlice";

export const store = configureStore({
  reducer: {
    rides: ridesReducer,
    activeRides: activeRidesReducer,
  },
});
