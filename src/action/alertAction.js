export const InitAlertAction = () => (dispatch, getState) => {
    const alert = [...getState().alert]
    alert.fill(false)

    dispatch({ type: "INIT", payload: alert })
}

export const WarningAlertAction = () => (dispatch, getState) => {
    const alert = [...getState().alert]

    alert.fill(false)
    alert[0] = true

    dispatch({ type: "WARNING", payload: alert })
}