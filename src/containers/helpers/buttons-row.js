import React from 'react'
import './buttons-row.scss'

const ButtonsRow = (props) => {
    return (
        <div className={[props.className, "buttons-row"].join(' ')}>
            <div className="left">
                {props.left}
            </div>
            <div className="right">
                {props.right}
            </div>
        </div>
    )
}

export default ButtonsRow