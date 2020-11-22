import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import {Button, Typography} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    background: 'dodgerblue',
    minHeight: '100vh',
    [theme.breakpoints.down('sm')]: {
      minHeight: '100vh'
    },
  },
  clasesButon: {
      minHeight: '60px',
      width: '160px',
      backgroundColor: '#0c0c0c',
      color: 'white',
      "&:hover": {
        backgroundColor: '#F26444',
        color:'white'
      }
  },
  clases: {

  },
  tradicional: {
      backgroundColor:'lightpink',
      background: 'url(https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/media/image/2015/06/490986-semana-street-fighter-asi-es-ryu.jpg)',
      height: '100vh',
      display: 'flex',
      flexDirection:'column',
      backgroundSize: 'cover',
      backgroundAttachment: 'fixed',
      backgroundPositionX: 'start',
      justifyContent: 'center',
      alignItems:'center',
      [theme.breakpoints.down('sm')]: {
        backgroundPosition: 'center',  
      },
  },
  deportivo: {
    backgroundPosition: 'start center',
    backgroundColor: 'lightblue',
    background: 'url(https://www.xtrafondos.com/wallpapers/akuma-de-street-fighter-4963.jpg)',
    height: '100vh',
    display: 'flex',
    flexDirection:'column',
    backgroundSize: 'cover',
    backgroundAttachment: 'fixed',
    justifyContent: 'center',
    alignItems:'center',
    [theme.breakpoints.down('sm')]: {
      backgroundPosition: 'left',  
    },
  },  heroTitle: {
    textTransform: 'uppercase',
    fontSize: '6.5vw',
    lineHeight: '1',
    fontWeight: '900',
    marginTop:'8%',
    marginBottom: '2%',
    textAlign: 'center',
    color:'#0c0c0c',
    [theme.breakpoints.down('sm')]: {
      fontSize: '12vw',
    },
},
  highText: {
    display: 'inline-block',
    lineHeight: '0.1rem',
    paddingBottom: '0.5em',
    color: '#0c0c0c',
    backgroundColor: '#F26444'
  }
}));

export default function Clases() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={12} className={classes.clases}>
          <Grid item xs={12} className={classes.tradicional}> 
          <Typography className={classes.heroTitle}><mark className={classes.highText}>facilisi</mark> <mark className={classes.highText}>cras</mark> fermentum odio</Typography>
            <Button  className={classes.clasesButon} >Leer más</Button>
          </Grid>
          <Grid item xs={12} className={classes.deportivo}>
          <Typography className={classes.heroTitle}> <mark className={classes.highText}>enim</mark> <mark className={classes.highText}>nulla</mark> aliquet porttitor <mark className={classes.highText}>lacus luctus</mark></Typography>
            <Button  className={classes.clasesButon}>Leer más</Button>
          </Grid>
      </Grid>
    </div>
  );
}
