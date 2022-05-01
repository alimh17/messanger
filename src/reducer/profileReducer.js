export const profileReducer = (state = false, action) => {
  switch (action.type) {
    case "SHOW_PROFILE":
      return true;
    case "HIDE_PROFILE":
      return false;
    default:
      return state;
  }
};
