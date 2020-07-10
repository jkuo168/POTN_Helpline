import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import ButtonBase from "@material-ui/core/Button";
// slider and image imports
import image1 from "./pace_1.jpg";
import image2 from "./pace_2.jpg";
import image3 from "./pace_3.jpg";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
// card
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
//css for containers
import "./index.css";

const styles = makeStyles((theme) => ({
  name: {
    marginBottom: "5%",
    textShadow: "5px 3px 5px black",
    color: "white",
    top: "50%",
    left: "50%",
  },
  sign_up: {
    marginLeft: "100px",
    marginRight: "100px",
    padding: "10px 50px",
    borderRadius: "100px 100px 100px 100px",
    borderColor: "white",
    color: "white",
  },
  login: {
    marginLeft: "100px",
    marginRight: "100px",
    padding: "10px 57px",
    borderRadius: "100px 100px 100px 100px",
    borderColor: "white",
    color: "white",
  },
  cards: {
    display: "flex",
    backgroundColor: "lightgrey",
  },
  card: {
    flexGrow: 1,
    borderRadius: "0",
    boxShadow: "0px 2px 2px 0px rgba(0,0,0,0.14)",
    marginTop: "10px",
    marginBottom: "10px",
    marginLeft: "5px",
    marginRight: "5px",
  },
}));

const cards = [
  {
    name: "Resources",
  },
  {
    name: "Homework Helpline",
  },
  {
    name: "Volunteer",
  },
];

export default function POTNLogo() {
  const classes = styles();
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="container">
      <div
        className="text"
        style={{
          width: "100%",
          height: "600px",
          backgroundColor: "cadetblue",
        }}
      >
        <div className="centered">
          <div
            className={classes.name}
            style={{ WebkitTextStroke: "1px grey" }}
          >
            Princeton Online Tutoring Network
          </div>
          <ButtonBase className={classes.sign_up} variant="outlined">
            SIGN UP
          </ButtonBase>
          <ButtonBase className={classes.login} variant="outlined">
            LOGIN
          </ButtonBase>
        </div>
      </div>
      <div className={classes.cards}>
        {cards.map((card) => {
          return (
            <Card className={classes.card} key={card.name} style={{}}>
              <CardContent>{card.name}</CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
