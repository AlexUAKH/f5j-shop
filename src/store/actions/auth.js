import axios from "axios"
import { AUTH_ERROR, AUTH_LOGOUT, AUTH_REGISTER_SUCCESS, AUTH_START_LOADING, AUTH_SUCCESS } from "./acionsType"

export function auth(email, password, isLogin) {
    return dispatch => {
        dispatch(startAuth())
        const data = {
            email,
            password,
            returnSecureToken: true
        }
        let url
        if (isLogin) {
            url = "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDrxMt8bq9uRddROkQQb8jFfDibYjbdgm8"
        } else {
            url = "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDrxMt8bq9uRddROkQQb8jFfDibYjbdgm8"
        }

        axios.post(url, data)
            .then((res) => {
                console.log("res: ", res)
                const dt = res.data
                const expirationDate = new Date(new Date().getTime() + dt.expiresIn * 1000)

                localStorage.setItem("token", dt.idToken)
                localStorage.setItem("userId", dt.localId)
                localStorage.setItem("expirationDate", expirationDate)

                if (isLogin) {
                    dispatch(authSuccess(dt.idToken))
                } else {
                    dispatch(registerSuccess(dt.idToken))
                }
                dispatch(autoLogout(dt.expiresIn))
            })
            .catch((e) => {
                dispatch(authError(e))
            })

    }
}

export function startAuth() {
    return {
        type: AUTH_START_LOADING
    }
}

export function autoLogout(time) {
    return dispatch => {
        setTimeout(() => {
            dispatch(logout())
        }, time * 1000)
    }
}

export function logout() {
    localStorage.removeItem("token")
    localStorage.removeItem("userId")
    localStorage.removeItem("expirationDate")

    return {
        type: AUTH_LOGOUT
    }
}

export function authSuccess(token) {
    return {
        type: AUTH_SUCCESS,
        token
    }
}

export function registerSuccess(token) {
    return {
        type: AUTH_REGISTER_SUCCESS,
        token
    }
}

export function authError(err) {
    return {
        type: AUTH_ERROR,
        err
    }
}


export function autoLogin() {
    return dispatch => {
        const token = localStorage.getItem("token")
        if (!token) {
            dispatch(logout())
        } else {
            const expirationDate = new Date(localStorage.getItem("expirationDate"))
            if (expirationDate <= new Date()) {
                dispatch(logout())
            } else {
                dispatch(authSuccess(token))
                dispatch(autoLogout((expirationDate.getTime() - new Date().getTime()) / 1000))
            }
        }
    }
}