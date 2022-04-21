export const darkMode = (state = false, action) => {
  switch (action.type) {
    case "DARK":
      return action.payload;
    case "LIGHT":
      return action.payload;
    default:
      return state;
  }
};
