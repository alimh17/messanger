import _ from 'lodash'

export const addPersonalChat = (user) => (dispatch, getState) => {
    const copyPersonalChat = [...getState().personalChat]
    copyPersonalChat.push(user)
    const uniq = _.uniqWith(copyPersonalChat, user.username)


    dispatch({ type: "ADD_CHAT", payload: uniq })
}