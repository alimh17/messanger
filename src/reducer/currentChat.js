export const currentChatReducer = (state = {}, action) => {
    switch (action.type) {
        case "INIT_CURRENT": return action.payload
        case "CURRENT_CHAT":
            return action.payload
        default: return state
    }
}