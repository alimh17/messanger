

export const allUserReducer = (state = [], action) => {

    switch (action.type) {
        case "GET_USERS":
            return action.payload
        default: return state
    }

}