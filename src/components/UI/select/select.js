import React from "react"
import classes from "./select.css"

const Select = (props) => {
    const htmlFor = `${props.label}-${Math.random()}`
    return (
        <div className={ classes.select }>
            <label htmlFor={htmlFor}>{props.label}</label>
            <select
                id={htmlFor}
                value={props.value}
                onChange={props.onChange}
            >
                { props.options.map((opt, ind) => {
                    return (
                        <option
                            value={opt.value}
                            key={opt.value+ind}
                        >
                            {opt.text}
                        </option>
                        )
                })
                }
            </select>
        </div>
    )
}

export default Select