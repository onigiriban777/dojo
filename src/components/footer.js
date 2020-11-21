import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import Logo from '../img/logo.png';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import YouTubeIcon from '@material-ui/icons/YouTube';
import Divider from '@material-ui/core/Divider';
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  footer:{
    backgroundColor:'black',
    color: 'white',
    paddingLeft:'2%',
    paddingRight:'2%',
    paddingBottom: '1%'
  },
  logo:{
    display: 'flex',
  },
  logoFooter: {
      height: 'auto',
      width: '160px',
      paddingTop: '4%'
  },
  footerInfo: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-end',
      fontSize: '12px'
  },
  social: {
    gap: '6px'
  },
  developed: {
    backgroundColor: 'dodgerblue',
    color: 'white',
    height:'20px'
  }
}));

export default function Footer() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
            <Grid container className={classes.footer} >
                <Grid item container xs={6} className={classes.logo} >
                    <Grid item xs={3} ><img src={Logo} className={classes.logoFooter} /></Grid>
                </Grid>
                <Grid item container xs={6} className={classes.footerInfo}>
                    <p>karatedojo@example.com</p>
                    <p>C.A.B.A., Argentina</p>
                    <p>Ver en Mapa</p>
                        <Grid item container className={classes.social} xs={12} justify='flex-end'>
                        <InstagramIcon fontSize='small' />
                        <FacebookIcon fontSize='small' />
                        <YouTubeIcon fontSize='small' />
                        </Grid>
                </Grid>
            </Grid>
    </div>
  );
}
