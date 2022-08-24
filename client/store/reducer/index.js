
const init = {
    email: "",
    image: ""
}

const rootReducer = (state = init, action) => {
    switch (action.type) {
        case "INITIAL": return action.payload
        case "UPDATE_IMAGE_PROFILE": return action.payload
        default: return state
    }
}



export default rootReducer