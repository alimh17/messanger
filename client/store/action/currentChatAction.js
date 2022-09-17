import { CHANGE_CURRENT_CHAT } from "store/type/types"

export const currentChatAction = (data) => async (dispatch) => {
    const copyData = { ...data }
    delete copyData.chatList
    dispatch({ type: CHANGE_CURRENT_CHAT, payload: copyData })
}