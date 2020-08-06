import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import ButtonBase from "@material-ui/core/Button";
// card
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";

import "./index.css";

const styles = makeStyles((theme) => ({
  card: {
    boxShadow: "0px 2px 2px 0px rgba(0,0,0,0.14)",
    left: "50%",
    margin: "30px",
    height: "100%",
  },
  card_content: {
    display: "flex",
    justifyContent: "space-between",
  },
}));

const buttons = [{ title: "ASK A QUESTION" }, { title: "PAST QUESTIONS" }];
export default function POTNLogo() {
  const classes = styles();

  return (
    <div className="container" style={{ background: "cadetblue" }}>
      <Card className={classes.card}>
        <CardContent className={classes.card_content}>
          <div>{""}</div>
          <ButtonBase>ASK A QUESTION</ButtonBase>
          <ButtonBase>PAST QUESTIONS</ButtonBase>
          <div>{""}</div>
        </CardContent>
      </Card>
    </div>
  );
}
