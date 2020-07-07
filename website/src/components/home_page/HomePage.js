import React from "react";

// import nav AppBar
import NavBar from "../nav_bar/NavBar.js";

// import footer
import Footer from "../footer/Footer.js";

// import POTN logot
import POTNLogo from "../potn_logo/POTNLogo.js";

// UI imports
import { makeStyles } from "@material-ui/core/styles";

const siteLayoutStyles = makeStyles(() => ({
  layout: {
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh",
  },
  grow: {
    flexGrow: 1,
  },
}));

export default function HomePage() {
  const siteStyles = siteLayoutStyles();

  return (
    <div className={siteStyles.layout}>
      <NavBar />
      <POTNLogo className={siteStyles.grow} />
      <Footer />
    </div>
  );
}
