// -> the 1st function receives the store
// object, it returns another function
// that receives the next function, which
// allows us to pass on the action
// then the next function this one returns receives
// the action and then we write the middleware
// signature
export const loggerMiddleware = (store) => (next) => (action) => {
  if (!action.type) {
    return next(action);
  }

  console.log("type: ", action.type);
  console.log("payload: ", action.payload);
  console.log("currentState: ", store.getState());

  // -> we need to pass the action to the next
  // subsequent middleware and reducers
  // so that the state will update
  // (the reducers -> the store -> the selectors rerun)
  next(action);

  console.log("next state: ", store.getState());
};
