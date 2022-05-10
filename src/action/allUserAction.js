import { UsersRequest } from "../server/server";

export const allUserAction = (u) => async (dispatch, getState) => {

    try {
        const res = await UsersRequest();
        if (u) {
            const filter = res.data.filter(f => f._id !== u.user._id)
            dispatch({ type: "GET_USERS", payload: filter })
        }

    } catch (err) {
        console.log(err)
    }

}