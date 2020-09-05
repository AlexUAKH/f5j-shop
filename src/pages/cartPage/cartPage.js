import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import CartItemsList from "../../components/cart-items-list";
import img from "../../illustration-geiranger.jpg";
import Typography from "@material-ui/core/Typography";

// TODO:MOCK DATA
const mockTabsProps = {
    list: [
        {
            name: 'Name Product',
            imageSrc: img,
            cost: 23,
            category: 'flkfd',
        },
        {
            name: 'Name Product',
            imageSrc: img,
            cost: 230,
            category: 'plane',
        }
    ]
}


const useStyles = makeStyles((theme) => ({
    root: {

    },
}));

const CartPage = (props) => {
    const classes = useStyles();
    return(
        <div className={classes.root}>
            <Typography variant="h3">Cart Page</Typography>
            <CartItemsList list={mockTabsProps.list}/>
        </div>
    )
}

export default CartPage