// -> from the entire global state -> from the user reducer -> take the currentUser state value
export const selectCurrentUser = (state) => {
  return state.user.currentUser;
};
