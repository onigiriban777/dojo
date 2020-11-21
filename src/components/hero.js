import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import HigaLogo from '../img/logowh1.png';
import heroPic from '../img/galeria/karate8.jpg';
import { Typography, Button } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    background: 'dodgerblue', 
  },
  heroSection: {
      display:'flex',
      flexDirection: 'column',
      minHeight: '100vh',
      background: 'url(https://i.pinimg.com/originals/6c/39/19/6c39192b1fd05a75266dd8a13f0c1b12.jpg)',
      backgroundAttachment: 'fixed',
      backgroundPosition: 'down right',
      backgroundSize: 'cover',
      alignItems: 'flex-start',
      justifyContent: 'flex-end',
      paddingLeft:'4%',
      [theme.breakpoints.down('sm')]: {
        paddingLeft:'4%'
      },
  },
  heroButton: {
      height: '60px',
      width: '180px',
      backgroundColor: '#0c0c0c',
      color:'white',
      marginBottom: '4%',
      "&:hover": {
        backgroundColor: '#F26444',
        color:'white'
      }
  },
  heroTitle: {
      textTransform: 'uppercase',
      fontSize: '9vw',
      lineHeight: '1',
      fontWeight: '900',
      marginTop:'8%',
      marginBottom: '2%',
      textAlign: 'left',
      color:'#0c0c0c',
      width: '90%',
      [theme.breakpoints.down('sm')]: {
        fontSize: '12vw',
        width: '80%',
        color: 'white'
      },
  },
  heroSub: {
      fontSize: '1.7vw',
      marginBottom: '3%',
      textAlign: 'left',
      color: 'white',
      width: '55%',
      [theme.breakpoints.down('sm')]: {
        fontSize: '3.2vw',
        paddingLeft:'0',
      },
  },
  highText: {
    display: 'inline-block',
    lineHeight: '0.1rem',
    paddingBottom: '0.5em',
    color: '#0c0c0c',
    backgroundColor: 'white'
  }
}));

export default function Hero() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container>
          <Grid item xs={12}> 
          <div className={classes.heroSection}>
            <Typography className={classes.heroTitle}> <mark className={classes.highText}>Karate</mark>-Do Tradicional <mark className={classes.highText}>Okinawense</mark></Typography>
            <Typography className={classes.heroSub} variant='body1'>faucibus in ornare quam viverra orci sagittis eu volutpat odio facilisis mauris sit amet massa</Typography>
            <Button variant='outlined' className={classes.heroButton} >Más Información</Button>
          </div>
          </Grid>
      </Grid>
    </div>
  );
}
