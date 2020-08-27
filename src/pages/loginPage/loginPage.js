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
import InputAdornment from "@material-ui/core/InputAdornment"
import IconButton from "@material-ui/core/IconButton"
import { Visibility, VisibilityOff } from "@material-ui/icons"
import { isFormValidCheck, makeNewControl, validateControl } from "../../form/formFrameWork"
import Copyright from "../../components/copyright"
import { Link as RouterLink } from "react-router-dom"

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
        marginTop: theme.spacing(1)
    },
    submit: {
        margin: theme.spacing(3, 0, 2)
    },
    valid: {
        color: theme.palette.success
    }
}))

export default function SignIn() {
    const classes = useStyles()
    const [state, setState] = useState({
        isFormValid: false,
        showPassword: false,
        formControls: {
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
    })
    const handleClickShowPassword = () => {
        setState({
            ...state,
            showPassword: !state.showPassword
        })
    }

    const handleMouseDownPassword = (event) => {
        event.preventDefault()
    }

    const handleInputChange = (controlName) => (e) => {
        const formControls = makeNewControl(state, controlName, e)
        const isFormValid = isFormValidCheck(formControls)
        setState({ ...state, formControls, isFormValid })
        console.log("state: ", formControls)
    }

    const { mail } = state.formControls
    const { password } = state.formControls

    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline/>
            <div className={ classes.paper }>
                <Avatar className={ classes.avatar }>
                    <LockOutlinedIcon/>
                </Avatar>
                <Typography component="h1" variant="h5">
                    Sign in
                </Typography>
                <form className={ classes.form } noValidate>
                    <TextField
                        error={ !mail.valid && mail.touched }
                        value={ mail.value }
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label={ mail.label }
                        name="email"
                        autoComplete="email"
                        autoFocus
                        className={ classes.valid }
                        helperText={
                            (!mail.valid && mail.touched)
                                ? mail.errorMessage
                                : "" }
                        onChange={ handleInputChange("mail") }
                    />
                    <TextField
                        variant="outlined"
                        value={ password.value }
                        onChange={ handleInputChange("password") }
                        error={ !password.valid && password.touched }
                        helperText={
                            (!password.valid && password.touched)
                                ? password.errorMessage
                                : "" }
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label={ password.label }
                        type={ state.showPassword ? "text" : "password" }
                        id="password"
                        autoComplete="current-password"
                        InputProps={ {
                            endAdornment:
                                <InputAdornment position="end">
                                    <IconButton
                                        aria-label="toggle password visibility"
                                        onClick={ handleClickShowPassword }
                                        onMouseDown={ handleMouseDownPassword }
                                    >
                                        { state.showPassword ? <Visibility/> : <VisibilityOff/> }
                                    </IconButton>
                                </InputAdornment>
                        } }
                    />
                    <FormControlLabel
                        control={ <Checkbox value="remember" color="primary"/> }
                        label="Remember me"
                    />
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={ classes.submit }
                        disabled={ !state.isFormValid }
                    >
                        Sign In
                    </Button>
                    <Grid container>
                        <Grid item xs >
                            <Link component={RouterLink} to="" variant="body2">
                                Forgot password?
                            </Link>
                        </Grid>
                        <Grid item>
                            <Link component={RouterLink} to="/sign_up" variant="body2">
                                { "Don't have an account? Sign Up" }
                            </Link>
                        </Grid>
                    </Grid>
                </form>
            </div>
            <Box mt={ 8 }>
                <Copyright/>
            </Box>
        </Container>
    )
}
