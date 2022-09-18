import { ADD_USER_TO_MESSAGE_LIST, INITIAL, REMOVE_USER_OF_MESSAGE_LIST, UPDATE_IMAGE_PROFILE } from "store/type/types"

const init = {
    email: "",
    image: "",
    chatList: []
}

const userInfoReducer = (state = init, action) => {
    switch (action.type) {
        case INITIAL: return action.payload
        case UPDATE_IMAGE_PROFILE: return action.payload
        case ADD_USER_TO_MESSAGE_LIST: return action.payload
        case REMOVE_USER_OF_MESSAGE_LIST: return action.payload
        default: return state
    }
}



export default userInfoReducer