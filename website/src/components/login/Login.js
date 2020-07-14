import React, { useCallback, useContext } from "react";
import { withRouter, Redirect } from "react-router";
import { AuthContext } from "../authentication/Auth.js";
import app from "../authentication/base.js";
// styles
import { makeStyles } from "@material-ui/core/styles";

// Login card
import Card from "@material-ui/core/Card";
import Container from "@material-ui/core/Container";

// Form
import FormControl from "@material-ui/core/FormControl";
import TextField from "@material-ui/core/TextField";

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
    padding: "100px",
  },
}));

const Login = ({ history }) => {
  const handleLogin = useCallback(
    async (event) => {
      event.preventDefault();
      const { email, password } = event.target.elements;
      try {
        await app
          .auth()
          .signInWithEmailAndPassword(email.value, password.value);
        history.push("/user_home");
      } catch (error) {
        alert(error);
      }
    },
    [history]
  );

  const { currentUser } = useContext(AuthContext);

  if (currentUser) {
    return <Redirect to="/user_home" />;
  }

  // styles
  const classes = styles();

  return (
    <div style={{ backgroundColor: "cadetblue", height: "100vh" }}>
      <Card className={classes.card}>
        <FormControl
          style={{
            width: "100%",
          }}
        >
          <div
            style={{
              color: "black",
              font: "monospace",
              paddingBottom: "10px",
            }}
          >
            Login
          </div>
          <div>
            <TextField
              label="Email"
              variant="outlined"
              style={{ width: "100%" }}
            />
          </div>
          <div>
            <TextField
              label="Password"
              variant="outlined"
              style={{ width: "100%" }}
            />
          </div>
        </FormControl>
      </Card>
    </div>
  );
};

export default withRouter(Login);
