import React from "react";
import { Redirect } from "react-router-dom";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// library used for cool animations
import ScrollAnimation from "react-animate-on-scroll";
import "animate.css/animate.min.css";

import phiTraderStyle from "assets/jss/material-kit-pro-react/views/presentationSections/phiTraderStyle.js";

const useStyles = makeStyles(phiTraderStyle);

export default function SectionPhiTrader(props) {
  const compId = "sectionphitrader"
  const [goToPhiTraderPage, setGoToPhiTraderPage] = React.useState(undefined)
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <div className={classes.container}>
        <GridContainer justify="center">
          <GridItem md={4}>
            <div className={classes.sectionDescription}>
              <h2 className={classes.title}>{props.getString(props.prefs.langId, compId, "label_title")}</h2>
              <h3 className={classes.description}>
                {props.getString(props.prefs.langId, compId, "label_desc")}
              </h3>
              {goToPhiTraderPage && <Redirect to="/products/phitrader" />}
              <Button color={"success"} onClick={() => setGoToPhiTraderPage(true)} link>
                <h5>
                  {props.getString(props.prefs.langId, compId, "btn_details")}
                  {" "}
                  <i className="material-icons">call_made</i>
                </h5>
              </Button>
            </div>
          </GridItem>
          <GridItem md={7} className={classes.mlAuto}>
            <div className={classes.imageContainer}>
              <div className={classes.animeImg1}>
                <ScrollAnimation animateIn="animate__fadeInUp">
                  <img
                    src={props.getImage(props.prefs.langId, "phitrader_summary")}
                    alt="PhiTrader"
                    className={classes.img1}
                  />
                </ScrollAnimation>
              </div>
              <div className={classes.animeImg2}>
                <ScrollAnimation animateIn="animate__fadeInUp">
                  <img
                    src={props.getImage(props.prefs.langId, "phitrader_technicalConditions")}
                    alt="PhiTrader"
                    className={classes.img2}
                  />
                </ScrollAnimation>
              </div>
              <img
                src={props.getImage(props.prefs.langId, "phitrader_ipad")}
                alt="PhiTrader"
                className={classes.ipadImg}
              />
            </div>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
