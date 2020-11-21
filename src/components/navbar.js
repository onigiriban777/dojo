import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormGroup from '@material-ui/core/FormGroup';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import SimpleMenu from './menu';
import Logo from '../img/logo.png';
import YouTubeIcon from '@material-ui/icons/YouTube';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    position: 'fixed',
    width: '100%',
    zIndex: '1'
  },
  navBar: {
    display: 'flex',
    justifyContent: 'space-between'
  },
  header: {
    backgroundColor: '#0c0c0c',
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  socialMenu: {
      display: 'flex',
      gap: '6px',
      paddingRight:'4px'
  },
  logo: {
      width: '160px'
  },
  socialIcons: {
    color: 'white',
      "&:hover": {
        color:'#F26444'
      }
  }
}));

export default function MenuAppBar() {
  const classes = useStyles();
  const [auth, setAuth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleChange = (event) => {
    setAuth(event.target.checked);
  };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.header}>
        <Toolbar className={classes.navBar}>
        <SimpleMenu  className={classes.hambur} />
        <img src={Logo} alt="Logo" className={classes.logo} />
        <div className={classes.socialMenu}>
          <InstagramIcon fontSize='small' className={classes.socialIcons} />
          <FacebookIcon fontSize='small' className={classes.socialIcons} />
          <YouTubeIcon fontSize='small' className={classes.socialIcons} />
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}
