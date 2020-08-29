import { THEME_CHANGE } from "./acionsType"

export function changeTheme() {
    return (dispatch, getState) => {
        const theme = getState().theme.type
        const newTheme = theme === "light" ? "dark" : "light"
        dispatch(change(newTheme))
    }
}
export function change(theme) {
    return {
        type: THEME_CHANGE,
        theme
    }
}

