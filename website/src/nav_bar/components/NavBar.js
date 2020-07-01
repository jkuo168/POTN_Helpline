import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

// App bar
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

// Text
import Typography from '@material-ui/core/Typography';

// Buttons
import IconButton from '@material-ui/core/IconButton';
import ButtonBase from '@material-ui/core/Button';

// Images / Icons
import MenuIcon from '@material-ui/icons/Menu';
import logo from './pton-logo.png';

// Linking pages
import { Link } from 'react-router-dom';

// custom css
const styles = makeStyles((theme) => ({
  button: {
    margin: 'auto',
  },
  appbar: {
    color: '#000000',
    backgroundColor: '#ffffff',
    borderStyle: 'solid',
    borderColor: '#f58025',
    borderWidth: '4px 0px 4px 0px'
  }
}));

// array of buttons on navigation bar
const buttons = [
  {
    title: 'COMMUNITY PARTNERS',
    link: '/community_partners'
  },
  {
    title: 'HOMEWORK HELPLINE',
    link: '/homework_helpline'
  },
  {
    title: 'TUTORING',
    link: '/tutoring'
  },
  {
    title: 'RESOURCES',
    link: '/resources'
  },
  {
    title: 'FAQ\'S',
    link: '/faqs'
  },
  {
    title: 'FEEDBACK',
    link: '/feedback'
  },
  {
    title: 'ABOUT US',
    link: '/about_us'
  }
]

export default function NavBar() {
  const classes = styles();

  return (
    <div>
      <AppBar
        position="static"
        className={classes.appbar}
      >
        <Toolbar style={{ paddingRight: '0px', display: 'block'}}>
          <img
                src={logo}
                alt="Logo"
                width='150'
                height='50'
                style={{marginRight: '1%'}}
          />
          {buttons.map(button => (
            <ButtonBase
              className={classes.button}
              key={button.title}
              component={Link} to={button.link}
            >
              {button.title}
            </ButtonBase>
          ))}
        </Toolbar>
      </AppBar>
    </div>
  );
}
