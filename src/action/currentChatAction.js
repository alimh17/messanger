export const initChatAction = (user) => (dispatch, getState) => {
    const current = { ...getState().currentChat }
}

export const currentChatAction = (user) => (dispatch, getState) => {
    dispatch({ type: "CURRENT_CHAT", payload: user })
} 