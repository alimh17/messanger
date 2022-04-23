export const sidebarReducer = (state = new Array(5).fill(false), action) => {
  switch (action.type) {
    case "HOME":
      return action.payload;
    case "CHATS":
      return action.payload;
    case "GROUPS":
      return action.payload;
    case "FAVORITES":
      return action.payload;
    case "SETTING":
      return action.payload;
    default:
      return state;
  }
};
