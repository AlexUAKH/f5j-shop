import { THEME_CHANGE } from "../actions/acionsType"

const initialState = {
    type: "light"
}

export default function themeReducer(state = initialState, action) {
    switch (action.type) {
        case THEME_CHANGE:
            return {
                ...state,
                type: action.theme
            }
        default:
            return state
    }
}