import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { Typography, Button } from '@material-ui/core';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    background: 'lightpink'
  },
  heroSection: {
      display:'flex',
      flexDirection: 'column',
      minHeight: '100vh',
      background: 'url(https://res.cloudinary.com/cook-becker/image/fetch/q_auto:best,f_auto,w_1920,e_sharpen/https://candb.com/site/candb/images/artwork/Shotos-Streetfighter3rdStrike-Capcom.jpg)',
      backgroundAttachment: 'fixed',
      backgroundSize: 'cover',
      backgroundPosition: 'down center',
      justifyContent: 'center',
      alignItems: 'flex-end',
      color: '#0c0c0c',
      paddingRight: '4%'
  },
  heroButton: {
      height: '60px',
      width: '180px',
      backgroundColor: '#0c0c0c',
      color: 'white',
      "&:hover": {
        backgroundColor: '#F26444',
        color:'white'
      }
  },
  heroTitle: {
      fontSize: '7.2vw',
      lineHeight: '1',
      fontWeight: '700',
      marginBottom: '4%',
      width: '80%',
      textAlign: 'right',
      [theme.breakpoints.down('sm')]: {
        fontSize: '8vw',
        width: '90%'
      },
  },
  heroSub: {
      fontSize: '1.5vw',
      marginBottom: '4%',
      paddingLef: '4%',
      textAlign:'right',
      width: '80%',
      fontWeight: '500',
      [theme.breakpoints.down('sm')]: {
        fontSize: '4.5vw',
        width: '90%'
      },
  },
  highText: {
    display: 'inline-block',
    lineHeight: '0.1rem',
    paddingBottom: '0.5em',
    backgroundColor: '#F26444',
    color: '#0c0c0c'
  }
}));

export default function Historia() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={12}>
          <Grid xs={12}> 
          <div className={classes.heroSection}>
            <Typography className={classes.heroTitle}>mi eget mauris <mark className={classes.highText}>pharetra</mark></Typography>
            <Typography className={classes.heroSub} variant='body1'>
            eu non diam phasellus vestibulum lorem sed risus ultricies tristique nulla aliquet enim tortor at auctor urna nunc id cursus metus aliquam eleifend mi in nulla posuere sollicitudin aliquam ultrices sagittis orci a scelerisque purus semper eget duis at tellus at urna
            </Typography>
            <Router>
            <Button variant='outlined' className={classes.heroButton} >Leer Más</Button>
            </Router>
          </div>
          </Grid>
      </Grid>
    </div>
  );
}
