import _ from 'lodash'

export const addPersonalChat = (user) => (dispatch, getState) => {
    let copyPersonalChats = [...getState().personalChat]
    copyPersonalChats.push(user)
    const uniq = _.uniq(copyPersonalChats)
    dispatch({ type: "ADD_CHAT", payload: uniq })
}