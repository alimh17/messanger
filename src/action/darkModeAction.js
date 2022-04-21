export const darkModeAction = () => (dispatch) => {
  dispatch({ type: "DARK", payload: true });
};

export const lightModeAction = () => (dispatch) => {
  dispatch({ type: "LIGHT", payload: false });
};
