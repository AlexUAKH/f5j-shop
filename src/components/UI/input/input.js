import React from "react"
import classes from "./input.css"

function isInvalid({valid, touched, shouldValidate}) {
    return !valid && shouldValidate && touched
}

const Input = (props) => {
    const cls = [classes.input]
    const inputType = props.type || 'text'
    const htmlFor = `${inputType}-${Math.random()}`
    console.log(isInvalid(props))
    if (isInvalid(props)) {
        cls.push(classes.invalid)
    }
    return (
        <div className={ cls.join(' ') }>
            <label htmlFor={htmlFor}>{props.label}</label>
            <input
                type={inputType}
                id={htmlFor}
                value={props.value}
                onChange={props.onChange}
            />
            { isInvalid(props)
                ? <span>{props.errorMessage || 'Enter correct value'}</span>
                : null
            }
        </div>
    )
}

export default Input