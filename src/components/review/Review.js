import React from 'react'
import {Box, Paper, Typography, Avatar} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import {Rating} from "@material-ui/lab";

const useStyles = makeStyles({
    root: {
        maxWidth: 600,  // TODO: temporary
        padding: 15
    },
    reviewHeader: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    userData: {
        display: 'flex',
        flexDirection: 'row'
    },
    avatar: {
        marginRight: 10
    },
    date: {
        lineHeight: 1,
        margin: 0
    },
    text: {
        textIndent: '1rem',
        textAlign: 'justify',
    },
    rating: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        margin: 0,
        padding: 0
    }
})

export default function Review(props) {
    const classes = useStyles();
    const { userName, date, text, rating, userPhoto } = props.review

    return(
        <Paper
            className={[props.className, classes.root].join(' ')}
            elevation={3}
        >
            <Typography className={classes.reviewHeader} gutterBottom>
                <Typography className={ classes.userData }>
                    <Avatar   className={ classes.avatar } alt={ userName } src={ userPhoto } />
                    <div>
                        <Typography variant="button">{ userName }</Typography>
                        <Typography className={ classes.date } variant="overline" display="block">
                            { date }
                        </Typography>
                    </div>
                </Typography>
                <Box component="fieldset" className={classes.rating}  borderColor="transparent">
                    <Rating  name="disabled" precision={0.5} defaultValue={0} value={rating} size="small" readOnly/>
                </Box>
            </Typography>
            <Typography className={ classes.text } variant="body2" gutterBottom>
                { text }
            </Typography>
        </Paper>
    )
}