export const initCurrentChatAction = (user) => (dispatch, getState) => {
    const personal = getState().personalChat
    if (personal) {
        const current = personal[0]
        console.log(current)
        // dispatch({ type: "INIT_CURRENT", payload: current })
    }
}

export const currentChatAction = (user) => (dispatch, getState) => {
    dispatch({ type: "CURRENT_CHAT", payload: user })
} 