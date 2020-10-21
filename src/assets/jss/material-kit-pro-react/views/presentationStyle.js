import { blackColor } from "assets/jss/material-kit-pro-react";
import {
  container,
  title,
  main,
  whiteColor,
  grayColor,
  mainRaised,
  hexToRgb
} from "assets/jss/material-kit-pro-react.js";
import footerStyle from "assets/jss/material-kit-pro-react/views/componentsSections/footerStyle.js";

const presentationStyle = {
  ...footerStyle,
  main: {
    ...main
    /*overflow: "hidden"*/
  },
  mainRaised,
  parallax: {
    height: "90vh",
    overflow: "hidden"
  },
  container: {
    ...container,
    zIndex: 2
  },
  title: {
    ...title,
    color: blackColor
  },
  brand: {
    color: blackColor,
    textAlign: "center",
    "& h1": {
      fontSize: "4.2rem",
      fontWeight: "600",
      display: "inline-block",
      position: "relative"
    }
  },
  slogan: {
    color: whiteColor,
    margin: "30px 0px"
  },
  badge: {
    position: "relative",
    fontSize: "18px",
    fontWeight: "350",
    padding: "10px 18px",
    top: "30px",
    background: whiteColor,
    borderRadius: "3px",
    color: grayColor[18],
    lineHeight: "22px",
    boxShadow: "0 5px 5px -2px rgba(" + hexToRgb(grayColor[25]) + ",.4)"
  }
};

export default presentationStyle;
