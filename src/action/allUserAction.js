import { UsersRequest } from "../server/server";

export const allUserAction = () => async (dispatch, getState) => {

    try {
        const res = await UsersRequest();
        dispatch({ type: "GET_USERS", payload: res.data })

    } catch (err) {
        console.log(err)
    }

}