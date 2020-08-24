import React, { Component } from "react"
import "./App.css"
import { Redirect, Route, Switch } from "react-router-dom"
import MainLayout from "./containers/layout/mainLayout"
import homePage from "./pages/homePage/homePage"
import { connect } from "react-redux"
import AdminLayout from "./containers/layout/adminLayout"

class App extends Component {
    render() {
        let routs = (
            <Switch>
                {/* <Route path='/auth' component={ Auth } />
                <Route path='/quiz/:id' component={ Quiz } />*/ }
                <Route path='/' component={ homePage } />
                <Redirect to={ "/" }/>
            </Switch>
        )
        let output = (
            <MainLayout>
                { routs }
            </MainLayout>
        )
        if (this.props.role === 'admin') {
            output = (
                <AdminLayout>
                    { routs }
                </AdminLayout>
            )
        }
        return (
            <React.Fragment>
                { output }
                <span onClick={()=>console.log("dweeew")}>dcsvsfvsffvs</span>
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
