export const allertReducer = (state = new Array(2).fill(false), action) => {
    switch (action.type) {
        case "INIT": return action.payload
        case "WARNING": return action.payload
        case "ERROR": return action.payload
        default: return state
    }
}