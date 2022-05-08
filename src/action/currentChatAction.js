export const currentChatAction = (user) => (dispatch, getState) => {
    dispatch({ type: "CURRENT_CHAT", payload: user })
} 