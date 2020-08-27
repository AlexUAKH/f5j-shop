import React, { Component } from "react"
import { connect } from "react-redux"

import { Redirect, Route, Switch } from "react-router-dom"
import MainLayout from "./containers/layout/mainLayout"
import AppMenuBar from "./components/appBar"
import HomePage from "./pages/homePage/homePage"
import LoginPage from "./pages/loginPage"
import SignUpPage from "./pages/signUpPage"

import "./App.css"
import AdminPage from "./pages/adminPage"

class App extends Component {
    render() {
        let routs = (
            <Switch>
                <Route path='/login' component={ LoginPage }/>
                <Route path='/sign_up' component={ SignUpPage }/>
                <Route path='/admin' component={ AdminPage }/>
                <Route path='/' component={ HomePage }/>
                <Redirect to={ "/" }/>
            </Switch>
        )

        return (
            <React.Fragment>
                <MainLayout>
                    <AppMenuBar/>
                    { routs }
                </MainLayout>
            </React.Fragment>
        )
    }

}

function mapStateToProps(state) {
    return {
        role: state.auth.role //'admin'//
    }
}

export default connect(mapStateToProps)(App)
