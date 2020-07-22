import React, { useCallback, useContext, useState, useEffect } from "react";
import { withRouter, Redirect } from "react-router";
import { AuthContext } from "../Auth.js";
import app from "../base.js";
// styles
import {
  makeStyles,
  ThemeProvider,
  createMuiTheme,
} from "@material-ui/core/styles";
import { orange } from "@material-ui/core/colors";
// Login card
import Card from "@material-ui/core/Card";
import Container from "@material-ui/core/Container";
// Form
import FormControl from "@material-ui/core/FormControl";
import FormHelperText from "@material-ui/core/FormHelperText";
import TextField from "@material-ui/core/TextField";
import ButtonBase from "@material-ui/core/Button";
import { Link } from "react-router-dom";
// Home Button
import IconButton from "@material-ui/core/IconButton";
import HomeIcon from "@material-ui/icons/Home";

const styles = makeStyles((theme) => ({
  card: {
    color: "#ffffff",
    fontFamily: "monospace",
    fontSize: "70px",
    left: "50%",
    position: "absolute",
    top: "50%",
    transform: "translate(-50%, -50%)",
    border: "orange",
    borderStyle: "solid",
    width: "50%",
    textAlign: "center",
    padding: "60px",
  },
  margin: {
    margin: theme.spacing(1),
  },
  submit: {
    backgroundColor: "orange",
    color: "white",
    "&:hover": {
      backgroundColor: "orange",
      color: "#FFF",
    },
  },
}));

const theme = createMuiTheme({
  palette: {
    primary: orange,
  },
});

const SignUp = ({ history }) => {
  // login and password states
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { currentUser } = useContext(AuthContext);

  const handleSignUp = (event) => {
    event.preventDefault();
    if (email.length == 0 || password.length == 0) {
      if (email.length == 0) {
        let email_error = document.getElementById("email_error");
        email_error.innerHTML = "Please enter an email";
      } else {
        let email_error = document.getElementById("email_error");
        email_error.innerHTML = " ";
      }
      if (password.length == 0) {
        let password_error = document.getElementById("password_error");
        password_error.innerHTML = "Please enter a password";
      } else {
        let password_error = document.getElementById("password_error");
        password_error.innerHTML = " ";
      }
    } else {
      let email_error = document.getElementById("email_error");
      email_error.innerHTML = " ";
      let password_error = document.getElementById("password_error");
      password_error.innerHTML = " ";
      app
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .then(() => {
          history.push("/user_home");
        })
        .catch((error) => {
          console.log(error);
          alert("The email address is already in use by another account.");
        });
    }
  };

  // styles
  const classes = styles();

  if (currentUser) {
    return <Redirect to="/user_home" />;
  } else {
    return (
      <div style={{ backgroundColor: "cadetblue", height: "100vh" }}>
        <Card className={classes.card}>
          <IconButton component={Link} to="/">
            <HomeIcon />
          </IconButton>
          <div
            style={{
              color: "black",
              fontFamily: "Arial, Helvetica, sans-serif",
              fontSize: "25px",
              paddingBottom: "20px",
            }}
          >
            Create your account
          </div>
          <FormControl
            style={{
              width: "100%",
            }}
          >
            <ThemeProvider theme={theme}>
              <TextField
                label="Email"
                variant="outlined"
                value={email}
                onInput={(e) => setEmail(e.target.value)}
                style={{ width: "100%" }}
              />
              <FormHelperText
                id="email_error"
                style={{ paddingBottom: "10px", color: "red" }}
              >
                {" "}
              </FormHelperText>
            </ThemeProvider>
            <ThemeProvider theme={theme}>
              <TextField
                label="Password"
                variant="outlined"
                style={{ width: "100%" }}
                type="password"
                value={password}
                onInput={(e) => setPassword(e.target.value)}
              />
              <FormHelperText
                id="password_error"
                style={{ paddingBottom: "10px", color: "red" }}
              >
                {" "}
              </FormHelperText>
            </ThemeProvider>
            <ButtonBase
              className={classes.submit}
              key="submit"
              onClick={handleSignUp}
            >
              Sign Up
            </ButtonBase>
            <div
              style={{
                color: "black",
                fontSize: "10px",
                paddingTop: "30px",
                fontFamily: "Arial, Helvetica, sans-serif",
              }}
            >
              Already have an account? <a href="#/login">Login</a>
            </div>
          </FormControl>
        </Card>
      </div>
    );
  }
};

export default SignUp;
