import React from "react";

// import nav AppBar
import NavBar from "../nav_bar/NavBar.js";

// import footer
import Footer from "../footer/Footer.js";

// import POTN logot
import POTNLogo from "../potn_logo/POTNLogo.js";
export default function HomePage() {
  return (
    <>
      <NavBar />
      <POTNLogo />
      <Footer />
    </>
  );
}
