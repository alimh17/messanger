export const mobileSidebar = (state = false, action) => {
  switch (action.type) {
    case "SHOW":
      return action.payload;
    case "HIDE":
      return action.payload;
    default:
      return state;
  }
};
