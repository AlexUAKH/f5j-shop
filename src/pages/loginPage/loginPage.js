import React, { useEffect, useState } from "react"
import Avatar from "@material-ui/core/Avatar"
import Button from "@material-ui/core/Button"
import CssBaseline from "@material-ui/core/CssBaseline"
import TextField from "@material-ui/core/TextField"
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
import { isFormValidCheck, makeNewControl } from "../../form/formFrameWork"
import Copyright from "../../components/copyright"
import { Link as RouterLink, Redirect } from "react-router-dom"
import { auth } from "../../store/actions/auth"
import { connect } from "react-redux"
import Snack from "../../components/snackBar"
import LinearProgress from "@material-ui/core/LinearProgress"

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
        backgroundColor: theme.palette.success
    }
}))

const initialState = {
    isFormValid: false,
    showPassword: false,
    authSuccess: false,
    snack: false,
    message: null,
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
}

const SignIn = (props) => {
    const classes = useStyles()
    const [state, setState] = useState({
        ...initialState,
        error: props.error
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
    }

    const authHandler = async (isLogin) => {
        await props.auth(
            state.formControls.mail.value,
            state.formControls.password.value,
            isLogin
        )
    }
    useEffect(() => {

        if (props.token) {
            setState({
                ...state,
                snack: true,
                message: "Request is successful"
            })
            setTimeout(() => {
                props.history.push("/")
                // setState({
                //     ...state,
                //     authSuccess: true
            }, 3000)
        }
    }, [props.token])

    const { mail } = state.formControls
    const { password } = state.formControls

    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline/>
            { state.snack
                ? <Snack
                    type
                    message={ state.message }
                />
                : null }
            { props.error !== "" && props.error !== null
                ? <Snack
                    type={ false }
                    message="Login or password is incorrect"
                />
                : null
            }
            <div className={ classes.paper }>
                <Avatar className={ classes.avatar }>
                    <LockOutlinedIcon/>
                </Avatar>
                <Typography component="h1" variant="h5">
                    Sign in
                </Typography>
                <form className={ classes.form }
                      onSubmit={ handleMouseDownPassword } noValidate>
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
                        className={ classes.valid }
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
                    {/*<FormControlLabel*/ }
                    {/*    control={ <Checkbox value="remember" color="primary"/> }*/ }
                    {/*    label="Remember me"*/ }
                    {/*/>*/ }
                    { props.loading
                        ? <LinearProgress/>
                        : <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            className={ classes.submit }
                            disabled={ !state.isFormValid }
                            onClick={ () => authHandler(true) }
                        >
                            Login
                        </Button>
                    }
                    <Typography component="h4" variant="body2" align="center">
                        or
                    </Typography>
                    { props.loading
                        ? <LinearProgress color="secondary"/>
                        : <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="secondary"
                            className={ classes.submit }
                            disabled={ !state.isFormValid }
                            onClick={ () => authHandler(false) }
                        >
                            Register
                        </Button>
                    }
                    <Grid container>
                        <Grid item xs>
                            {/*<Link component={ RouterLink } to="" variant="body2">*/ }
                            {/*    Forgot password?*/ }
                            {/*</Link>*/ }
                        </Grid>
                        <Grid item>
                            {/*<Link component={RouterLink} to="/sign_up" variant="body2">*/ }
                            {/*    { "Don't have an account? Sign Up" }*/ }
                            {/*</Link>*/ }
                            <Link component={ RouterLink } to="/" variant="body2">
                                Forgot password?
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

function mapStateToProps(state) {
    return {
        token: state.auth.token,
        loading: state.auth.loading,
        error: state.auth.error
    }
}

function mapDispatchToProps(dispatch) {
    return {
        auth: (email, password, isLogin) => dispatch(auth(email, password, isLogin))

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignIn)
