import React from "react";
import { Link } from "react-router-dom";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
import CallMade from "@material-ui/icons/CallMade";
import Equalizer from "@material-ui/icons/Equalizer";
import MyLocation from "@material-ui/icons/MyLocation";
import MenuBook from "@material-ui/icons/MenuBook";
import PanoramaHorizontal from "@material-ui/icons/PanoramaHorizontal";
import ThumbUpAltOutlined from "@material-ui/icons/ThumbUpAltOutlined";

// core components
import Button from "components/CustomButtons/Button.js";
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
        links={<HeaderLinks {...props} dropdownHoverColor="primary" />}
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
                  icon={MyLocation}
                  title={props.getString(props.prefs.langId, compId, "sec1_infoarea1_title")}
                  description={props.getString(props.prefs.langId, compId, "sec1_infoarea1_desc")}
                  iconColor="warning"
                />
              </GridItem>
              <GridItem sm={12} md={4}>
                <InfoArea
                  vertical
                  icon={Equalizer}
                  title={props.getString(props.prefs.langId, compId, "sec1_infoarea2_title")}
                  description={props.getString(props.prefs.langId, compId, "sec1_infoarea2_desc")}
                  iconColor="success"
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
        {/* Section 2 */}
        <div className={classes.features4}>
          <GridContainer>
            <GridItem xs={12} sm={8} md={8}
              className={classes.mlAuto + " " + classes.mrAuto + " " + classes.textCenter}
            >
              <h2 className={classes.title}>{props.getString(props.prefs.langId, compId, "sec2_title")}</h2>
              <h5 className={classes.description}>
                {props.getString(props.prefs.langId, compId, "sec2_desc")}
              </h5>
            </GridItem>
          </GridContainer>
          <GridContainer>
            <GridItem sm={12} md={4} className={classes.mlAuto}>
              <InfoArea
                icon={"rule"}
                title={props.getString(props.prefs.langId, compId, "sec2_infoarea1_title")}
                description={props.getString(props.prefs.langId, compId, "sec2_infoarea1_desc")}
                iconColor="info"
              />
              <InfoArea
                icon={"insights"}
                title={props.getString(props.prefs.langId, compId, "sec2_infoarea2_title")}
                description={props.getString(props.prefs.langId, compId, "sec2_infoarea2_desc")}
                iconColor="warning"
              />
            </GridItem>
            <GridItem sm={12} md={4}>
              <div className={classes.imageContainer}>
                <img
                  src={props.getImage(props.prefs.langId, "phitrader_cards1")}
                  alt="Phi Trader"
                />
              </div>
            </GridItem>
            <GridItem sm={12} md={4} className={classes.mrAuto}>
              <InfoArea
                icon={ThumbUpAltOutlined}
                title={props.getString(props.prefs.langId, compId, "sec2_infoarea3_title")}
                description={props.getString(props.prefs.langId, compId, "sec2_infoarea3_desc")}
                iconColor="success"
              />
              <InfoArea
                icon={PanoramaHorizontal}
                title={props.getString(props.prefs.langId, compId, "sec2_infoarea4_title")}
                description={props.getString(props.prefs.langId, compId, "sec2_infoarea4_desc")}
                iconColor="rose"
              />
            </GridItem>
          </GridContainer>
        </div>
        {/* Footer */}
        <div className={classes.section}>
          <GridContainer>
            <GridItem md={8} sm={10} className={classNames(classes.mlAuto, classes.mrAuto, classes.textCenter)}>
              <h3 className={classes.title}>
                {props.getString(props.prefs.langId, compId, "footer_title")}
              </h3>
              <Button
                href={props.getString(props.prefs.langId, compId, "footer_reactLink")}
                color={"white"}
                round
                onClick={e => e.preventDefault()}
              >
                <Link to={props.getString(props.prefs.langId, compId, "footer_reactLink")}>
                  {props.getString(props.prefs.langId, compId, "footer_btn")}
                  {" "}
                  <CallMade className={classes.icons} />
                </Link>
              </Button>
              <br /><br />
              <h4 className={classes.description}>
                {props.getString(props.prefs.langId, compId, "footer_desc_p1")}
                {" "}
                <a href={"mailto:" + props.getString(props.prefs.langId, compId, "footer_mailto")}>
                  {props.getString(props.prefs.langId, compId, "footer_mailto")}
                </a>.
              </h4>
              <h4 className={classes.description}>
                {props.getString(props.prefs.langId, compId, "footer_desc_p2")}
              </h4>
            </GridItem>
          </GridContainer>
        </div>
      </div>
    </div>
  );
}
