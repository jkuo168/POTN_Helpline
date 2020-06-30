import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    position: 'absolute',
    width: '100%',
    height: 'auto'
  }
}));

export default function POTNLogo() {
  const classes = useStyles();

  return (
    <div className={classes.root}
           style={{
                   backgroundColor: "#ffffff",
                   color: "#000000",
                   textAlign: 'center'
                 }}>
        Princeton Online Tutoring Network
    </div>
  );
}
