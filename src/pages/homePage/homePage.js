import React from "react"
import classes from "./homePage.css"
import ProductCard from "../../components/product-card";
import img from './../../illustration-geiranger.jpg'

const HomePage = (props) => {
    return (
        <div className={ classes.homePage }>
            {/*<h1>HomePage</h1>*/}
            <ProductCard product={{
                name: 'Product name',
                imageSrc: img,
                cost: '23',
                category: 'category',
                stock: true,
                description: ',mfkjsdnkjfg djfsgd fjj odsjf jj go sdfijg dsfgoisdf gdsfiojgoisdjf',
                rating: 4
            }}
            />
        </div>
    )
}

export default HomePage