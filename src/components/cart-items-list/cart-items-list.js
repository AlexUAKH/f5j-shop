import React from 'react'
import {makeStyles} from "@material-ui/core/styles";

import CartItem from "../cart-item/CartItem";


const useStyles = makeStyles((theme) => ({
    root: {
        listStyle: "none",
        padding: 0,
        margin: 0
    },
    listItem: {
        marginBottom: 10
    }
}));

const CartItemsList = (props) => {
    const classes = useStyles();
    const { list = [] } = props

    return (
        <ul className={[props.className, classes.root].join(' ')}>
            {
                list.map((item) => {
                    return (
                        <li className={classes.listItem} key={item.id}>
                            <CartItem product={ item }/>
                        </li>
                    )
                })
            }
        </ul>
    )
}

export default CartItemsList