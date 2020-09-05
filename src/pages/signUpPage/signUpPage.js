import React, { useState } from "react"
import Avatar from "@material-ui/core/Avatar"
import Button from "@material-ui/core/Button"
import CssBaseline from "@material-ui/core/CssBaseline"
import TextField from "@material-ui/core/TextField"
import FormControlLabel from "@material-ui/core/FormControlLabel"
import Checkbox from "@material-ui/core/Checkbox"
import Link from "@material-ui/core/Link"
import Grid from "@material-ui/core/Grid"
import Box from "@material-ui/core/Box"
import LockOutlinedIcon from "@material-ui/icons/LockOutlined"
import Typography from "@material-ui/core/Typography"
import { makeStyles } from "@material-ui/core/styles"
import Container from "@material-ui/core/Container"
import Copyright from "../../components/copyright"
import { Link as RouterLink } from "react-router-dom"
import { isFormValidCheck, makeNewControl } from "../../form/formFrameWork"
import { connect } from "react-redux"
import { auth } from "../../store/actions/auth"
import { Redirect } from "react-router"
import Snack from "../../components/snackBar"

const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main
    },
    form: {
        width: "100%", // Fix IE 11 issue.
        marginTop: theme.spacing(3)
    },
    submit: {
        margin: theme.spacing(3, 0, 2)
    }
}))

const initialState = {
    isFormValid: false,
    showPassword: false,
    authSuccess: false,
    snack: false,
    formControls: {
        firstName: {
            value: "",
            type: "text",
            label: "First Name",
            valid: false,
            touched: false,
            validation: {
                required: true
            }
        },
        lastName: {
            value: "",
            type: "text",
            label: "Last Name",
            valid: false,
            touched: false,
            validation: {
                required: true
            }
        },
        mail: {
            value: "",
            type: "email",
            label: "Email Address",
            errorMessage: "Enter correct Email",
            valid: false,
            touched: false,
            validation: {
                required: true,
                email: true
            }
        },
        password: {
            value: "",
            type: "password",
            label: "Password",
            errorMessage: "Min length 6 symbols",
            valid: false,
            touched: false,
            validation: {
                required: true,
                minLength: 6
            }
        }
    }
}

const SignUp = (props) => {
    const classes = useStyles()
    const [state, setState] = useState(initialState)

    const handleInputChange = (controlName) => (e) => {
        const formControls = makeNewControl(state, controlName, e)
        const isFormValid = isFormValidCheck(formControls)
        setState({ ...state, formControls, isFormValid })
    }

    const registerHandler = async () => {
        await props.auth(
            state.formControls.mail.value,
            state.formControls.password.value,
            state.formControls.firstName.value,
            state.formControls.lastName.value
        ).then(() => {
            setState({
                ...initialState,

                snack: true
            })
            setTimeout(() => {
                setState({
                    ...initialState,
                    authSuccess: true
                })
            }, 3000)
        })

    }

    const onSubmitHandler = (e) => {
        e.preventDefault()
    }

    const { firstName, lastName, mail, password } = state.formControls

    if (state.authSuccess) {
        return (
            <Redirect to="/"/>
        )
    } else if (state.snack) {
        return (
            <Snack message="Registration is success"/>
        )
    } else {
        return (
            <Container component="main" maxWidth="xs">
                <CssBaseline/>
                <div className={ classes.paper }>
                    <Avatar className={ classes.avatar }>
                        <LockOutlinedIcon/>
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Sign up
                    </Typography>
                    <form className={ classes.form } noValidate onSubmit={ onSubmitHandler }>
                        <Grid container spacing={ 2 }>
                            <Grid item xs={ 12 } sm={ 6 }>
                                <TextField
                                    autoComplete="fname"
                                    name="firstName"
                                    variant="outlined"
                                    required
                                    fullWidth
                                    id="firstName"
                                    label={ state.formControls.firstName.label }
                                    autoFocus
                                    value={ firstName.value }
                                    onChange={ handleInputChange("firstName") }
                                />
                            </Grid>
                            <Grid item xs={ 12 } sm={ 6 }>
                                <TextField
                                    variant="outlined"
                                    required
                                    fullWidth
                                    id="lastName"
                                    label={ lastName.label }
                                    name="lastName"
                                    autoComplete="lname"
                                    value={ lastName.value }
                                    onChange={ handleInputChange("lastName") }
                                />
                            </Grid>
                            <Grid item xs={ 12 }>
                                <TextField
                                    variant="outlined"
                                    required
                                    fullWidth
                                    id="email"
                                    label={ mail.label }
                                    name="email"
                                    autoComplete="email"
                                    error={ !mail.valid && mail.touched }
                                    value={ mail.value }
                                    helperText={
                                        (!mail.valid && mail.touched)
                                            ? mail.errorMessage
                                            : "" }
                                    onChange={ handleInputChange("mail") }
                                />
                            </Grid>
                            <Grid item xs={ 12 }>
                                <TextField
                                    variant="outlined"
                                    required
                                    fullWidth
                                    name="password"
                                    label={ password.label }
                                    type="password"
                                    id="password"
                                    autoComplete="current-password"
                                    onChange={ handleInputChange("password") }
                                    error={ !password.valid && password.touched }
                                    helperText={
                                        (!password.valid && password.touched)
                                            ? password.errorMessage
                                            : "" }
                                />
                            </Grid>
                            <Grid item xs={ 12 }>
                                <FormControlLabel
                                    control={ <Checkbox value="allowExtraEmails" color="primary"/> }
                                    label="I want to receive inspiration, marketing promotions and updates via email."
                                />
                            </Grid>
                        </Grid>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            className={ classes.submit }
                            disabled={ !state.isFormValid }
                            onClick={ registerHandler }
                        >
                            Sign Up
                        </Button>
                        <Grid container justify="flex-end">

                            <Grid item>
                                <Link
                                    component={ RouterLink }
                                    variant="body2"
                                    to="/login"
                                >
                                    Already have an account? Sign in
                                </Link>
                            </Grid>
                        </Grid>
                    </form>
                </div>
                <Box mt={ 5 }>
                    <Copyright/>
                </Box>
            </Container>
        )
    }
}

function mapDispatchToProps(dispatch) {
    return {
        auth: (email, password, fName, lName) => dispatch(auth(email, password, fName, lName))

    }
}

export default connect(null, mapDispatchToProps)(SignUp)