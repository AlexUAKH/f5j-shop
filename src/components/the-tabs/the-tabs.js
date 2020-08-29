import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import { Tabs, Tab, Typography, Box } from '@material-ui/core';
import { Rating } from '@material-ui/lab';

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`scrollable-auto-tabpanel-${index}`}
            aria-labelledby={`scrollable-auto-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box p={3}>
                    <Typography component="div">{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};

function a11yProps(index) {
    return {
        id: `scrollable-auto-tab-${index}`,
        'aria-controls': `scrollable-auto-tabpanel-${index}`,
    };
}

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.paper,
    },
    rating: {
        margin: 0,
        padding: 5,
        alignSelf: 'center',
        marginLeft: 'auto'
    },


}));

export default function TheTabs(props) {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div className={[props.className, classes.root].join(' ')}>
            <AppBar position="static">
                <Tabs value={value}
                      onChange={handleChange}
                      variant="scrollable"
                      scrollButtons="on"
                      aria-label="scrollable auto tabs example"
                >
                    <Tab label="Description" {...a11yProps(0)} />
                    <Tab label="Characteristics" {...a11yProps(1)} />
                    <Tab label="Reviews" {...a11yProps(2)} />
                    <Tab label="Colors" {...a11yProps(3)} />
                    <Box component="fieldset" mb={3} className={classes.rating}  borderColor="transparent">
                        <Rating  name="disabled" precision={0.5} defaultValue={0} value={props.ratingValue} readOnly/>
                    </Box>
                </Tabs>

            </AppBar>
            <TabPanel component="div" value={value} index={0}>
                {props.description}
            </TabPanel>
            <TabPanel component="div" value={value} index={1}>
                {props.characteristics}
            </TabPanel>
            <TabPanel component="div" value={value} index={2}>
                {props.reviews}
            </TabPanel>
            <TabPanel component="div" value={value} index={3}>
                {props.colors}
            </TabPanel>
        </div>
    );
}

