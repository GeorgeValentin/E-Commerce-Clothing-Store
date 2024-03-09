import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
  currentUser: null,
};

// -> createSlice({}) will create for us:
// - the reducers
// - the actions
// - the action types
export const userSlice = createSlice({
  // -> this namespaces actions for us
  // (it will put users/ before each action)
  name: "user",
  initialState: INITIAL_STATE,
  reducers: {
    setCurrentUser(state, action) {
      // -> update the state
      // NOTE: This does not mutate state, but it will create
      // a new object behind the scenes
      state.currentUser = action.payload;
    },
  },
});

export const { setCurrentUser } = userSlice.actions;

export const userReducer = userSlice.reducer;
