  import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../features/CardSlice";
import wishlistReducer from "../features/CardSlice"

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    wishlist: wishlistReducer,
  },
});

