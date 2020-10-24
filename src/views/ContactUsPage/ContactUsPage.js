/*eslint-disable*/
import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// react components used to create a google map
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker
} from "react-google-maps";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
import EmojiPeople from "@material-ui/icons/EmojiPeople";
import EmailOutlined from "@material-ui/icons/EmailOutlined";
import BusinessCenter from "@material-ui/icons/BusinessCenter";
// core components
import Button from "components/CustomButtons/Button.js";
import Header from "components/Header/Header.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import InfoArea from "components/InfoArea/InfoArea.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import Parallax from "components/Parallax/Parallax.js";

import contactUsStyle from "assets/jss/material-kit-pro-react/views/contactUsStyle.js";

const useStyles = makeStyles(contactUsStyle);

export default function ContactUsPage(props) {
  const compId = "contactus"

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
          height: 280,
          color: "primary"
        }}
      />
      <Parallax className={classes.pageHeader} filter={"info"}>
        <h2 className={classes.title}>
          {props.getString(props.prefs.langId, compId, "label_title")}
        </h2>
      </Parallax>
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div className={classes.contactContent}>
          <div className={classes.container}>
            <GridContainer>
              <GridItem
                md={8}
                sm={8}
                className={classNames(classes.mrAuto, classes.mlAuto)}
              >
                <h5 className={classNames(classes.description, classes.textCenter)}>
                  {props.getString(props.prefs.langId, compId, "label_desc_p1")}
                  <br />
                  {props.getString(props.prefs.langId, compId, "label_desc_p2")}
                </h5>
                <br />
              </GridItem>
            </GridContainer>
            <GridContainer>
              <GridItem md={6} className={classNames(classes.mlAuto, classes.mrAuto)}>
                <InfoArea
                  className={classes.info}
                  title={props.getString(props.prefs.langId, compId, "label_infoarea1_title")}
                  description={
                    <p>
                      {props.getString(props.prefs.langId, compId, "label_infoarea1_desc")}
                      {" "}
                      <a href={"mailto:" + props.getString(props.prefs.langId, "emails", "support")}>
                        {props.getString(props.prefs.langId, "emails", "support")}
                      </a>.
                    </p>
                  }
                  icon={EmailOutlined}
                  iconColor="primary"
                />
                <InfoArea
                  className={classes.info}
                  title={props.getString(props.prefs.langId, compId, "label_infoarea2_title")}
                  icon={EmojiPeople}
                  iconColor="primary"
                  description={
                    <div>
                      <Button
                        href={props.project.social.facebook.href}
                        target="_blank"
                        color="facebook"
                        justIcon
                        simple
                      >
                        <i className="fab fa-facebook" />
                      </Button>
                      <Button
                        href={props.project.social.instagram.href}
                        target="_blank"
                        color="instagram"
                        justIcon
                        simple
                      >
                        <i className="fab fa-instagram" />
                      </Button>
                      <Button
                        href={props.project.social.linkedin.href}
                        target="_blank"
                        color="linkedin"
                        justIcon
                        simple
                      >
                        <i className="fab fa-linkedin" />
                      </Button>
                      <Button
                        href={props.project.social.youtube.href}
                        target="_blank"
                        color="youtube"
                        justIcon
                        simple
                      >
                        <i className="fab fa-youtube" />
                      </Button>
                      <Button
                        href={props.project.social.twitter.href}
                        target="_blank"
                        color="twitter"
                        justIcon
                        simple
                      >
                        <i className="fab fa-twitter" />
                      </Button>
                    </div>
                  }
                />
              </GridItem>
            </GridContainer>

            <br /><br />
            <hr />
            <GridContainer>
              <GridItem
                md={8}
                sm={8}
                className={classNames(classes.mrAuto, classes.mlAuto)}
              >
                <h5 className={classNames(classes.description, classes.textCenter)}>
                  {props.getString(props.prefs.langId, compId, "label_footer")}
                </h5>
                <br />
              </GridItem>
            </GridContainer>
          </div>
        </div>
      </div>
      <br />
    </div>
  );
}
