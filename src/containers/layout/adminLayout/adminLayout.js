import React, { Component } from "react"
import classes from "./adminLayout.module.css"
import AdminPage from "../../../pages/adminPage"

export default class AdminLayout extends Component {
    render() {
        return (
            <div className={classes.adminLayout}>
                <div className="main">
                    <AdminPage />
                </div>
            </div>
        )
    }
}