import React, { useCallback, useContext, useState, useEffect } from "react";
import { withRouter, Redirect } from "react-router";
import { AuthContext } from "../authentication/Auth.js";
import app from "../authentication/base.js";
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

const Login = ({ history }) => {
  // login and password states
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { currentUser } = useContext(AuthContext);

  const handleLogin = (event) => {
    app
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        history.push("/user_home");
      })
      .catch((error) => {
        alert(error);
      });

    event.preventDefault();
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
            Login to your account
          </div>
          <FormControl
            style={{
              width: "100%",
            }}
          >
            <div>
              <ThemeProvider theme={theme}>
                <TextField
                  label="Email"
                  variant="outlined"
                  value={email}
                  onInput={(e) => setEmail(e.target.value)}
                  style={{ width: "100%" }}
                />
              </ThemeProvider>
            </div>
            <div>
              <ThemeProvider theme={theme}>
                <TextField
                  label="Password"
                  variant="outlined"
                  style={{ width: "100%" }}
                  value={password}
                  onInput={(e) => setPassword(e.target.value)}
                />
              </ThemeProvider>
            </div>
            <ButtonBase
              className={classes.submit}
              key="submit"
              onClick={handleLogin}
            >
              Login
            </ButtonBase>
          </FormControl>
        </Card>
      </div>
    );
  }
};

export default Login;
