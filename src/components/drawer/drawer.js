import React, { useEffect } from "react"
import { makeStyles } from "@material-ui/core/styles"
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer"
import List from "@material-ui/core/List"
import Divider from "@material-ui/core/Divider"
import ListItem from "@material-ui/core/ListItem"
import ListItemIcon from "@material-ui/core/ListItemIcon"
import ListItemText from "@material-ui/core/ListItemText"
import InboxIcon from "@material-ui/icons/MoveToInbox"
import MailIcon from "@material-ui/icons/Mail"

const useStyles = makeStyles({
    list: {
        width: 250
    },
    fullList: {
        width: "auto"
    }
})

const SwipeableTemporaryDrawer = (props) => {
    const classes = useStyles()
    const [state, setState] = React.useState(false)

    const toggleDrawer = (st) => (event) => {
        if (event && event.type === "keydown" && (event.key === "Tab" || event.key === "Shift")) {
            return
        }

        setState(st)
    }

    const list = () => (
        <div
            className={ classes.list }
            role="presentation"
            onClick={ toggleDrawer(false) }
            onKeyDown={ toggleDrawer(false) }
        >
            <List>
                { ["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
                    <ListItem button key={ text }>
                        <ListItemIcon>{ index % 2 === 0 ? <InboxIcon/> : <MailIcon/> }</ListItemIcon>
                        <ListItemText primary={ text }/>
                    </ListItem>
                )) }
            </List>
            <Divider/>
            <List>
                { ["All mail", "Trash", "Spam"].map((text, index) => (
                    <ListItem button key={ text }>
                        <ListItemIcon>{ index % 2 === 0 ? <InboxIcon/> : <MailIcon/> }</ListItemIcon>
                        <ListItemText primary={ text }/>
                    </ListItem>
                )) }
            </List>
        </div>
    )
    const closeHandler = () => {
        toggleDrawer(false)
        props.isClose()
    }

    useEffect(() => setState(props.isOpen), [props.isOpen])
    return (
        <React.Fragment>

            <SwipeableDrawer
                anchor={ "left" }
                open={ state }
                onClose={ closeHandler }
                onOpen={ toggleDrawer(true) }
                disableBackdropTransition
            >
                { list() }
            </SwipeableDrawer>

        </React.Fragment>
    )
}

export default SwipeableTemporaryDrawer