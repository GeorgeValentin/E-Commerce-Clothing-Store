import { combineReducers } from "@reduxjs/toolkit";

import { userReducer } from "./user/user.reducer";
import { categoriesReducer } from "./categories/category.reducer";
import { cartReducer } from "./cart/cart.reducer";

// -> whenever any of the reducer's state data changes the entire
// store object is gonna be a new one
export const rootReducer = combineReducers({
  user: userReducer,
  category: categoriesReducer,
  cart: cartReducer,
});
