import React, { useState } from "react";
import app from "../authentication/base";
import UserNavbar from "./subcomponents/UserNavbar.js";
import HomeworkHelpline from "./subcomponents/HomeworkHelpline.js";
import Footer from "../header_footer/footer/Footer.js";

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

const UserHome = () => {
  const siteStyles = siteLayoutStyles();

  return (
    <div className={siteStyles.layout}>
      <UserNavbar />
      <HomeworkHelpline className={siteStyles.grow} />
      <Footer />
    </div>
  );
};

export default UserHome;
