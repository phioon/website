/* eslint-disable */
import React from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// react components for routing our app without refresh
import { Link } from "react-router-dom";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
// @material-ui/icons components
import Language from "@material-ui/icons/Language";
// core components
import Button from "components/CustomButtons/Button.js";
import CustomDropdown from "components/CustomDropdown/CustomDropdown.js";

import { localeList } from "../../core/locales";

import styles from "assets/jss/material-kit-pro-react/components/headerLinksStyle.js";

const useStyles = makeStyles(styles);

export default function HeaderLinks(props) {
  const compId = "headerlinks"
  const { dropdownHoverColor } = props;

  const easeInOutQuad = (t, b, c, d) => {
    t /= d / 2;
    if (t < 1) return (c / 2) * t * t + b;
    t--;
    return (-c / 2) * (t * (t - 2) - 1) + b;
  };
  const smoothScroll = (e, target) => {
    if (window.location.pathname === "/sections") {
      var isMobile = navigator.userAgent.match(
        /(iPad)|(iPhone)|(iPod)|(android)|(webOS)/i
      );
      if (isMobile) {
        // if we are on mobile device the scroll into view will be managed by the browser
      } else {
        e.preventDefault();
        var targetScroll = document.getElementById(target);
        scrollGo(document.documentElement, targetScroll.offsetTop, 1250);
      }
    }
  };
  const scrollGo = (element, to, duration) => {
    var start = element.scrollTop,
      change = to - start,
      currentTime = 0,
      increment = 20;

    var animateScroll = function () {
      currentTime += increment;
      var val = easeInOutQuad(currentTime, start, change, duration);
      element.scrollTop = val;
      if (currentTime < duration) {
        setTimeout(animateScroll, increment);
      }
    };
    animateScroll();
  };
  var onClickSections = {};

  const localeOptions = () => {
    let locales = localeList()
    return locales.map((langId, key) => {
      return (
        <a
          key={key}
          className={classes.dropdownLink}
          onClick={() => props.setLangId(langId)}
        >
          {props.getString(props.prefs.langId, "languages", langId)}
        </a>
      )
    });
  }

  const classes = useStyles();

  return (
    <List className={classes.list + " " + classes.mlAuto}>
      <ListItem className={classes.listItem}>
        <Link to="/" className={classes.navLink}>
          {props.getString(props.prefs.langId, compId, "label_home")}
        </Link>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Link to="/products/wallets" className={classes.navLink}>
          {props.getString(props.prefs.langId, compId, "label_wallets")}
        </Link>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Link to="/products/strategies" className={classes.navLink}>
          {props.getString(props.prefs.langId, compId, "label_strategies")}
        </Link>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Link to="/products/phitrader" className={classes.navLink}>
          {props.getString(props.prefs.langId, compId, "label_phiTrader")}
        </Link>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Link to="/pricing" className={classes.navLink}>
          {props.getString(props.prefs.langId, compId, "label_pricing")}
        </Link>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Link to="/about-us" className={classes.navLink}>
          {props.getString(props.prefs.langId, compId, "label_aboutUs")}
        </Link>
      </ListItem>
      <ListItem className={classes.listItem}>
        <CustomDropdown
          noLiPadding
          navDropdown
          hoverColor={dropdownHoverColor}
          buttonProps={{
            className: classes.navLink,
            color: "transparent"
          }}
          buttonIcon={Language}
          dropdownList={localeOptions()}
        />
      </ListItem>
      <ListItem className={classes.listItem}>
        <Button
          href={props.project.info.webapp} target="_blank"
          color={"success"}
          className={classes.navButton}
          round
        >
          {props.getString(props.prefs.langId, compId, "label_goToApp")}
        </Button>
      </ListItem>
    </List >
  );
}

HeaderLinks.defaultProps = {
  hoverColor: "primary"
};

HeaderLinks.propTypes = {
  dropdownHoverColor: PropTypes.oneOf([
    "dark",
    "primary",
    "info",
    "success",
    "warning",
    "danger",
    "rose"
  ])
};
