import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
import Robot from "@material-ui/icons/Android";
import CompareArrows from "@material-ui/icons/CompareArrows";
import MenuBook from "@material-ui/icons/MenuBook";

import AttachMoney from "@material-ui/icons/AttachMoney";
import PanTool from "@material-ui/icons/PanTool";
import Check from "@material-ui/icons/Check";
import CallSplit from "@material-ui/icons/CallSplit";
import Schedule from "@material-ui/icons/Schedule";
import Filter9Plus from "@material-ui/icons/Filter9Plus";
import DateRange from "@material-ui/icons/DateRange";


// core components
import Header from "components/Header/Header.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import InfoArea from "components/InfoArea/InfoArea.js";
import Parallax from "components/Parallax/Parallax.js";

import phiTraderPageStyle from "assets/jss/material-kit-pro-react/views/products/phiTraderPageStyle.js";

const useStyles = makeStyles(phiTraderPageStyle);

export default function PhiTraderPage(props) {
  const compId = "phitraderpage"

  React.useEffect(() => {
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
  });
  const classes = useStyles();
  return (
    <div>
      <Header
        brandIconId="original"
        brandLogoId="white"
        links={<HeaderLinks {...props} dropdownHoverColor="prymary" />}
        fixed
        color="white"
        changeColorOnScroll={{
          height: 350,
          color: "primary"
        }}
      />
      <Parallax
        className={classes.pageHeader}
        filter={"secondary"}>
        <h2 className={classes.title}>{props.getString(props.prefs.langId, compId, "label_title")}</h2>
      </Parallax>
      <div className={classes.container}>
        <div className={classNames(classes.main, classes.mainRaised)}>
          {/* Description */}
          <div className={classes.features1}>
            <GridContainer>
              <GridItem xs={12} sm={8} md={8} className={classes.mlAuto + " " + classes.mrAuto}>
                <h2 className={classes.title}>{props.getString(props.prefs.langId, compId, "desc_title")}</h2>
                <h5 className={classes.description}>
                  {props.getString(props.prefs.langId, compId, "desc_p1")}
                  {" "}
                  <b>{props.getString(props.prefs.langId, compId, "desc_p2")}</b>
                  {" "}
                  {props.getString(props.prefs.langId, compId, "desc_p3")}
                  {" "}
                  <b>{props.getString(props.prefs.langId, compId, "desc_p4")}</b>.
                </h5>
              </GridItem>
            </GridContainer>
            <GridContainer>
              <GridItem sm={12} md={4}>
                <InfoArea
                  vertical
                  icon={Robot}
                  title={props.getString(props.prefs.langId, compId, "sec1_infoarea1_title")}
                  description={props.getString(props.prefs.langId, compId, "sec1_infoarea1_desc")}
                  iconColor="warning"
                />
              </GridItem>
              <GridItem sm={12} md={4}>
                <InfoArea
                  vertical
                  icon={CompareArrows}
                  title={props.getString(props.prefs.langId, compId, "sec1_infoarea2_title")}
                  description={props.getString(props.prefs.langId, compId, "sec1_infoarea2_desc")}
                  iconColor="info"
                />
              </GridItem>
              <GridItem sm={12} md={4}>
                <InfoArea
                  vertical
                  icon={MenuBook}
                  title={props.getString(props.prefs.langId, compId, "sec1_infoarea3_title")}
                  description={props.getString(props.prefs.langId, compId, "sec1_infoarea3_desc")}
                  iconColor="info"
                />
              </GridItem>
            </GridContainer>
          </div>
        </div>
        {/* Summary */}
        <div className={classes.features4}>
          <GridContainer>
            <GridItem
              xs={12}
              sm={8}
              md={8}
              className={
                classes.mlAuto + " " + classes.mrAuto + " " + classes.textCenter
              }
            >
              <h2 className={classes.title}>{props.getString(props.prefs.langId, compId, "sec2_infoarea1_title")}</h2>
              <h5 className={classes.description}>
                {props.getString(props.prefs.langId, compId, "sec2_infoarea1_desc")}
              </h5>
            </GridItem>
          </GridContainer>
          <GridContainer>
            <GridItem xs={12} sm={12} md={12} lg={3} className={classes.mlAuto}>
              <InfoArea
                icon={AttachMoney}
                title={props.getString(props.prefs.langId, compId, "sec2_infoarea2_title")}
                description={props.getString(props.prefs.langId, compId, "sec2_infoarea2_desc")}
                iconColor="info"
              />
              <InfoArea
                icon={PanTool}
                title={props.getString(props.prefs.langId, compId, "sec2_infoarea3_title")}
                description={props.getString(props.prefs.langId, compId, "sec2_infoarea3_desc")}
                iconColor="danger"
              />
            </GridItem>
            <GridItem xs={12} sm={12} md={12} lg={4}>
              <div className={classes.phoneContainer}>
                <img
                  src={props.getImage(props.prefs.langId, "phitrader_summary")}
                  alt="Phi Trader"
                />
              </div>
            </GridItem>
            <GridItem xs={12} sm={12} md={12} lg={3} className={classes.mrAuto}>
              <InfoArea
                icon={Check}
                title={props.getString(props.prefs.langId, compId, "sec2_infoarea4_title")}
                description={props.getString(props.prefs.langId, compId, "sec2_infoarea4_desc")}
                iconColor="primary"
              />
              <InfoArea
                icon={CallSplit}
                title={props.getString(props.prefs.langId, compId, "sec2_infoarea5_title")}
                description={props.getString(props.prefs.langId, compId, "sec2_infoarea5_desc")}
                iconColor="success"
              />
            </GridItem>
          </GridContainer>
        </div>
        {/* Summary END */}
        {/* Technical Condition */}
        <div className={classes.features3}>
          <GridContainer>
            <GridItem
              xs={12}
              sm={8}
              md={8}
              className={
                classes.mlAuto + " " + classes.mrAuto + " " + classes.textCenter
              }
            >
              <h2 className={classes.title}>{props.getString(props.prefs.langId, compId, "sec3_infoarea1_title")}</h2>
              <h5 className={classes.description}>
                {props.getString(props.prefs.langId, compId, "sec3_infoarea1_desc")}
              </h5>
            </GridItem>
          </GridContainer>
          <GridContainer>
            <GridItem xs={12} sm={12} md={12} lg={3} className={classes.mlAuto}>
              <InfoArea
                icon={Check}
                title={props.getString(props.prefs.langId, compId, "sec3_infoarea2_title")}
                description={props.getString(props.prefs.langId, compId, "sec3_infoarea2_desc")}
                iconColor="success"
              />
              <InfoArea
                icon={Schedule}
                title={props.getString(props.prefs.langId, compId, "sec3_infoarea3_title")}
                description={props.getString(props.prefs.langId, compId, "sec3_infoarea3_desc")}
                iconColor="info"
              />
            </GridItem>
            <GridItem xs={12} sm={12} md={12} lg={3} className={classes.mrAuto}>
              <InfoArea
                icon={Filter9Plus}
                title={props.getString(props.prefs.langId, compId, "sec3_infoarea4_title")}
                description={props.getString(props.prefs.langId, compId, "sec3_infoarea4_desc")}
                iconColor="warning"
              />
              <InfoArea
                icon={DateRange}
                title={props.getString(props.prefs.langId, compId, "sec3_infoarea5_title")}
                description={props.getString(props.prefs.langId, compId, "sec3_infoarea5_desc")}
                iconColor="primary"
              />
            </GridItem>
            <GridItem xs={12} sm={12} md={12} lg={4}>
              <div className={classes.imageContainer}>
                <img
                  src={props.getImage(props.prefs.langId, "phitrader_technical")}
                  alt="PhiTrader"
                />
              </div>
            </GridItem>
          </GridContainer>
        </div>
      </div>
    </div>
  );
}
