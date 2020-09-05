import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { Card, CardContent, CardMedia,
    Typography, ButtonGroup, Button } from '@material-ui/core';
import Icon from "@material-ui/core/Icon";
// import { AddCircleIcon, RemoveCircleIcon } from '@material-ui/icons';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import RemoveCircleIcon from '@material-ui/icons/RemoveCircle';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        maxWidth: 600
    },
    productData: {
        display: 'flex',
        justifyContent: 'space-between',
        width: '100%'
    },
    image: {
        minWidth: 100,
        minHeight: 100,
    },
    count: {
        display: 'flex',
        alignItems: 'center'
    },
    countButtonsBox: {
        marginLeft: 10
    },
    button: {
        padding: 0
    },
    icons: {
        fontSize: 15
    }
}));

export default function MediaControlCard(props) {
    const classes = useStyles();
    const { name, imageSrc, cost, category } = props.product || {}

    const [count, setCount] = React.useState(props.count || 1)

    return (
        <Card className={[props.className, classes.root].join(' ')}>
            <CardMedia
                className={ classes.image }
                image={ imageSrc }
                title="Live from space album cover"
            />
            <CardContent className={classes.productData}>
                <div style={{ 'textAlign': 'start'}}>
                    <Typography variant="button">{ name }</Typography>
                    <Typography className={ classes.date } variant="overline" display="block">
                        { category }
                    </Typography>
                </div>
                <div style={{ 'textAlign': 'end'}}>
                    <Typography className={classes.count} variant="button">
                        Count: { count }
                        <ButtonGroup
                            size="small"
                            orientation="vertical"
                            color="primary"
                            aria-label="vertical contained primary button group"
                            variant="text"
                            className={classes.countButtonsBox}>
                            <Button onClick={()  => (count - 1) && setCount(count - 1)}>
                                <RemoveCircleIcon className={classes.icons} color="primary"/>
                            </Button>
                            <Button onClick={()  => setCount(count + 1)}>
                                <AddCircleIcon className={classes.icons} color="primary"/>
                            </Button>
                        </ButtonGroup>
                    </Typography>
                    <Typography className={ classes.date } variant="overline" display="block">
                        Cost: { cost } $
                    </Typography>
                </div>
            </CardContent>
        </Card>
    );
}
