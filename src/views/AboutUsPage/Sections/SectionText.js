import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Quote from "components/Typography/Quote.js";
// core components

import sectionTextStyle from "assets/jss/material-kit-pro-react/views/aboutUsSections/sectionTextStyle.js";

const useStyles = makeStyles(sectionTextStyle);

export default function SectionText(props) {
  const compId = "aboutustext"

  const classes = useStyles();
  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem xs={12} sm={8} md={8}>
          <h3 className={classes.title}>
            {props.getString(props.prefs.langId, compId, "label_title")}
          </h3>

          <p>{props.getString(props.prefs.langId, compId, "label_text_p1")}</p>
          <p>{props.getString(props.prefs.langId, compId, "label_text_p2")}</p>
          <p>{props.getString(props.prefs.langId, compId, "label_text_p3")}</p>

          <br />
          <Quote
            textClassName={classes.quoteText}
            text={"“" + props.getString(props.prefs.langId, compId, "label_quote_text") + "”"}
            author={"Fernando Couto, " + props.getString(props.prefs.langId, compId, "label_quote_signature") + "."}
          />
        </GridItem>
        <GridItem xs={12} sm={8} md={8}>
          <br />
          <p>{props.getString(props.prefs.langId, compId, "label_text_p4")}</p>
          <p>{props.getString(props.prefs.langId, compId, "label_text_p5")}</p>
        </GridItem>
      </GridContainer>
    </div>
  );
}
