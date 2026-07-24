import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  favoriterecipes: [], // Updated to handle favorite articles
};

const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    toggleFavorite: (state, action) => {
      const food = action.payload;
      const foodIndex = state.favoriterecipes.findIndex(
        (item) => item.idFood === food.idFood
      );
      if (foodIndex >= 0) {
        state.favoriterecipes.splice(foodIndex, 1);
      } else {
        state.favoriterecipes.push(food);
      }
    },
  },
});

export const { toggleFavorite } = favoritesSlice.actions;
export default favoritesSlice.reducer;
