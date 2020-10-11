/*eslint-disable*/
import React from "react";
import { Link, Redirect } from "react-router-dom";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
// core components
import Header from "components/Header/Header.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import Parallax from "components/Parallax/Parallax.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
// sections for this page
import SectionDescription from "views/PresentationPage/Sections/SectionDescription.js";
import SectionStrategies from "views/PresentationPage/Sections/SectionStrategies.js";
import SectionCards from "views/PresentationPage/Sections/SectionCards.js";
import SectionContent from "views/PresentationPage/Sections/SectionContent.js";
import SectionSections from "views/PresentationPage/Sections/SectionSections.js";
import SectionExamples from "views/PresentationPage/Sections/SectionExamples.js";
import SectionFreeDemo from "views/PresentationPage/Sections/SectionFreeDemo.js";
import SectionOverview from "views/PresentationPage/Sections/SectionOverview.js";
import SectionPricing from "views/PresentationPage/Sections/SectionPricing.js";

import presentationStyle from "assets/jss/material-kit-pro-react/views/presentationStyle.js";

import { project } from "../../core/projectData";

const useStyles = makeStyles(presentationStyle);

export default function PresentationPage(props) {
  const compId = "presentationpage"

  const [redirectTo, setRedirectTo] = React.useState(undefined)

  React.useEffect(() => {
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
  });
  const classes = useStyles();
  return (
    <div>
      {redirectTo && <Redirect to={redirectTo} />}
      <Header
        brand={props.project.info.name}
        links={<HeaderLinks {...props} dropdownHoverColor="info" />}
        fixed
        color="transparent"
        changeColorOnScroll={{
          height: 280,
          color: "primary"
        }}
      />
      <Parallax
        image={project.img.bg.app_clean_reverse.src}
        className={classes.parallax}
      >
        <div className={classes.container}>
          <GridContainer>
            <GridItem>
              <div className={classes.brand}>
                <img
                  alt={project.img.branding.logo.original.alt}
                  width={project.img.branding.logo.original.width * 0.15}
                  height={project.img.branding.logo.original.heigth * 0.15}
                  src={project.img.branding.logo.original.src}
                />
                <h4 className={classes.title}>
                  {props.getString(props.prefs.langId, compId, "label_title")}
                </h4>
              </div>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
      <div className={classNames(classes.main, classes.mainRaised)}>
        <SectionDescription {...props} />
        <SectionStrategies {...props} />
        <SectionCards />
        <SectionContent />
        <SectionSections />
        <SectionExamples />
        <SectionFreeDemo />
        <SectionOverview />
      </div>
      <SectionPricing />
      <Footer
        theme="white"
        content={
          <div>
            {/* Brand */}
            <div className={classes.left}>
              <Link to="/" className={classes.footerBrand}>
                <img
                  alt={project.img.branding.logo.original.alt}
                  width={project.img.branding.logo.original.width * 0.06}
                  height={project.img.branding.logo.original.heigth * 0.06}
                  src={project.img.branding.logo.original.src}
                />
              </Link>
            </div>
            {/* Footer Menu */}
            <div className={classes.pullCenter}>
              <List className={classes.list}>
                <ListItem className={classes.inlineBlock}>
                  <Button
                    className={classes.block}
                    onClick={() => setRedirectTo("/about-us")}
                    link >
                    {props.getString(props.prefs.langId, "footerlinks", "label_aboutUs")}
                  </Button>
                </ListItem>
                <ListItem className={classes.inlineBlock}>
                  <Button
                    className={classes.block}
                    onClick={() => setRedirectTo("/contact-us")}
                    link>
                    {props.getString(props.prefs.langId, "footerlinks", "label_contactUs")}
                  </Button>
                </ListItem>
              </List>
            </div>
            {/* Social */}
            <div className={classes.rightLinks}>
              <ul>
                <li>
                  <Button
                    href={project.social.facebook.href}
                    target="_blank"
                    color="facebook"
                    justIcon
                    simple
                  >
                    <i className="fab fa-facebook" />
                  </Button>
                </li>
                <li>
                  <Button
                    href={project.social.instagram.href}
                    target="_blank"
                    color="instagram"
                    justIcon
                    simple
                  >
                    <i className="fab fa-instagram" />
                  </Button>
                </li>
                <li>
                  <Button
                    href={project.social.youtube.href}
                    target="_blank"
                    color="youtube"
                    justIcon
                    simple
                  >
                    <i className="fab fa-youtube" />
                  </Button>
                </li>
              </ul>
            </div>
          </div>
        }
      />
    </div>
  );
}
