import React from "react";
import { Link } from "react-router-dom";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
import AddCircleOutline from "@material-ui/icons/AddCircleOutline";
import CallMade from "@material-ui/icons/CallMade";
import Business from "@material-ui/icons/Business";
import TouchAppOutlined from "@material-ui/icons/TouchAppOutlined";
import Fingerprint from "@material-ui/icons/Fingerprint";
import PlayCircleOutline from "@material-ui/icons/PlayCircleOutline";
import TrendingUp from "@material-ui/icons/TrendingUp";
// core components
import Button from "components/CustomButtons/Button.js";
import Header from "components/Header/Header.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import InfoArea from "components/InfoArea/InfoArea.js";
import Parallax from "components/Parallax/Parallax.js";

import strategyPageStyle from "assets/jss/material-kit-pro-react/views/products/strategyPageStyle.js";

const useStyles = makeStyles(strategyPageStyle);

export default function StrategiesPage(props) {
  const compId = "strategiespage"

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
        filter={"info"}>
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
                  <b>{props.getString(props.prefs.langId, "keywords", "label_strategies")}</b>,
                  {" "}
                  {props.getString(props.prefs.langId, compId, "desc_p2")}
                  {" "}
                  <b>{props.getString(props.prefs.langId, "keywords", "label_time")}</b>.
                </h5>
              </GridItem>
            </GridContainer>
            <GridContainer>
              <GridItem sm={12} md={4}>
                <InfoArea
                  vertical
                  className={classes.infoArea}
                  icon={AddCircleOutline}
                  title={props.getString(props.prefs.langId, compId, "sec1_infoarea1_title")}
                  description={props.getString(props.prefs.langId, compId, "sec1_infoarea1_desc")}
                  iconColor="warning"
                />
              </GridItem>
              <GridItem sm={12} md={4}>
                <InfoArea
                  vertical
                  className={classes.infoArea}
                  icon={PlayCircleOutline}
                  title={props.getString(props.prefs.langId, compId, "sec1_infoarea2_title")}
                  description={props.getString(props.prefs.langId, compId, "sec1_infoarea2_desc")}
                  iconColor="info"
                />
              </GridItem>
              <GridItem sm={12} md={4}>
                <InfoArea
                  vertical
                  className={classes.infoArea}
                  icon={TrendingUp}
                  title={props.getString(props.prefs.langId, compId, "sec1_infoarea3_title")}
                  description={props.getString(props.prefs.langId, compId, "sec1_infoarea3_desc")}
                  iconColor="success"
                />
              </GridItem>
            </GridContainer>
          </div>
        </div>
        {/* Section 2 */}
        <div className={classes.features3}>
          <GridContainer>
            <GridItem xs={12} sm={5}>
              <div className={classes.phoneContainer}>
                <img src={props.getImage(props.prefs.langId, "strategies_iphone")} alt="..." />
              </div>
            </GridItem>
            <GridItem xs={12} sm={7}>
              <h2 className={classes.title}>{props.getString(props.prefs.langId, compId, "sec2_title")}</h2>
              <InfoArea
                className={classes.infoArea}
                icon={Business}
                title={props.getString(props.prefs.langId, compId, "sec2_infoarea1_title")}
                description={props.getString(props.prefs.langId, compId, "sec2_infoarea1_desc")}
                iconColor="primary"
              />
              <InfoArea
                className={classes.infoArea}
                icon={TouchAppOutlined}
                title={props.getString(props.prefs.langId, compId, "sec2_infoarea2_title")}
                description={props.getString(props.prefs.langId, compId, "sec2_infoarea2_desc")}
                iconColor="primary"
              />
              <InfoArea
                className={classes.infoArea}
                icon={Fingerprint}
                title={props.getString(props.prefs.langId, compId, "sec2_infoarea3_title")}
                description={props.getString(props.prefs.langId, compId, "sec2_infoarea3_desc")}
                iconColor="primary"
              />
            </GridItem>
          </GridContainer>
        </div>
        {/* Section 3 */}
        <div className={classes.features4}>
          <GridContainer>
            <GridItem xs={12} sm={6} md={6}
              className={classes.mlAuto + " " + classes.mrAuto + " " + classes.textCenter}
            >
              <h2 className={classes.title}>{props.getString(props.prefs.langId, compId, "sec3_title")}</h2>
              <h5 className={classes.description}>
                {props.getString(props.prefs.langId, compId, "sec3_desc")}
              </h5>
            </GridItem>
            <GridItem xs={12} sm={5} md={5} className={classes.mlAuto}>
              <div className={classes.iframeContainer}>
                <iframe
                  height="250"
                  src="https://www.youtube.com/embed/videoseries?list=PL07A92TyrGLl0lLBzMChQIPOZN8u-f-hv"
                  frameBorder="0"
                  allow="encrypted-media"
                  allowFullScreen
                  title="Strategies"
                />
              </div>
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
                <Link to={props.getString(props.prefs.langId, compId, "footer_reactLink")} >
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
