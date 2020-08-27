import React, { Component } from "react"
import classes from "./boundary.module.scss"

export default class Boundary extends Component {
    state = {
        error: null
    }
    componentDidCatch(error, errorInfo) {
        this.setState({
            error: error
        })
    }

    render() {
        if (this.state.error) {
            return <h3 className={classes}>{this.state.error}</h3>
        } else
            return this.props.children
    }
}