import React, { Component } from "react"
import { connect } from "react-redux"

import { Redirect, Route, Switch } from "react-router-dom"
import MainLayout from "./containers/layout/mainLayout"
import AdminLayout from "./containers/layout/adminLayout"
import AppMenuBar from "./components/appBar"
import HomePage from "./pages/homePage/homePage"
import LoginPage from './pages/loginPage'
import SignUpPage from './pages/signUpPage'
import ProductPage from "./pages/productPage";
import "./App.css"

class App extends Component {
    render() {
        let routs = (
            <Switch>
                <Route path='/login' component={ LoginPage } />
                <Route path='/products/:id' component={ ProductPage } />
                <Route path='/sign-up' component={ SignUpPage } />
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
                <AppMenuBar />
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
