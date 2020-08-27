export function createControl(config, validation) {
    return {
        ...config,
        validation,
        valid: !validation,
        touched: false,
        value: ''
    }
}

export function validate(value, validation = null) {
    if (!validation) {
        return true
    }
    let isValid = true
    if (validation.required) {
        isValid = value.trim() !== '' && isValid
    }

    return isValid
}

function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    return re.test(String(email).toLowerCase())
}

export function validateControl(value, validation) {

    if (!validation) {
        return true
    }
    let isValid = true
    if (validation.required) {
        isValid = value.trim() !== "" && isValid
    }
    if (validation.minLength) {
        isValid = value.length >= validation.minLength && isValid
    }
    if (validation.email) {
        isValid = validateEmail(value) && isValid
    }
    return isValid
}

export function makeNewControl(state, controlName, e) {
    const formControls = { ...state.formControls }
    const control = { ...formControls[controlName] }

    control.value = e.target.value
    control.touched = true
    control.valid = validateControl(control.value, control.validation)
    formControls[controlName] = control
    return formControls
}

export function isFormValidCheck(formControls) {
    let isFormValid = true
    Object.keys(formControls).forEach((controlName) => {
        isFormValid = formControls[controlName].valid && isFormValid
    })
    return isFormValid
}

export function validateForm(formControls) {
    let isFormValid = true

    for (let control in formControls) {
        if (formControls.hasOwnProperty(control)) {
            isFormValid = formControls[control].value && isFormValid
        }
    }

    return isFormValid
}