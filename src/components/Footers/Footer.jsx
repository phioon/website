import React from "react";
import { Link } from "react-router-dom";

// reactstrap components
import {
  Button,
  NavbarBrand,
  Container,
  Row,
  Col,
  UncontrolledTooltip
} from "reactstrap";

import { project } from "../../core/projectData";

class Footer extends React.Component {

  scrollPage = (e, id) => {
    e.preventDefault();
    if (document.getElementById(id) !== null) {
      document.getElementById(id).scrollIntoView();
    }
  };

  render() {
    return (
      <>
        <footer className="footer">
          <Container>
            <Row>
              <Col md="3">
              <h1  className="title"> 
                <NavbarBrand to="/index" onClick={e => this.scrollPage(e, "indexHeader")} tag={Link} id="tooltip6619950104">
                  <img
                    alt={project.img.branding.logo.white.alt}
                    width={project.img.branding.logo.white.width * 0.06}
                    height={project.img.branding.logo.white.heigth * 0.06}
                    src={project.img.branding.logo.white.src}
                  />
                  
                </NavbarBrand>
              </h1>
              </Col>         
              <Col md="3" xs="6">
              </Col>
              <Col md="3" xs="6">
              <h3 className="title">Contact us:</h3>
              <div className="btn-wrapper profile text-left">
                <h6 className="title">naosei@phioon.com</h6>
                
              </div>
              </Col>
              <Col md="3">
                <h3 className="title">Follow us:</h3>
                <div className="btn-wrapper profile text-left">
                  <Button
                    className="btn-icon btn-neutral btn-round btn-simple ml-1"
                    color="default"
                    href={project.social.instagram.href}
                    id="tooltip39661217"
                    target="_blank"
                  >
                    <i className="fab fa-instagram" />
                  </Button>
                  <UncontrolledTooltip delay={0} target="tooltip39661217">
                    Follow us
                  </UncontrolledTooltip>
                  <Button
                    className="btn-icon btn-neutral btn-round btn-simple ml-1"
                    color="default"
                    href={project.social.facebook.href}
                    id="tooltip206037619"
                    target="_blank"
                  >
                    <i className="fab fa-facebook-square" />
                  </Button>
                  <UncontrolledTooltip delay={0} target="tooltip206037619">
                    Like us
                  </UncontrolledTooltip>
                  <Button
                    className="btn-icon btn-neutral btn-round btn-simple"
                    color="default"
                    href={project.social.twitter.href}
                    id="tooltip39661217"
                    target="_blank"
                  >
                    <i className="fab fa-twitter" />
                  </Button>
                  <UncontrolledTooltip delay={0} target="tooltip39661217">
                    Follow us
                  </UncontrolledTooltip>
                </div>
              </Col>
            </Row>
          </Container>
        </footer>
      </>
    );
  }
}

export default Footer;
