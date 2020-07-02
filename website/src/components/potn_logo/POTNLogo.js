import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import potn_logo from "./potn_logo.jpg";
import "./index.css";

export default function POTNLogo() {
  return (
    <div className="container">
      <img
        src={potn_logo}
        style={{ width: "100%", height: "100%", verticalAlign: "top" }}
      ></img>
      <div className="centered">Princeton Online Tutoring Network</div>
    </div>
  );
}
