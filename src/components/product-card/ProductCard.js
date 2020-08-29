import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
    Card,
    CardActionArea,
    CardActions,
    CardContent,
    CardMedia,
    Button,
    Typography, Box
} from '@material-ui/core';
import {Rating} from "@material-ui/lab";

const useStyles = makeStyles({
    root: {
        maxWidth: 345,
    },
    media: {
        minHeight: 160,
        position: 'relative'
    },
    cardContent:{
        position: 'relative'
    },
    description: {
        textIndent: '1rem',
        textAlign: 'justify',
        overflow: 'hidden',
        wordBreak: 'break-word',
        textOverflow: 'ellipsis',
        display: '-webkit-box',
        '-webkit-line-clamp': 3, /* number of lines to show */
        '-webkit-box-orient': 'vertical'
    },
    stock: {
        position: 'absolute',
        top: 0,
        right: 0,
        margin: 0,
        padding: '0 10px',
        backgroundColor: 'rgba(255,255,255, 0.7)'
    },
    cost: {
        position: 'absolute',
        bottom: 0,
        right: 0,
        margin: 0,
        padding: '0 10px',
        backgroundColor: 'rgba(255,255,255, 0.7)'
    },
    rating: {
        position: 'absolute',
        top: 0,
        right: 0,
        margin: 0,
        padding: '0 10px',
    }
});

export default function ProductCard(props) {
    const classes = useStyles();
    const { name, imageSrc, cost, description, category, stock, rating } = props.product || {}

    return (
        <Card className={[props.className, classes.root].join(' ')}>
            <CardActionArea>
                <CardMedia
                    className={ classes.media }
                    image={ imageSrc }
                    title={ name }
                    children={
                        <React.Fragment>
                            {stock &&
                                <Typography className={classes.stock} gutterBottom variant="h5" component="h5">
                                    STOCK
                                </Typography>
                            }
                            <Typography className={ classes.cost } gutterBottom variant="h5" component="h5">
                                { cost } $
                            </Typography>
                        </React.Fragment>
                    }
                />
                <CardContent className={classes.cardContent}>
                    <Box component="fieldset" mb={3} className={classes.rating}  borderColor="transparent">
                        <Rating  name="disabled" precision={0.5} defaultValue={0} value={rating} size="small" readOnly/>
                    </Box>
                    <Typography gutterBottom variant="h5" component="h2">
                        { name }
                    </Typography>
                    <Typography className={ classes.description } variant="body2" color="textSecondary" component="p">
                        { description }
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button onClick={() => console.log('show more')} size="small" color="primary">
                    More
                </Button>
            </CardActions>
        </Card>
    );
}