/*eslint-disable*/
import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import Header from "components/Header/Header.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Parallax from "components/Parallax/Parallax.js";
// sections for this page
import HeaderLinks from "components/Header/HeaderLinks.js";
import SectionDescription from "views/AboutUsPage/Sections/SectionDescription.js";
import SectionPillars from "views/AboutUsPage/Sections/SectionPillars.js";
import SectionText from "views/AboutUsPage/Sections/SectionText.js";
import SectionContact from "views/AboutUsPage/Sections/SectionContact.js";

import aboutUsStyle from "assets/jss/material-kit-pro-react/views/aboutUsStyle.js";

const useStyles = makeStyles(aboutUsStyle);

export default function AboutUsPage(props) {
  const compId = "aboutuspage"

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
          height: 300,
          color: "primary"
        }}
      />
      <Parallax image={require("assets/img/bg/bg1.jpg")} filter="dark" medium>
        <div className={classes.container}>
          <GridContainer justify="center">
            <GridItem
              md={8}
              sm={8}
              className={classNames(
                classes.mlAuto,
                classes.mrAuto,
                classes.textCenter
              )}
            >
              <h1 className={classes.title}>{props.getString(props.prefs.langId, compId, "label_title")}</h1>
              <h4>
                {props.getString(props.prefs.langId, compId, "label_desc")}
              </h4>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div className={classes.container}>
          <SectionDescription {...props} />
          <SectionText {...props} />
          <SectionPillars {...props} />
        </div>
      </div>
      <SectionContact {...props} />
    </div>
  );
}
