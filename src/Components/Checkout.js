import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({ 

    mains: {
        display: 'flex',
        height: '120px',
        widht: '100%',
        justifyContent: 'center',
        textAlign: 'center',
        padding: '100px',
    },
    checkBox: {
        minWidth: 600,
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    pos: {
        marginBottom: 12,
    },
});

export default function Checkout() {
    const classes = useStyles();

    return (
        <div className={classes.mains}>
            <Card className={classes.checkBox}>
                <CardContent>
                    <Typography  variant="h4" component="h2"  gutterBottom>
                        Checkout 
                    </Typography>
                    <div style={{textAlign:'left',fontSize:'20px'}}>
                        Thank You For Your Order
                    </div>

                </CardContent>
            </Card>
        </div>
    );
}
