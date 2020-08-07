import React, { useState } from "react";
import app from "../../authentication/base";
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
import Menu from "@material-ui/core/Menu";
import MenuIcon from "@material-ui/icons/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import AccountBoxIcon from "@material-ui/icons/AccountBox";
// Linking pages
import { Link } from "react-router-dom";

// css styles
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
  navBarButton: {
    height: "80px",
    padding: "8px 20px",
    fontSize: "16px",
    borderRadius: "0",
    textDecoration: "none",
    "&:hover:not(.active)": {
      backgroundColor: "#d3d3d3",
    },
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
  },
  navBarDropdownButton: {
    fontWeight: 600,
    "&:focus:not(:hover)": {
      // Override strange focus highlight
      backgroundColor: "#ffffff",
    },
    "&.active": {
      color: theme.palette.primary.main,
    },
    "&:hover": {
      // Brighten the hover color
      backgroundColor: "#d3d3d3",
    },
  },
  menuButton: {
    height: "80px",
    padding: "8px 20px",
    fontSize: "16px",
    borderRadius: "0",
    textDecoration: "none",
    [theme.breakpoints.up("lg")]: {
      display: "none",
    },
  },
}));

// array of buttons on navigation bar
const buttons = [
  { title: "HOME", link: "/" },
  {
    title: "ABOUT US",
    link: "/about_us",
  },
  {
    title: "COMMUNITY PARTNERS",
    link: "/community_partners",
  },
  {
    title: "FAQ'S",
    link: "/faqs",
  },
  {
    title: "RESOURCES",
    link: "/resources",
  },
];

const UserNavbar = () => {
  const classes = styles();

  // toggle mobile menu dropdown
  const [menuDropdown, setMenuDropdown] = useState(null);
  const [signOutDropdown, setSignOutDropdown] = useState(null);
  const isMenuDropdownOpen = Boolean(menuDropdown);
  const isSignOutDropdownOpen = Boolean(signOutDropdown);

  // mobile menu popup handler
  const handleMenu = (event) => {
    setMenuDropdown(event.currentTarget);
  };

  const handleSignOut = (event) => {
    setSignOutDropdown(event.currentTarget);
  };

  // mobile menu popup handler
  const handleMenuClose = () => {
    setMenuDropdown(null);
  };

  // mobile menu popup handler
  const handleSignOutClose = () => {
    setSignOutDropdown(null);
  };

  return (
    <header>
      <AppBar position="static" className={classes.appbar}>
        <Toolbar>
          <IconButton color="inherit" onClick={handleMenu}>
            <MenuIcon />
          </IconButton>
          <Menu
            id="menu-appbar"
            onClose={handleMenuClose}
            open={isMenuDropdownOpen}
            anchorEl={menuDropdown}
            anchorOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
          >
            {buttons.map((button) => {
              return (
                <MenuItem
                  className={classes.navBarDropdownButton}
                  component={Link}
                  key={button.title}
                  to={button.link}
                >
                  {button.title}
                </MenuItem>
              );
            })}
          </Menu>
          <div style={{ flex: 1 }}>{""}</div>
          <div
            style={{
              fontSize: "30px",
              fontFamily: '"Open Sans Condensed", sans-serif',
            }}
          >
            {" "}
            Homework Helpline{" "}
          </div>
          <div style={{ flex: 1 }}>{""}</div>
          <IconButton color="inherit" onClick={handleSignOut}>
            <AccountBoxIcon />
          </IconButton>{" "}
          <Menu
            id="sign_out"
            onClose={handleSignOutClose}
            open={isSignOutDropdownOpen}
            anchorEl={signOutDropdown}
            anchorOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
          >
            <MenuItem
              className={classes.navBarDropdownButton}
              onClick={() => app.auth().signOut()}
            >
              SIGN OUT
            </MenuItem>
          </Menu>
        </Toolbar>
      </AppBar>
    </header>
  );
};

export default UserNavbar;
