import React, { Component } from "react"
import classes from "./mainLayout.module.css"
import TopMenu from "../../../containers/topMenu"

export default class MainLayout extends Component {

    render() {
        return (
            <div className={classes.mainLayout}>
                <TopMenu />
                <main>
                    { this.props.children }
                </main>

            </div>
        )
    }
}