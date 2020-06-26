import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import logo from './pton-logo.png';

const useStyles = makeStyles((theme) => ({
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

export default function ButtonBases() {
  const classes = useStyles();

  return (
    <div>
      <AppBar
        position="static"
        style={{
                color: '#000000',
                backgroundColor: '#ffffff',
                borderStyle: 'solid',
                borderColor: '#f58025',
                borderWidth: '4px 0px 0px 0px'
              }}>
        <Toolbar>
          <img
                src={logo}
                alt="Logo"
                width='100'
          />
          <Typography
            variant="h6"
            style={{marginLeft: 'auto',
                    marginRight: 'auto'
                  }}>
            PTON
          </Typography>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </div>
  );
}
