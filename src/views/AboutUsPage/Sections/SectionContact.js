import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";

import contactStyle from "assets/jss/material-kit-pro-react/views/aboutUsSections/contactStyle.js";

const useStyles = makeStyles(contactStyle);

export default function SectionContact(props) {
  const compId = "aboutuscontact"

  const classes = useStyles();
  return (
    <div className={classes.aboutUs}>
      <GridContainer>
        <GridItem
          md={8}
          sm={8}
          className={classNames(classes.mrAuto, classes.mlAuto)}
        >
          <h3 className={classNames(classes.title, classes.textCenter)}>
            {props.getString(props.prefs.langId, compId, "label_title")}
          </h3>
          <h4 className={classNames(classes.description, classes.textCenter)}>
            {props.getString(props.prefs.langId, compId, "label_desc_p1")}
            {" "}
            <a href={"mailto:" + props.getString(props.prefs.langId, compId, "label_mailto")}>
              {props.getString(props.prefs.langId, compId, "label_mailto")}
            </a>
            {" "}
            {props.getString(props.prefs.langId, compId, "label_desc_p2")}
          </h4>
        </GridItem>
      </GridContainer>
    </div>
  );
}
