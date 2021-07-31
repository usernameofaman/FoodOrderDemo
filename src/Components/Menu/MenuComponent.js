import React from 'react';
// import '../..Components';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import IconButton from '@material-ui/core/IconButton';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import { NavLink } from 'react-router-dom';

import "../../App.css"


const useStyles = makeStyles((theme) => ({
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    paper: {
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
        width: '600px',
    },
    orders: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',

    },
    btn: {
        display: 'flex',
        justifyContent: 'flex-end',

    },
    cardContainer: {
        display: 'flex',
        width: '100%',
        flexWrap: 'wrap',
        padding: '50px 0px 10px 0px',

        // flexDirection: '',
        // alignItems: 'center',
    },
    cards: {
        // display: 'flex',
        width: '200px',
        height: '325px',
        margin: '10px 30px 10px 30px',
        // flexDirection: 'flex',
        // alignItems: 'center',
        minWidth: 275,

    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
}));

export default function Menu(props) {
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    
    const classes = useStyles();
    
    // let Price=10;
    // console.log(fries)

    return (
        <>
        <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                className={classes.modal}
                open={open}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
                {...props}
            >
                <Fade in={open}>
                    <div className={classes.paper}>
                        <h3>Order Summary</h3>
                        <div className={classes.orders}>
                            <h4>Hamburger:</h4>
                            <div>
                                {props.state.Hamburger}
                            </div>

                            <div style={{ display: 'flex', height: '30px' }}>
                                <Button onClick={() => props.Priceplus("Hamburger")} size="small" color="primary" variant="contained">
                                    +
                                </Button>
                                <Button onClick={() => props.Priceminus("Hamburger")} size="small" color="secondary" variant="contained">
                                    -
                                </Button>
                            </div>
                        </div>
                        <div className={classes.orders}>
                            <h4>Pepsi:</h4>
                            <div>
                                {props.state.Pepsi}
                            </div>

                            <div style={{ display: 'flex', height: '30px' }}>
                                <Button onClick={() => props.Priceplus("Pepsi")} size="small" color="primary" variant="contained">
                                    +
                                </Button>
                                <Button onClick={() => props.Priceminus("Pepsi")} size="small" color="secondary" variant="contained">
                                    -
                                </Button>
                            </div>
                        </div>
                        <div className={classes.orders}>
                            <h4>Coke:</h4>
                            <div>
                                {props.state.Coke}
                            </div>

                            <div style={{ display: 'flex', height: '30px' }}>
                                <Button onClick={() => props.Priceplus("Coke")} size="small" color="primary" variant="contained">
                                    +
                                </Button>
                                <Button onClick={() => props.Priceminus("Coke")} size="small" color="secondary" variant="contained">
                                    -
                                </Button>
                            </div>
                        </div>
                        <div className={classes.orders}>
                            <h4>fries:</h4>
                            <div>
                                {props.state.fries}
                            </div>

                            <div style={{ display: 'flex', height: '30px' }}>
                                <Button onClick={() => props.Priceplus("Fries")} size="small" color="primary" variant="contained">
                                    +
                                </Button>
                                <Button onClick={() => props.Priceminus("Fries")} size="small" color="secondary" variant="contained">
                                    -
                                </Button>
                            </div>
                        </div>
                        <h4>Total(INR): {props.state.HamburgerPrice+props.state.PepsiPrice+props.state.friesPrice+ props.state.CokePrice}</h4>


                        <div className={classes.btn}>
                            <NavLink exact to="/Checkout">
                                <Button size="small" color="primary" variant="contained">
                                Save and Checkout
                            </Button>
                                </NavLink>
                            <Button onClick={handleClose} size="small" color="primary">
                                Cancel
                            </Button>
                        </div>
                    </div>
                </Fade>
            </Modal>

            <div className={classes.cardContainer}>
                <div className="cart">
                <div className="cartCount">{props.state.cartCount}</div>
                <IconButton  style={{marginRight:"20px"}} edge="start" className={classes.menuButton} color="inherit" aria-label="menu">

                <ShoppingCartIcon onClick={handleOpen}  />
                </IconButton>

                    </div> 

                <Card className={classes.cards}>

                    <CardActionArea>
                        <CardMedia
                            component="img"
                            alt="Contemplative Reptile"
                            height="140"
                            image="/images/burger.jpeg"
                            title="Hamburger"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                Hamburger
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                price:200
                            </Typography>
                            
                            <Typography variant="body2" color="textSecondary" component="p">
                                Total {props.state.Hamburger} 

                            </Typography>
                            
                            <Typography style={{display : props.state.HamburgerPrice ? "block" : "none"}} variant="body2" color="textSecondary" component="p">
                                Cost {props.state.HamburgerPrice}

                            </Typography>

                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Button onClick={() => props.Priceplus("Hamburger")} size="small" color="primary" variant="contained">
                            +
                        </Button>
                        <Button onClick={() => props.Priceminus("Hamburger")} size="small" variant="contained" color={props.state.Hamburger ? "secondary" : "default"}>
                            -
                        </Button>
                    </CardActions>

                </Card>
                <Card className={classes.cards}>

                    <CardActionArea>
                        <CardMedia
                            component="img"
                            alt="Contemplative Reptile"
                            height="140"
                            image="/images/fries.jpeg"
                            title="Contemplative Reptile"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                Fries
                            </Typography>


                            <Typography variant="body2" color="textSecondary" component="p">
                                Price 100
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                Total {props.state.fries}

                            </Typography>
                            <Typography style={{display : props.state.friesPrice ? "block" : "none"}} variant="body2" color="textSecondary" component="p">
                                Cost {props.state.friesPrice}

                            </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Button onClick={() => props.Priceplus("Fries")} size="small" color="primary" variant="contained">
                            +
                        </Button>
                        <Button onClick={() => props.Priceminus("Fries")} size="small" variant="contained" color={props.state.fries ? "secondary" : "default"}>
                            -
                        </Button>
                    </CardActions>

                </Card>
                <Card className={classes.cards}>

                    <CardActionArea>
                        <CardMedia
                            component="img"
                            alt="Contemplative Reptile"
                            height="140"
                            image="/images/coke.jpeg"
                            title="Contemplative Reptile"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                Coke
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                Price:50
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                Total {props.state.Coke}

                            </Typography>
                            <Typography style={{display : props.state.CokePrice ? "block" : "none"}} variant="body2" color="textSecondary" component="p">
                                Cost {props.state.CokePrice}

                            </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Button onClick={() => props.Priceplus("Coke")} size="small" color="primary" variant="contained">
                            +
                        </Button>
                        <Button onClick={() => props.Priceminus("Coke")} size="small" variant="contained" color={props.state.Coke ? "secondary" : "default"}>
                            -
                        </Button>
                    </CardActions>

                </Card>
                <Card className={classes.cards}>

                    <CardActionArea>
                        <CardMedia
                            component="img"
                            alt="Contemplative Reptile"
                            height="140"
                            image="/images/pepsi.jpeg"
                            title="Contemplative Reptile"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                Pepsi
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                Price:50
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                Total {props.state.Pepsi}

                            </Typography>
                            <Typography style={{display : props.state.PepsiPrice ? "block" : "none"}} variant="body2" color="textSecondary" component="p">
                                Cost {props.state.PepsiPrice}

                            </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Button onClick={() => props.Priceplus("Pepsi")} size="small" color="primary" variant="contained">
                            +
                        </Button>
                        <Button onClick={() => props.Priceminus("Pepsi")} size="small" variant="contained" color={props.state.Pepsi ? "secondary" : "default"}>
                            -
                        </Button>
                    </CardActions>

                </Card>


            </div>
        </>
    );

}
