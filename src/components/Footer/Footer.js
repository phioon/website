/* eslint-disable */
import React from "react";
import { Redirect, Link } from "react-router-dom";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
// core components
import Button from "components/CustomButtons/Button.js";

import styles from "assets/jss/material-kit-pro-react/components/footerStyle.js";

const useStyles = makeStyles(styles);

export default function Footer(props) {
  const [redirectTo, setRedirectTo] = React.useState(undefined)

  var { children, content, theme, big, className } = props;
  const classes = useStyles();
  const themeType =
    theme === "transparent" || theme == undefined ? false : true;
  const footerClasses = classNames({
    [classes.footer]: true,
    [classes[theme]]: themeType,
    [classes.big]: big || children !== undefined,
    [className]: className !== undefined
  });
  const aClasses = classNames({
    [classes.a]: true
  });

  if (!content)
    content = (
      <div>
        {redirectTo && <Redirect to={redirectTo} />}
        {/* Brand */}
        <div className={classes.left}>
          <Link to="/" className={classes.footerBrand}>
            <img
              alt={props.project.img.branding.logo.original.alt}
              width={props.project.img.branding.logo.original.width * 0.06}
              height={props.project.img.branding.logo.original.heigth * 0.06}
              src={props.project.img.branding.logo.original.src}
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
                href={props.project.social.facebook.href}
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
                href={props.project.social.instagram.href}
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
                href={props.project.social.linkedin.href}
                target="_blank"
                color="linkedin"
                justIcon
                simple
              >
                <i className="fab fa-linkedin" />
              </Button>
            </li>
            <li>
              <Button
                href={props.project.social.youtube.href}
                target="_blank"
                color="youtube"
                justIcon
                simple
              >
                <i className="fab fa-youtube" />
              </Button>
            </li>
            <li>
              <Button
                href={props.project.social.twitter.href}
                target="_blank"
                color="twitter"
                justIcon
                simple
              >
                <i className="fab fa-twitter" />
              </Button>
            </li>

          </ul>
        </div>
      </div>
    )

  return (
    <footer className={footerClasses}>
      {redirectTo && <Redirect to={redirectTo} />}
      <div className={classes.container}>
        {children !== undefined ? (
          <div>
            <div className={classes.content}>{children}</div>
            <hr />
          </div>
        ) : (
            " "
          )}
        {content}
        <div className={classes.clearFix} />
      </div>
    </footer>
  );
}

Footer.propTypes = {
  theme: PropTypes.oneOf(["dark", "white", "transparent"]),
  big: PropTypes.bool,
  content: PropTypes.node
};
