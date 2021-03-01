import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// react component for creating beautiful carousel
import Carousel from "react-slick";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
import CallMade from "@material-ui/icons/CallMade";
import Dashboard from "@material-ui/icons/Dashboard";
import ShowChart from "@material-ui/icons/ShowChart";
import TableChart from "@material-ui/icons/TableChart";
import Extension from "@material-ui/icons/Extension";
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
    autoPlay: false,
    autoplaySpeed: 7000,
  };
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
        filter={"success"}>
        <h2 className={classes.title}>{props.getString(props.prefs.langId, compId, "label_title")}</h2>
      </Parallax>
      <div className={classes.container}>
        <div className={classNames(classes.main, classes.mainRaised)}>
          {/* Description */}
          <div className={classes.features1}>
            <GridContainer>
              <GridItem xs={12} sm={8} md={8} className={classNames(classes.mlAuto, classes.mrAuto)}>
                <h2 className={classes.title}>{props.getString(props.prefs.langId, compId, "desc_title")}</h2>
                <h5 className={classes.description}>
                  {props.getString(props.prefs.langId, compId, "desc_p1")}
                  {" "}
                  <b>{props.getString(props.prefs.langId, compId, "desc_p2")}</b>
                  {props.getString(props.prefs.langId, compId, "desc_p3")}
                  {" "}
                  <b>{props.getString(props.prefs.langId, compId, "desc_p4")}</b>
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
        <br /><br /><br />
      </div>
      {/* Section 2 */}
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
                  iconColor="primary"
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
                  iconColor="primary"
                  title={props.getString(props.prefs.langId, compId, "sec2_infoarea2_title")}
                  description={<p>{props.getString(props.prefs.langId, compId, "sec2_infoarea2_desc")}</p>}
                />
              </GridItem>
            </GridContainer>
          </div>
        </Carousel>
      </div>
      {/* Section 3 */}
      {/* Footer */}
      <div className={classes.section}>
        <GridContainer>
          <GridItem md={8} sm={10} className={classNames(classes.mlAuto, classes.mrAuto, classes.textCenter)}>
            <h3 className={classes.title}>
              {props.getString(props.prefs.langId, compId, "footer_title")}
            </h3>
            <Button
              id={"go_to_signUp"}
              href={props.project.info.webapp_signUp}
              color={"white"}
              round
            >
              {props.getString(props.prefs.langId, compId, "footer_btn")}
              {" "}
              <CallMade className={classes.icons} />
            </Button>
            <br /><br />
            <h4 className={classes.description}>
              {props.getString(props.prefs.langId, compId, "footer_desc_p1")}
              {" "}
              <a href={"mailto:" + props.getString(props.prefs.langId, "emails", "support")}>
                {props.getString(props.prefs.langId, "emails", "support")}
              </a>.
              </h4>
            <h4 className={classes.description}>
              {props.getString(props.prefs.langId, compId, "footer_desc_p2")}
            </h4>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
