import {
  container,
  mlAuto,
  mrAuto,
  section,
  sectionDark,
  main,
  mainRaised,
  title,
  description,
  blackColor,
  whiteColor,
  hexToRgb
} from "assets/jss/material-kit-pro-react.js";


import iconStyle from "assets/jss/material-kit-pro-react/components/iconStyle.js";
import footerStyle from "assets/jss/material-kit-pro-react/views/componentsSections/footerStyle.js";

const styles = {
  ...iconStyle,
  ...footerStyle,
  container,
  fullContainer: {
    ...container,
    zIndex: "2",
    position: "relative",
    "& h1, & h4, & h6": {
      color: whiteColor
    }
  },
  section: {
    ...section,
    padding: "50px 0px"
  },
  sectionDark,
  main,
  mainRaised,
  mlAuto,
  mrAuto,
  title,
  description: {
    ...description,
    margin: "0 10px"
  },
  pageHeader: {
    minHeight: "60vh",
    maxHeight: "600px",
    height: "auto",
    backgroundPosition: "top center",
    "& $title": {
      paddingLeft: "60px",
      zIndex: "2",
      color: whiteColor
    },
  },
  features1: {
    textAlign: "center",
    padding: "80px 0"
  },
  features2: {
    padding: "80px 0"
  },
  features3: {
    padding: "80px 0",
    "& $phoneContainer": {
      maxWidth: "220px",
      margin: "0 auto"
    }
  },
  features4: {
    padding: "80px 0",
    "& $phoneContainer": {
      maxWidth: "260px",
      margin: "60px auto 0"
    }
  },
  features5: {
    padding: "80px 0",
    backgroundSize: "cover",
    backgroundPosition: "50%",
    backgroundRepeat: "no-repeat",
    position: "relative",
    "& $title": {
      marginBottom: "30px"
    },
    "& $title,& $container": {
      position: "relative",
      zIndex: "2",
      color: whiteColor
    },
    "&:after": {
      background: "rgba(" + hexToRgb(blackColor) + ",0.55)",
      position: "absolute",
      width: "100%",
      height: "100%",
      content: "''",
      zIndex: "0",
      left: "0px",
      top: "0px"
    },
    "& $container": {
      "& $gridContainer:last-child": {
        "& $gridItem": {
          borderBottom: "0"
        }
      },
      "& $gridItem": {
        border: "1px solid rgba(" + hexToRgb(whiteColor) + ", 0.35)",
        borderTop: "0",
        borderLeft: "0",
        "&:last-child": {
          borderRight: "0"
        }
      }
    },
    "& $infoArea5": {
      textAlign: "center",
      maxWidth: "310px",
      minHeight: "420px",
      "& h4,& p,& svg,& .fab,& .fas,& .far,& .fal,& .material-icons": {
        color: whiteColor
      }
    }
  },
  features6: {
    position: "relative",
    height: "100vh",
    maxHeight: "1600px",
    backgroundPosition: "50%",
    backgroundSize: "cover",
    margin: "0",
    padding: "0",
    border: "0",
    display: "flex",
    WebkitBoxAlign: "center",
    MsFlexAlign: "center",
    alignItems: "center",
    "&:before": {
      background: "rgba(" + hexToRgb(blackColor) + ", 0.5)"
    },
    "&:after,&:before": {
      position: "absolute",
      zIndex: "1",
      width: "100%",
      height: "100%",
      display: "block",
      left: "0",
      top: "0",
      content: "''"
    }
  },
  gridContainer: {},
  gridItem: {},
  textCenter: {
    textAlign: "center"
  },
  ipadContainer: {
    maxWidth: "900px",
    position: "relative",
    "& img": {
      width: "100%"
    }
  },
  phoneContainer: {
    "& img": {
      width: "100%"
    }
  },
  infoArea: {
    maxWidth: "none",
    margin: "0 auto",
    paddingLeft: "5px",
    paddingRight: "5px",
  },
  infoArea5: {},
  iframeContainer: {
    margin: "30px 0",
    "& > iframe": {
      width: "100%",
      boxShadow:
        "0 16px 38px -12px rgba(" +
        hexToRgb(blackColor) +
        ", 0.56), 0 4px 25px 0px rgba(" +
        hexToRgb(blackColor) +
        ", 0.12), 0 8px 10px -5px rgba(" +
        hexToRgb(blackColor) +
        ", 0.2)"
    }
  },
};

export default styles;
