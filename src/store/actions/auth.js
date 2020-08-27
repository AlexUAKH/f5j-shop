import axios from "../../utilites/axias/axias-sh"
import { AUTH_LOGOUT, AUTH_SIGNUP_SUCCESS, AUTH_SUCCESS } from "./acionsType"

export function signUp(email, password, fName, lName) {
    return async dispatch => {
        const data = {
            email,
            password,
            returnSecureToken: true
        }
        let url = "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDrxMt8bq9uRddROkQQb8jFfDibYjbdgm8"
        console.log("data", data)
        sentData(url, data, dispatch)
            .then(
                () => {
                    console.log("Success")
                })
            .catch(console.log("fail"))
    }
}

export function auth(email, password, isLigin) {
    return dispatch => {
        const data = {
            email,
            password,
            returnSecureToken: true
        }
        const url = "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDrxMt8bq9uRddROkQQb8jFfDibYjbdgm8"
        sentData(url, data, dispatch)
    }
}

const sentData = async (url, data, dispatch) => {
    const res = await axios.post(url, data)
    const dt = res.data
    const expirationDate = new Date(new Date().getTime() + dt.expiresIn * 1000)

    localStorage.setItem("token", dt.idToken)
    localStorage.setItem("userId", dt.localId)
    localStorage.setItem("expirationDate", expirationDate)

    dispatch(authSuccess(dt.idToken))
    dispatch(autoLogout(dt.expiresIn))
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