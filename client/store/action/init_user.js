import { ADD_USER_TO_MESSAGE_LIST, INITIAL, REMOVE_USER_OF_MESSAGE_LIST, UPDATE_IMAGE_PROFILE } from "store/type/types"

export const initUser = (data) => async (dispatch) => {
    console.log(data);
    if (data) {
        dispatch({ type: INITIAL, payload: data })
    }
}

export const updateImageProfile = (data) => async (dispatch, getState) => {
    const state = { ...getState() }
    state.image = data.image

    return dispatch({ type: UPDATE_IMAGE_PROFILE, payload: state })
}

export const addUserToChatList = (data) => async (dispatch, getState) => {
    const state = { ...getState().user }
    data.map(user => delete user.chatList)
    state.chatList = data
    return dispatch({ type: ADD_USER_TO_MESSAGE_LIST, payload: state })
}
export const removeUserOfChatList = (data) => async (dispatch, getState) => {
    const state = { ...getState().user }
    const filter = state.chatList.filter(f => f._id !== data._id)
    state.chatList = filter
    return dispatch({ type: REMOVE_USER_OF_MESSAGE_LIST, payload: state })
}