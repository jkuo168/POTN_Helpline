import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

// App bar
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

// Text
import Typography from '@material-ui/core/Typography';

// Buttons
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';

// Images / Icons
import MenuIcon from '@material-ui/icons/Menu';
import logo from './pton-logo.png';

const iconStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },

}));

const buttonStyles = makeStyles((theme) => ({
  root: {
    marginLeft: 'auto',
    marginRight: 'auto',
  },
}));

export default function NavBar() {
  const icon = iconStyles();
  const button = buttonStyles();

  return (
    <div>
      <AppBar
        position="static"
        style={{
                color: '#000000',
                backgroundColor: '#ffffff',
                borderStyle: 'solid',
                borderColor: '#f58025',
                borderWidth: '4px 0px 4px 0px'
              }}>
        <Toolbar>
          <img
                src={logo}
                alt="Logo"
                width='150'
                height='50'
                style={{marginRight: '1%'}}
          />
          <Button className={button.root}>
            COMMUNITY PARTNERS
          </Button>
          <Button className={button.root}>
            HOMEWORK HELPLINE
          </Button>
          <Button className={button.root}>
            TUTORING
          </Button>
          <Button className={button.root}>
            FAQ'S
          </Button>
          <Button className={button.root}>
            FEEDBACK
          </Button>
          <Button className={button.root}>
            ABOUT US
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
