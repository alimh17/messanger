export const initUser = (data) => async (dispatch) => {
    if (data) {
        await dispatch({ type: "INITIAL", payload: data })
    }
}

export const updateImageProfile = (data) => async (dispatch, getState) => {
    const state = { ...getState() }
    state.image = data.image

    return dispatch({ type: "UPDATE_IMAGE_PROFILE", payload: state })
}

