import React from "react"
import classes from './backDrop.module.css'

const BackDrop = (props) => {
    return (
        <div
            className={classes.backDrop}
            onClick={props.onClick}
        />
    )
}

export default BackDrop