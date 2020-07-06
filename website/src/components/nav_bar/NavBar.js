import React from "react";
import { makeStyles } from "@material-ui/core/styles";

// App bar
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";

// Text
import Typography from "@material-ui/core/Typography";

// Buttons
import IconButton from "@material-ui/core/IconButton";
import ButtonBase from "@material-ui/core/Button";

// Images / Icons
import MenuIcon from "@material-ui/icons/Menu";
import logo from "./pace_logo.png";

// Linking pages
import { Link } from "react-router-dom";

// custom css for react elements
const styles = makeStyles((theme) => ({
  appbar: {
    color: "#000000",
    backgroundColor: "#ffffff",
    borderStyle: "solid",
    borderColor: "#f58025",
    borderWidth: "4px 0px 4px 0px",
    position: "fixed",
    top: "0",
  },
  button: {
    height: "80px",
    padding: "8px 20px",
    fontSize: "16px",
    borderRadius: "0",
    textDecoration: "none",
  },
}));

// array of buttons on navigation bar
const buttons = [
  {
    title: "COMMUNITY PARTNERS",
    link: "/community_partners",
  },
  {
    title: "HOMEWORK HELPLINE",
    link: "/homework_helpline",
  },
  {
    title: "TUTORING",
    link: "/tutoring",
  },
  {
    title: "RESOURCES",
    link: "/resources",
  },
  {
    title: "FAQ'S",
    link: "/faqs",
  },
  {
    title: "FEEDBACK",
    link: "/feedback",
  },
  {
    title: "ABOUT US",
    link: "/about_us",
  },
];

export default function NavBar() {
  const classes = styles();

  return (
    <header>
      <AppBar position="static" className={classes.appbar}>
        <Toolbar>
          <img src={logo} alt="Logo" width="160" height="80" />
          <div style={{ flexGrow: 1 }}></div>
          {buttons.map((button) => (
            <ButtonBase
              className={classes.button}
              key={button.title}
              component={Link}
              to={button.link}
            >
              {button.title}
            </ButtonBase>
          ))}
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </header>
  );
}
