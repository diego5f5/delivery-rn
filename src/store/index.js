import { configureStore } from "@reduxjs/toolkit";

import basketReducer from "./features/basketSlice";
import restaurantReducer from "./features/restaurantSlice";

import Reactotron from "../../reactotronConfig";

export const store = configureStore({
  reducer: {
    basket: basketReducer,
    restaurant: restaurantReducer,
  },
  enhancers: [Reactotron.createEnhancer()],
});
