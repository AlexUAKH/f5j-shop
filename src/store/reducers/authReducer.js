import { AUTH_ERROR, AUTH_REGISTER_SUCCESS, AUTH_SUCCESS } from "../actions/acionsType"

const initialState = {
    token: null,
    err: null
}

export default function authReducer(state = initialState, action) {
    switch (action.type) {
        case AUTH_SUCCESS:
            return {
                ...state,
                token: action.token
            }
        case AUTH_REGISTER_SUCCESS:
            return {
                ...state,
                token: action.token
            }
        case AUTH_ERROR:
            return {
                ...state,
                error: action.err
            }

        default:
            return state
    }
}