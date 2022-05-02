export const ShowChatAction = () => (dispatch, getState) => {
    dispatch({ type: "SHOW_CHAT", payload: true })
}

export const HideChatAction = () => (dispatch, getState) => {
    dispatch({ type: "HIDE_CHAT", payload: false })
} 