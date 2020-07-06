import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import pton_logo from "./pton_logo.svg";

const useStyles = makeStyles((theme) => ({
  root: {
    bottom: "0",
    width: "100%",
    height: "100%",
    backgroundColor: "#000000",
    borderStyle: "solid",
    borderColor: "#f58025",
    borderWidth: "4px 0px 0px 0px",
    color: "#ffffff",
    position: "relative",
    minWidth: "1200px",
    display: "flex",
  },
  logo: {
    padding: "0",
    maxWidth: "50%",
    display: "block",
    margin: "auto",
  },
  contacts: {
    color: "#ffffff",
    textAlign: "center",
    maxWidth: "50%",
    display: "block",
    margin: "auto",
    paddingTop: "15px",
    fontFamily: '"Open Sans Condensed", sans-serif;',
    fontSize: "15px",
  },
  copyright: {
    textAlign: "right",
    display: "block",
    margin: "auto",
    fontFamily: '"Open Sans Condensed", sans-serif;',
    fontSize: "15px",
  },
}));

export default function Footer() {
  const classes = useStyles();

  return (
    <footer className={classes.root}>
      <Container className={classes.logo}>
        <img
          src={pton_logo}
          style={{ width: "50%", paddingLeft: "20px", paddingTop: "10px" }}
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
