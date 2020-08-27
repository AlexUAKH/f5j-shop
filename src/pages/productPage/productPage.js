import React from "react";
import TheCarousel from "../../components/carousel";
import ButtonsRow from "../../containers/helpers/buttons-row";
import TheTabs from "../../components/the-tabs";
import { Typography, Button } from "@material-ui/core";
import {makeStyles, useTheme} from "@material-ui/core/styles";
// TODO:MOCK DATA
const mockTabsProps = {
    description: <p>kldfmklsdgklmksdmsfmlgmlksdgkmklsdfmdsg</p>,
    characteristics: <ul>
                        <li>speed: 50 km/h</li>
                        <li>weight: 300 g</li>
                        <li>price: 400 $</li>
                    </ul>,
    reviews: <p>slldkfgfkdls; fdjksd fgkldfg sdfg  kfdg kdfg</p>,
    colors: <div>
                <span>hdfgjd</span><span>kdjffnfkds</span><span>jdkfgn</span><span>jdskdnfgk</span>
            </div>,
    ratingValue: 4.5
}


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        position: 'relative',
        backgroundColor: 'white',   // TODO: temporary
    },
    carousel: {
        margin: 'auto'
    },
    btnRow: {
        maxWidth: 400,
        margin: '20px auto'
    },
    title: {
        textAlign: 'center'
    }
}));

const ProductPage = (props) => {
    const classes = useStyles();
    const theme = useTheme();
    return(
        <React.Fragment>
            <div className={classes.root}>
                <Typography variant="h4" component="h1" gutterBottom className={classes.title}>Title product</Typography>
                <TheCarousel className={classes.carousel}/>
                <ButtonsRow
                    className={classes.btnRow}
                    left={<Button variant="contained" color="primary" onClick={() => console.log('Buy now')}>Buy now</Button>}
                    right={<Button variant="contained"  onClick={() => console.log('Add to cart')}>Add to cart</Button>}
                />
                <TheTabs {...mockTabsProps}/>
            </div>
        </React.Fragment>
    )
}

export default ProductPage