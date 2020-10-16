import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// react component for creating beautiful carousel
import Carousel from "react-slick";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
import Business from "@material-ui/icons/Business";
import Dashboard from "@material-ui/icons/Dashboard";
import ShowChart from "@material-ui/icons/ShowChart";
import TableChart from "@material-ui/icons/TableChart";
import Extension from "@material-ui/icons/Extension";
import WatchLater from "@material-ui/icons/WatchLater";
import WbIncandescentOutlined from "@material-ui/icons/WbIncandescentOutlined";
// core components
import Button from "components/CustomButtons/Button.js";
import Header from "components/Header/Header.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import InfoArea from "components/InfoArea/InfoArea.js";
import Parallax from "components/Parallax/Parallax.js";

import walletsPageStyle from "assets/jss/material-kit-pro-react/views/products/walletsPageStyle.js";

import presentationiPad from "assets/img/assets-for-demo/presentationViewSectionComponent/presentation-ipad.jpg";

import dg1 from "assets/img/dg1.jpg";
import dg2 from "assets/img/dg2.jpg";
import dg3 from "assets/img/dg3.jpg";

import bg9 from "assets/img/bg9.jpg";

const useStyles = makeStyles(walletsPageStyle);

export default function WalletsPage(props) {
  const compId = "walletspage"
  React.useEffect(() => {
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
  });

  const carouselSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: window.innerWidth < 768 ? 1 : 2,
    slidesToScroll: 1,
    autoPlay: true,
    autoplaySpeed: 7000,
  };
  const classes = useStyles();
  return (
    <div>
      <Header
        brand={props.project.info.name}
        links={<HeaderLinks {...props} dropdownHoverColor="info" />}
        fixed
        color="white"
        changeColorOnScroll={{
          height: 350,
          color: "primary"
        }}
      />
      <Parallax
        className={classes.pageHeader}
        filter={"success"}>
        <h2 className={classes.title}>{props.getString(props.prefs.langId, compId, "label_title")}</h2>
      </Parallax>
      <div className={classes.container}>
        {/* Section 1: raised container */}
        <div className={classNames(classes.main, classes.mainRaised)}>
          {/* Description */}
          <div className={classes.features1}>
            <GridContainer>
              <GridItem xs={12} sm={8} md={8} className={classNames(classes.mlAuto, classes.mrAuto)}>
                <h2 className={classes.title}>{props.getString(props.prefs.langId, compId, "desc_title")}</h2>
                <h5 className={classes.description}>
                  {props.getString(props.prefs.langId, compId, "desc_p1")}
                  {" "}
                  <strong>{props.getString(props.prefs.langId, compId, "desc_p2")}</strong>
                  {props.getString(props.prefs.langId, compId, "desc_p3")}
                  {" "}
                  <strong>{props.getString(props.prefs.langId, compId, "desc_p4")}</strong>
                </h5>
              </GridItem>
            </GridContainer>
            <GridContainer>
              <GridItem sm={12} md={4}>
                <InfoArea
                  vertical
                  className={classes.infoArea}
                  icon={ShowChart}
                  title={props.getString(props.prefs.langId, compId, "sec1_infoarea1_title")}
                  description={props.getString(props.prefs.langId, compId, "sec1_infoarea1_desc")}
                  iconColor="success"
                />
              </GridItem>
              <GridItem sm={12} md={4}>
                <InfoArea
                  vertical
                  className={classes.infoArea}
                  icon={Dashboard}
                  title={props.getString(props.prefs.langId, compId, "sec1_infoarea2_title")}
                  description={props.getString(props.prefs.langId, compId, "sec1_infoarea2_desc")}
                  iconColor="info"
                />
              </GridItem>
              <GridItem sm={12} md={4}>
                <InfoArea
                  vertical
                  className={classes.infoArea}
                  icon={WbIncandescentOutlined}
                  title={props.getString(props.prefs.langId, compId, "sec1_infoarea3_title")}
                  description={props.getString(props.prefs.langId, compId, "sec1_infoarea3_desc")}
                  iconColor="warning"
                />
              </GridItem>
            </GridContainer>
          </div>
        </div>
        {/* Section 2 */}
        <br /><br /><br />
      </div>
      <div className={classNames(classes.section)}>
        <Carousel {...carouselSettings}>
          {/* Charts image */}
          <div>
            <GridContainer>
              <GridItem xs={12} className={classNames(classes.mlAuto, classes.mrAuto)}>
                <div className={classes.ipadContainer}>
                  <img src={props.getImage(props.prefs.langId, "wallets_cards3")} alt="Charts" />
                </div>
              </GridItem>
            </GridContainer>
          </div>
          {/* Charts description */}
          <div>
            <GridContainer>
              <GridItem xs={12} className={classNames(classes.mlAuto, classes.mrAuto)}>
                <InfoArea
                  vertical
                  className={classes.infoArea5}
                  icon={Extension}
                  iconColor="black"
                  title={props.getString(props.prefs.langId, compId, "sec2_infoarea1_title")}
                  description={<p>{props.getString(props.prefs.langId, compId, "sec2_infoarea1_desc")}</p>}
                />
              </GridItem>
            </GridContainer>
          </div>
          {/* Metrics image */}
          <div>
            <GridContainer>
              <GridItem xs={12} className={classNames(classes.mlAuto, classes.mrAuto)}>
                <div className={classes.ipadContainer}>
                  <img src={props.getImage(props.prefs.langId, "wallets_cards2")} alt="Metrics" />
                </div>
              </GridItem>
            </GridContainer>
          </div>
          {/* Metrics description */}
          <div>
            <GridContainer>
              <GridItem xs={12} className={classNames(classes.mlAuto, classes.mrAuto)}>
                <InfoArea
                  vertical
                  className={classes.infoArea5}
                  icon={TableChart}
                  iconColor="black"
                  title={props.getString(props.prefs.langId, compId, "sec2_infoarea2_title")}
                  description={<p>{props.getString(props.prefs.langId, compId, "sec2_infoarea2_desc")}</p>}
                />
              </GridItem>
            </GridContainer>
          </div>
        </Carousel>
      </div>
      {/* Section 3 */}
      <div className={classes.features4}>
        <GridContainer>
          <GridItem xs={12} sm={6} md={6}
            className={
              classes.mlAuto + " " + classes.mrAuto + " " + classes.textCenter
            }
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
                src="https://www.youtube.com/embed/IN6QnLpVEPI?ref=creativetim"
                frameBorder="0"
                allow="encrypted-media"
                allowFullScreen
                title="Strategies"
              />
            </div>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
