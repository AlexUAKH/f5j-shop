import React, { Component } from "react"
import classes from "./topMenu.module.css"
import MenuToggle from "../../components/navigation/menuToggle"
import Drawer from "../../components/navigation/drawer"

export default class TopMenu extends Component {
    state = {
        menu: false
    }

    toggleMenuHandler = () => {
        this.setState({
            menu: !this.state.menu
        })
    }

    menuCloseHandler = () => {
        this.setState({
            menu: false
        })
    }
    render() {
        return (
            <div className={classes.topMenu}>
                <Drawer
                    onClose={this.menuCloseHandler}
                    isOpen={this.state.menu}
                />
                <MenuToggle
                    onToggle={this.toggleMenuHandler}
                    isOpen={this.state.menu}
                />
                <div style={{width: '90px'}}> </div>
                <div>LOGO</div>
                <div className={classes.icons}>
                    <span><i className="fa fa-shopping-cart" /></span>
                    <span><i className="fa fa-user-circle" /></span>
                </div>
            </div>
        )
    }
}