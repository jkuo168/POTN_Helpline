import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import pton_logo from "./pton_logo.svg";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#000000",
    borderColor: "#f58025",
    borderWidth: "4px 0px 0px 0px",
    borderStyle: "solid",
    bottom: "0",
    color: "#ffffff",
    display: "flex",
    flex: "initial",
    height: "100%",
    minWidth: "1200px",
    position: "relative",
    width: "100%",
    zIndex: 1,
  },
  logo: {
    display: "block",
    maxWidth: "50%",
    margin: "auto",
    maxWidth: "50%",
    padding: "0",
  },
  contacts: {
    color: "#ffffff",
    display: "block",
    fontFamily: '"Open Sans Condensed", sans-serif;',
    fontSize: "15px",
    margin: "auto",
    maxWidth: "50%",
    paddingTop: "15px",
    textAlign: "center",
  },
  copyright: {
    display: "block",
    fontFamily: '"Open Sans Condensed", sans-serif;',
    fontSize: "15px",
    margin: "auto",
    textAlign: "right",
  },
}));

export default function Footer() {
  const classes = useStyles();

  return (
    <footer className={classes.root}>
      <Container className={classes.logo}>
        <img
          src={pton_logo}
          style={{
            width: "50%",
            paddingLeft: "20px",
            paddingTop: "10px",
          }}
        ></img>
      </Container>
      <Container className={classes.contacts}>
        <strong>Contacts</strong>
        <p>
          Pace Center for Civic Engagement<br></br>
          201 Frist Campus Center Princeton, NJ 08544<br></br>
          58 Prospect Avenue, Third Floor<br></br>
          609.258.7260 | pace@princeton.edu<br></br>
        </p>
      </Container>
      <Container className={classes.copyright}>
        <p>
          Princeton Online Tutoring Network<br></br>© 2020 The Trustees of
          Princeton University<br></br>
          Copyright Infringement | Privacy Notice
        </p>
      </Container>
    </footer>
  );
}
