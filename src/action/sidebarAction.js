export const activeHomeAction = () => (dispatch, getState) => {
  const sidebar = [...getState().sidebar];
  sidebar.fill(false);
  sidebar[0] = true;

  dispatch({ type: "HOME", payload: sidebar });
};

export const activeChatsAction = () => (dispatch, getState) => {
  const sidebar = [...getState().sidebar];
  sidebar.fill(false);
  sidebar[1] = true;
  dispatch({ type: "CHATS", payload: sidebar });
};
export const activeGroupsAction = () => (dispatch, getState) => {
  const sidebar = [...getState().sidebar];
  sidebar.fill(false);
  sidebar[2] = true;
  dispatch({ type: "GROUPS", payload: sidebar });
};
export const activeFavoritesAction = () => (dispatch, getState) => {
  const sidebar = [...getState().sidebar];
  sidebar.fill(false);
  sidebar[3] = true;
  dispatch({ type: "FAVORITES", payload: sidebar });
};
export const activeSettingAction = () => (dispatch, getState) => {
  const sidebar = [...getState().sidebar];
  sidebar.fill(false);
  sidebar[4] = true;
  dispatch({ type: "SETTING", payload: sidebar });
};
