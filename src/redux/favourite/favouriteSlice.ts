import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { SpellInfo } from "../spell/types";

const INITIAL_STATE: any = {
  favourites: [],
};

const favouriteSlice = createSlice({
  name: "Favourites",
  initialState: INITIAL_STATE,
  reducers: {
    addToFavourites: (state, { payload }: PayloadAction<any>) => {
      if (state.favourites.some((fav: SpellInfo) => fav.index === payload.index)) {
        console.log("Already exist");
      } else {
        state.favourites = [...state.favourites, payload];
      }
    },
    removeFromFavourites: (state, {payload}:PayloadAction<any>) => {
      state.favourites = state.favourites.filter((fav: SpellInfo) => fav.index !== payload.index)
    },
  },
});

export const { addToFavourites, removeFromFavourites } = favouriteSlice.actions;

export const favouriteSelector = (state: any) => state.Favourites;

export default favouriteSlice.reducer;
