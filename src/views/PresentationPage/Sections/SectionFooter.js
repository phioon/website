import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";

import sectionFooterStyle from "assets/jss/material-kit-pro-react/views/presentationSections/sectionFooterStyle.js";

const useStyles = makeStyles(sectionFooterStyle);

export default function SectionFooter(props) {
  const compId = "presentationfooter"
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <div className={classes.container}>
        <GridContainer>
          <GridItem md={8} sm={10} className={classNames(classes.mlAuto, classes.mrAuto)}>
            <h2 className={classes.title}>
              {props.getString(props.prefs.langId, compId, "label_title")}
            </h2>
            <Button href={props.project.info.webapp_signUp} color={"white"} target="_blank" round>
              {props.getString(props.prefs.langId, compId, "label_signUp")}
            </Button>
            <br /><br />
            <h4 className={classes.description}>
              {props.getString(props.prefs.langId, compId, "label_share")}
            </h4>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
