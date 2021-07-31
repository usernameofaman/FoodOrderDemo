import React from 'react'
import '../App.css'
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import RestaurantOutlinedIcon from '@material-ui/icons/RestaurantOutlined';

import '@fontsource/roboto';
const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
    cart: {
        justifyContent: 'center',
    },

}));

export default function Navbar() {
    const classes = useStyles();

    return (
        <>
            <div className={classes.root}>
                <AppBar position="static">
                    <Toolbar>
                        <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">

                        </IconButton>
                        <RestaurantOutlinedIcon />

                        <Typography variant="h6" className={classes.title}>
                            Food's Restaurant
                        </Typography>
                        

                    </Toolbar>
                </AppBar>
            </div>
        </>
    )
}