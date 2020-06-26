import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import logo from './pton_logo.png';

export default function ButtonBases() {
  return (
    <div>
      <AppBar
        position="static"
        style={{color: '#000000',
                backgroundColor: '#ffffff',
                borderStyle: 'solid',
                borderColor: '#f58025',
                borderWidth: '4px 0px 0px 0px'
              }}>
        <Toolbar>
          <img src={logo}
                alt="Logo"

          />
          <Typography variant="h6">
            Princeton Tutoring Network Helpline
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}
