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
//css for containers
import "./index.css";

const styles = makeStyles((theme) => ({
  name: {
    marginBottom: "5%",
    textShadow: "5px 3px 5px black",
    color: "white",
  },
  sign_up: {
    marginLeft: "100px",
    marginRight: "100px",
    padding: "10px 50px",
    borderRadius: "100px 100px 100px 100px",
  },
  login: {
    marginLeft: "100px",
    marginRight: "100px",
    padding: "10px 57px",
    borderRadius: "100px 100px 100px 100px",
  },
  slider: {
    infinite: "true",
    speed: "500",
    slidesToShow: "1",
    slidesToScroll: "1",
  },
}));

const renderSlides = () =>
  [image1, image2, image3].map((image) => (
    <div key={image}>
      <img src={image}></img>
    </div>
  ));

export default function POTNLogo() {
  const classes = styles();
  let settings = {
    dots: true,
    arrows: false,
  };
  return (
    <div className="container">
      <Slider {...settings}>{renderSlides()}</Slider>
      <div className="centered">
        <div className={classes.name} style={{ WebkitTextStroke: "1px grey" }}>
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
  );
}
