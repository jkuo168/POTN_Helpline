import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import pton_logo from "./pton_logo.png";

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
  },
}));

export default function Footer() {
  const classes = useStyles();

  return (
    <footer className={classes.root}>
      <Container>
        <img src={pton_logo} style={{ width: "20%" }}></img>
      </Container>
    </footer>
  );
}
