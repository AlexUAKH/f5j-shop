import { AUTH_SIGNUP_SUCCESS, AUTH_SUCCESS } from "../actions/acionsType"

const initialState = {
    token: null,
    role: "user"/*'admin'*/
}

export default function authReducer(state = initialState, action) {
    switch (action.type) {
        case AUTH_SUCCESS:
            return {
                ...state,
                token: action.token
            }
        case AUTH_SIGNUP_SUCCESS:
            return {
                ...state,
                token: action.token
            }

        default:
            return state
    }
}