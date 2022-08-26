import { ADD_USER_TO_MESSAGE_LIST, INITIAL, UPDATE_IMAGE_PROFILE } from "store/type/types"

export const initUser = (data) => async (dispatch) => {
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