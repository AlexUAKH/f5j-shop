import React, { Component } from "react"
import "./App.css"
import { Redirect, Route, Switch } from "react-router-dom"
import MainLayout from "./hoc/layout/mainLayout"
import HomePage from "./pages/homePage/homePage"
import LoginPage from './pages/loginPage'
import SignUpPage from './pages/signUpPage'
import { connect } from "react-redux"
import AdminLayout from "./hoc/layout/adminLayout"

class App extends Component {
    render() {
        let routs = (
            <Switch>
                <Route path='/login' component={ LoginPage } />
                <Route path='/sign_up' component={ SignUpPage } />
                <Route path='/' component={ HomePage } />
                <Redirect to={ "/" }/>
            </Switch>
        )
        let output
        if (this.props.role === 'admin') {
            output = (
                <AdminLayout>
                    { routs }
                </AdminLayout>
            )
        }else{
            output = (
                <MainLayout>
                    { routs }
                </MainLayout>
            )
        }
        return (
            <React.Fragment>
                { output }
            </React.Fragment>
        )
    }

}

function mapStateToProps(state) {
    return {
        role: state.auth.role
    }
}

export default connect(mapStateToProps)(App)
