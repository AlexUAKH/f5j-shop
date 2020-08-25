import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"
import IconButton from "@material-ui/core/IconButton"
import Typography from "@material-ui/core/Typography"
import Badge from "@material-ui/core/Badge"
import MenuItem from "@material-ui/core/MenuItem"
import Menu from "@material-ui/core/Menu"
import MenuIcon from "@material-ui/icons/Menu"
import AccountCircle from "@material-ui/icons/AccountCircle"
import MailIcon from "@material-ui/icons/Mail"
import NotificationsIcon from "@material-ui/icons/Notifications"
import MoreIcon from "@material-ui/icons/MoreVert"
import SwipeableTemporaryDrawer from "../drawer/drawer"
import { withStyles } from "@material-ui/styles"
import CssBaseline from "@material-ui/core/CssBaseline"

const useStyles = makeStyles((theme) => ({
    grow: {
        flexGrow: 1
    },
    menuButton: {
        marginRight: theme.spacing(2)
    },
    title: {
        display: "block"
        /*display: "none",
        [theme.breakpoints.up("sm")]: {
            display: "block"
        }*/
    },
    inputRoot: {
        color: "inherit"
    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${ theme.spacing(4) }px)`,
        transition: theme.transitions.create("width"),
        width: "100%",
        [theme.breakpoints.up("md")]: {
            width: "20ch"
        }
    },
    sectionDesktop: {
        display: "none",
        [theme.breakpoints.up("sm")]: {
            display: "flex"
        }
    },
    sectionMobile: {
        display: "flex",
        [theme.breakpoints.up("sm")]: {
            display: "none"
        }
    }
}))

const StyledMenu = withStyles({
    paper: {
        border: "1px solid #d3d4d5"
    }
})((props) => (
    <Menu
        elevation={ 0 }
        getContentAnchorEl={ null }
        anchorOrigin={ {
            vertical: "bottom",
            horizontal: "right"
        } }
        transformOrigin={ {
            vertical: "top",
            horizontal: "right"
        } }
        { ...props }
    />
))
const StyledMenuItem = withStyles((theme) => ({

}))(MenuItem)

export default function AppMenuBar() {
    const classes = useStyles()
    const [anchorEl, setAnchorEl] = React.useState(null)
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null)
    const [openDrawer, setDrawer] = React.useState(false)

    const isMenuOpen = Boolean(anchorEl)
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl)

    const handleProfileMenuOpen = (event) => {
        setAnchorEl(event.currentTarget)
    }

    const handleMobileMenuClose = () => {
        setMobileMoreAnchorEl(null)
    }

    const handleMenuClose = () => {
        setAnchorEl(null)
        handleMobileMenuClose()
    }

    const handleMobileMenuOpen = (event) => {
        setMobileMoreAnchorEl(event.currentTarget)
    }

    const menuId = "primary-search-account-menu"
    const renderMenu = (
        <StyledMenu
            anchorEl={ anchorEl }
            anchorOrigin={ { vertical: "bottom", horizontal: "right" } }
            id={ menuId }
            keepMounted
            transformOrigin={ { vertical: "top", horizontal: "right" } }
            open={ isMenuOpen }
            onClose={ handleMenuClose }
        >
            <StyledMenuItem onClick={ handleMenuClose }>Profile</StyledMenuItem>
            <StyledMenuItem onClick={ handleMenuClose }>My account</StyledMenuItem>
        </StyledMenu>
    )

    const mobileMenuId = "primary-search-account-menu-mobile"
    const renderMobileMenu = (
        <Menu
            anchorEl={ mobileMoreAnchorEl }
            anchorOrigin={ { vertical: "top", horizontal: "right" } }
            id={ mobileMenuId }
            keepMounted
            transformOrigin={ { vertical: "top", horizontal: "right" } }
            open={ isMobileMenuOpen }
            onClose={ handleMobileMenuClose }
        >
            <MenuItem>
                <IconButton aria-label="show 4 new mails" color="inherit">
                    <Badge badgeContent={ 4 } color="secondary">
                        <MailIcon/>
                    </Badge>
                </IconButton>
                <p>Messages</p>
            </MenuItem>
            <MenuItem>
                <IconButton aria-label="show 11 new notifications" color="inherit">
                    <Badge badgeContent={ 11 } color="secondary">
                        <NotificationsIcon/>
                    </Badge>
                </IconButton>
                <p>Notifications</p>
            </MenuItem>
            <MenuItem onClick={ handleProfileMenuOpen }>
                <IconButton
                    aria-label="account of current user"
                    aria-controls="primary-search-account-menu"
                    aria-haspopup="true"
                    color="inherit"
                >
                    <AccountCircle/>
                </IconButton>
                <p>Profile</p>
            </MenuItem>
        </Menu>
    )
    const drawerToggle = () => {
        setDrawer(!openDrawer)
    }

    return (
        <div className={ classes.grow }>
            <CssBaseline />
            <AppBar position="static">
                <Toolbar>
                    <IconButton
                        edge="start"
                        className={ classes.menuButton }
                        color="inherit"
                        aria-label="open drawer"
                        onClick={ drawerToggle }
                    >
                        <MenuIcon/>
                    </IconButton>
                    <Typography className={ classes.title } variant="h6" noWrap>
                        Material-UI
                    </Typography>
                    <div className={ classes.grow }/>
                    <div className={ classes.sectionDesktop }>
                        <IconButton aria-label="show 4 new mails" color="inherit">
                            <Badge badgeContent={ 4 } color="secondary">
                                <MailIcon/>
                            </Badge>
                        </IconButton>
                        <IconButton aria-label="show 17 new notifications" color="inherit">
                            <Badge badgeContent={ 17 } color="secondary">
                                <NotificationsIcon/>
                            </Badge>
                        </IconButton>
                        <IconButton
                            edge="end"
                            aria-label="account of current user"
                            aria-controls={ menuId }
                            aria-haspopup="true"
                            onClick={ handleProfileMenuOpen }
                            color="inherit"
                        >
                            <AccountCircle/>
                        </IconButton>
                    </div>
                    <div className={ classes.sectionMobile }>
                        <IconButton
                            aria-label="show more"
                            aria-controls={ mobileMenuId }
                            aria-haspopup="true"
                            onClick={ handleMobileMenuOpen }
                            color="inherit"
                        >
                            <MoreIcon/>
                        </IconButton>
                    </div>
                </Toolbar>
            </AppBar>
            { renderMobileMenu }
            { renderMenu }
            <SwipeableTemporaryDrawer
                isOpen={ openDrawer }
                isClose={ drawerToggle }
            />
        </div>
    )
}
