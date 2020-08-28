import React from "react"
import classes from "./homePage.css"
// import Review from "../../components/review";
import img from './../../illustration-geiranger.jpg'
import CartItem from "../../components/cart-item/CartItem";

const HomePage = (props) => {
    return (
        <div className={ classes.homePage }>
            {/*<h1>HomePage</h1>*/}
            <CartItem
                count={3}
                product={{
                    name: 'Name Product',
                    imageSrc: img,
                    cost: 23,
                    category: 'plane'
                }}
            />
        </div>
    )
}

export default HomePage