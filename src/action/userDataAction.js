export const userDataAction = (data) => async (dispatch) => {
    await dispatch({ type: "GET_USER_DATA", payload: data })
}