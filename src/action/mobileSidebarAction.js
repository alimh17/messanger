export const showMobileSidebarAction = () => (dispatch) => {
  dispatch({ type: "SHOW", payload: true });
};

export const hideMobileSidebarAction = () => (dispatch) => {
  dispatch({ type: "HIDE", payload: false });
};
