export const currentChatReducer = (state = {}, action) => {
    switch (action.type) {
        case "CURRENT_CHAT":
            return action.payload
        default: return state
    }
}