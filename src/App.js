import React, { Component } from "react"
import { connect, Provider } from "react-redux"

import { Redirect, Route, Switch } from "react-router-dom"
import MainLayout from "./containers/layout/mainLayout"
import AppMenuBar from "./components/appBar"
import HomePage from "./pages/homePage/homePage"
import LoginPage from "./pages/loginPage"
import SignUpPage from "./pages/signUpPage"
import ProductPage from "./pages/productPage"
import AdminPage from "./pages/adminPage"
import CartPage from "./pages/cartPage";
import { createMuiTheme, ThemeProvider as MuiThemeProvider } from "@material-ui/core"

import "./App.css"

class App extends Component {
    render() {
        let routs = (
            <Switch>
                <Route path='/login' component={ LoginPage }/>
                <Route path='/sign_up' component={ SignUpPage }/>
                <Route path='/admin' component={ AdminPage }/>
                <Route path='/cart' component={ CartPage }/>
                <Route path='/products/:id' component={ ProductPage }/>
                <Route path='/' component={ HomePage }/>
                <Redirect to={ "/" }/>
            </Switch>
        )

        const theme = createMuiTheme({
            palette: {
                type: this.props.theme//"light""dark"
            }
        })

        return (
            <React.Fragment>
                <MuiThemeProvider theme={ theme }>
                    <MainLayout>
                        <AppMenuBar/>
                        { routs }
                    </MainLayout>
                </MuiThemeProvider>
            </React.Fragment>
        )
    }

}

function mapStateToProps(state) {
    return {
        role: state.auth.role, //'admin'//
        theme: state.theme.type
    }
}

export default connect(mapStateToProps)(App)
