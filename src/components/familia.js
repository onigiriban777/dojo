import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { Typography, Button } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    background: 'dodgerblue',
  },
  Section: {
      display:'flex',
      flexDirection: 'column',
      background: 'url(https://i.pinimg.com/originals/fd/4b/ff/fd4bff2b545829724803874e0adb8439.jpg)',
      backgroundAttachment: 'fixed',
      backgroundSize: 'cover',
      backgroundPosition: 'down center',
      justifyContent: 'center',
      alignItems: 'flex-start',
      minHeight: '100vh',
      [theme.breakpoints.down('sm')]: {
        backgroundPosition: 'center right'
      },
  },
  heroButton: {
      height: '60px',
      width: '180px',
      backgroundColor: '#0c0c0c',
      color: 'white',
      alignSelf: 'flex-start',
      marginLeft: '5%',
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
      textAlign: 'left',
      paddingLeft: '4%',
      [theme.breakpoints.down('sm')]: {
        marginTop: '20%'
      },
  },
  heroSub: {
      fontSize: '1.5vw',
      marginBottom: '4%',
      paddingLeft: '5%',
      textAlign: 'left',
      width: '80%',
      [theme.breakpoints.down('sm')]: {
        fontSize: '4.5vw',
        width: '90%',
        fontWeight: '500'
      },
  },
  highText: {
    display: 'inline-block',
    lineHeight: '0.1rem',
    paddingBottom: '0.5em',
    backgroundColor: '#F26444'
  }
}));

export default function Familia() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container>
          <Grid item xs={12}> 
          <div className={classes.Section}>
            <Typography className={classes.heroTitle}>eget nunc <mark className={classes.highText}>lobortis</mark></Typography>
            <Typography className={classes.heroSub} variant='body1'> 
            
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur              </Typography>
            <Button variant='outlined' className={classes.heroButton} >Leer Más</Button>
          </div>
          </Grid>
      </Grid>
    </div>
  );
}
