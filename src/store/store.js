// -> redux-thunk is included by default in redux toolkit

import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";

// -> this will use by default the local storage from the browser
import storage from "redux-persist/lib/storage";
import logger from "redux-logger";
// import thunk from "redux-thunk";

import { rootReducer } from "./root-reducer";

const persistConfig = {
  key: "root",
  storage,

  // -> a list of reducers you don't want to
  // persist
  blacklist: ["user"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

// -> library helpers that run before an actions gets to the reducer
// -> if the environment is not development then do
// not add the logger middleware (filter will remove the false
// that the array of middleware will contain when in production)
const middlewares = [process.env.NODE_ENV !== "production" && logger].filter(
  Boolean
);

// // -> if not in production, when we have a window that contains the
// // redux devtools extension installed attach it
// const composeEnhancer =
//   (process.env.NODE_ENV !== "production" &&
//     window &&
//     window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
//   compose;

// // -> pass all the middlewares that we have to redux
// const composedEnhancers = composeEnhancer(applyMiddleware(...middlewares));

// -> the undefined argument is additional default states
// useful for easier testing
// -> the enhancers (3rd arg), enhances our store; it catches actions
// eg: logger -> the middleware catches actions before we hit the reducer and
// it logs out the state
export const store = configureStore({
  reducer: persistedReducer,

  // -> use only the middlewares I tell you to (not your defaults)
  // -> if you want to include both the default middlewares and
  // your custom ones pass a function
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }).concat(middlewares),
  //{
  // -> turns off this serializableCheck middleware if
  // used as a param for getDefaultMiddleware()
  // -> we want to do this since reduxjs toolkit wants
  // to only work with data that is serializable (numbers, strings)
  // and not objects of certain class types
  //serializableCheck: false,
  //}
});

export const persistor = persistStore(store);
