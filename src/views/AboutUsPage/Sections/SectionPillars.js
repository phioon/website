import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
import TouchApp from "@material-ui/icons/TouchApp";
import Code from "@material-ui/icons/Code";
import DoneAll from "@material-ui/icons/DoneAll";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import InfoArea from "components/InfoArea/InfoArea.js";

import pillarsStyle from "assets/jss/material-kit-pro-react/views/aboutUsSections/pillarsStyle.js";

const useStyles = makeStyles(pillarsStyle);

export default function SectionPillars(props) {
  const compId = "aboutuspillars"

  const classes = useStyles();
  return (
    <div className={classes.pillars}>
      <GridContainer>
        <GridItem
          md={8}
          sm={8}
          className={classNames(
            classes.mlAuto,
            classes.mrAuto,
            classes.textCenter
          )}
        >
          <h2 className={classes.title}>{props.getString(props.prefs.langId, compId, "label_title")}</h2>
        </GridItem>
      </GridContainer>
      <GridContainer>
        <GridItem md={4} sm={4}>
          <InfoArea
            title={props.getString(props.prefs.langId, compId, "label_infoarea1_title")}
            description={
              <span>
                <p>
                  {props.getString(props.prefs.langId, compId, "label_infoarea1_desc")}
                  {" "}
                </p>
              </span>
            }
            icon={Code}
            iconColor="success"
          />
        </GridItem>
        <GridItem md={4} sm={4}>
          <InfoArea
            title={props.getString(props.prefs.langId, compId, "label_infoarea2_title")}
            description={
              <span>
                <p>
                  {props.getString(props.prefs.langId, compId, "label_infoarea2_desc")}
                  {" "}
                </p>
              </span>
            }
            icon={DoneAll}
            iconColor="success"
          />
        </GridItem>
        <GridItem md={4} sm={4}>
          <InfoArea
            title={props.getString(props.prefs.langId, compId, "label_infoarea3_title")}
            description={
              <span>
                <p>
                  {props.getString(props.prefs.langId, compId, "label_infoarea3_desc")}
                  {" "}
                </p>
              </span>
            }
            icon={TouchApp}
            iconColor="success"
          />
        </GridItem>
      </GridContainer>
    </div>
  );
}
