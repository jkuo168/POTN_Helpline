import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import potn_logo from './potn_logo.jpg';

const useStyles = makeStyles(theme => ({
  root: {
  }
}));

export default function POTNLogo() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <img src={potn_logo} style={{width: '-webkit-fill-available', height: 'max-content', opacity: '70%'}}></img>
    </div>
  );
}
