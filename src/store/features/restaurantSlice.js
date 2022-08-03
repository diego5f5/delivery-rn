import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentRestaurant: {
    id: null,
    imgUrl: null,
    title: null,
    rating: null,
    genre: null,
    address: null,
    short_description: null,
    dishes: null,
    long: null,
    lat: null,
  },
};

export const restaurantSlice = createSlice({
  name: "restaurant",
  initialState,
  reducers: {
    setRestaurant: (state, action) => {
      state.currentRestaurant = action.payload;
    },
  },
});

export const { setRestaurant } = restaurantSlice.actions;

export const selectRestaurant = (state) => state.restaurant.currentRestaurant;

export default restaurantSlice.reducer;
