import { AUTH_ERROR, AUTH_REGISTER_SUCCESS, AUTH_START_LOADING, AUTH_SUCCESS } from "../actions/acionsType"

const initialState = {
    token: null,
    loading: false,
    error: ''
}

export default function authReducer(state = initialState, action) {
    switch (action.type) {
        case AUTH_START_LOADING:
            return {
                ...state,
                loading: true
            }
        case AUTH_SUCCESS:
            return {
                ...state,
                token: action.token,
                loading: false
            }
        case AUTH_REGISTER_SUCCESS:
            return {
                ...state,
                token: action.token,
                loading: false
            }
        case AUTH_ERROR:
            return {
                ...state,
                error: action.err,
                loading: false
            }

        default:
            return state
    }
}