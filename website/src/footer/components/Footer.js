import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    justifyContent: 'flex-end',
    position: 'fixed',
    bottom: '0',
    width: '100%',
    height: '100px'
  }
}));

export default function Footer() {
  const classes = useStyles();

  return (
    <div className={classes.root}
           style={{
                   backgroundColor: "#000000",
                   borderStyle: 'solid',
                   borderColor: '#f58025',
                   borderWidth: '4px 0px 0px 0px',
                   color: "#ffffff",
                   textAlign: 'center'
                 }}>

          Princeton University
    </div>
  );
}
