import React from 'react'
import '../App.css'
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { NavLink } from 'react-router-dom';



import '@fontsource/roboto';


// const classes = useStyles();

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },

}));


export default function Home() {
  const classes = useStyles();

  return (
    <>
      <div className={classes.root}>



        <div className="homeTitle">

          <Typography style={{ textAlign: "center" }} variant="h2" component="h2" gutterBottom>
            Welcome To Food's <br></br> Kitchen
          </Typography>
          <NavLink to="/Menu">
            <Button  variant="contained" color="primary">Go to Menu
            </Button>
          </NavLink>

        </div>

      </div>
    </>
  )
}

