import React, { Component } from "react"
import classes from "./mainLayout.module.css"

export default class MainLayout extends Component {

    render() {
        return (
            <div className={classes.mainLayout}>

                <main>
                    { this.props.children }
                </main>

            </div>
        )
    }
}