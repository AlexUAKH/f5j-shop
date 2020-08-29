import { combineReducers } from "redux"
import authReducer from "./authReducer"
import cartReducer from "./cartReducer"
import themeReducer from "./themeReducer"

export default combineReducers({
    theme: themeReducer,
    auth: authReducer,
    cart: cartReducer
})