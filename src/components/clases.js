import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { Typography, Button } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    background: 'dodgerblue',
    height: '70vh',
    [theme.breakpoints.down('sm')]: {
      height: '50vh'
    },
  },
  clasesButon: {
      height: '60px',
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
      backgroundPosition: 'center center',  
      backgroundColor:'lightpink',
      background: 'url(https://cdn.thestandnews.com/media/photos/cache/21768913_726487807534610_7404133375681036704_o_1sw9l_1200x0.jpg)',
      height: '70vh',
      display: 'flex',
      flexDirection:'column',
      backgroundPosition: 'center center',  
      backgroundSize: 'cover',
      justifyContent: 'center',
      alignItems:'center',
      [theme.breakpoints.down('sm')]: {
        backgroundPosition: 'center',  
      },
  },
  deportivo: {
    backgroundPosition: 'center center',
    backgroundColor: 'lightblue',
    background: 'url(https://www.seibuhochi.com/wp-content/uploads/2020/06/191203sksmdr-1024x788.jpg)',
    height: '70vh',
    display: 'flex',
    flexDirection:'column',
    backgroundSize: 'cover',
    backgroundPosition: 'center center',
    justifyContent: 'center',
    alignItems:'center',
    [theme.breakpoints.down('sm')]: {
      backgroundPosition: 'left',  
    },
  }
}));

export default function Clases() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={12} className={classes.clases}>
          <Grid item xs={6} className={classes.tradicional}> 
            <Button  className={classes.clasesButon} >Tradicional</Button>
          </Grid>
          <Grid item xs={6} className={classes.deportivo}> 
            <Button  className={classes.clasesButon}>Deportivo</Button>
          </Grid>
      </Grid>
    </div>
  );
}
