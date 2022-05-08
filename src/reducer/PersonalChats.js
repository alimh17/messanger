export const personalChatsReducer = (state = [], action) => {
    switch (action.type) {
        case "INIT_CHAT":
            return action.payload
        case "ADD_CHAT":
            return action.payload
        case "DEL_CHAT":
            return action.payload
        default: return state
    }
}