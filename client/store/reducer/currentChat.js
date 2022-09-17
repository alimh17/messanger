import { CHANGE_CURRENT_CHAT } from "store/type/types"

const currentChatReducer = (state = {}, action) => {
    switch (action.type) {
        case CHANGE_CURRENT_CHAT: return action.payload
        default: return state
    }
}



export default currentChatReducer