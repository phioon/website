import {
  container,
  section,
  title,
  sectionDescription,
  mlAuto,
  blackColor,
  grayColor,
  hexToRgb
} from "assets/jss/material-kit-pro-react.js";

const style = theme => ({
  container,
  section: {
    ...section,
    padding: "70px 0px"
  },
  sectionDescription,
  title: {
    ...title,
    color: grayColor[1],
    marginTop: "30px",
    marginBottom: "5px",
    "& + $description": {
      marginBottom: "10px",
      marginTop: "0px"
    }
  },
  description: {
    color: grayColor[0],
    marginTop: "35px",
    marginBottom: "15px"
  },
  imageContainer: {
    maxWidth: "900px",
    position: "relative"
  },
  ipadImg: {
    width: "100%"
  },
  mlAuto,
  img1: {
    width: "323px",
    height: "294px",
    zIndex: 2,
    top: "-4%",
    left: "57%",
    boxShadow:
      "0 8px 10px 1px rgba(" +
      hexToRgb(blackColor) +
      ", 0.14), 0 3px 14px 2px rgba(" +
      hexToRgb(blackColor) +
      ", 0.12), 0 5px 5px -3px rgba(" +
      hexToRgb(blackColor) +
      ", 0.2)",
    [theme.breakpoints.down("sm")]: {
      maxWidth: "162px",
      maxHeight: "147px"
    }
  },
  img2: {
    width: "323px",
    height: "352px",
    top: "50%",
    left: "0%",
    boxShadow:
      "0 8px 10px 1px rgba(" +
      hexToRgb(blackColor) +
      ", 0.14), 0 3px 14px 2px rgba(" +
      hexToRgb(blackColor) +
      ", 0.12), 0 5px 5px -3px rgba(" +
      hexToRgb(blackColor) +
      ", 0.2)",
    [theme.breakpoints.down("sm")]: {
      maxWidth: "162px",
      maxHeight: "176px"
    }
  },
  animeImg1: {
    top: "-4%",
    left: "57%",
    position: "absolute"
  },
  animeImg2: {
    top: "50%",
    left: "-3%",
    position: "absolute"
  },
});

export default style;
