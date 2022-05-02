export const showChatReducer = (state = false, action) => {
    switch (action.type) {
        case "SHOW_CHAT":
            return action.payload
        case "HIDE_CHAT":
            return action.payload
        default: return state
    }
}