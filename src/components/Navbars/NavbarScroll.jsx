
import React from "react";
import { Link } from "react-router-dom";

import { project, projApp } from "../../core/projectData";
import { getLangList } from "../../core/lang";

// reactstrap components
import {
  UncontrolledCollapse,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown
} from "reactstrap";

import PropTypes from "prop-types";

class NavbarScroll extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      compId: this.constructor.name.toLowerCase(),
      langId: props.prefs.langId,
      navbarColor: "navbar-transparent",
      collapseOpen: false,

      langList: [],
    };
  }

  static getDerivedStateFromProps(props, state) {
    if (props.prefs.langId !== state.langId)
      return { langId: props.prefs.langId }
    return null
  }

  componentDidMount() {
    window.addEventListener("scroll", this.changeNavbarColor);

    let langList = getLangList()
    this.setState({ langList })
  }
  componentWillUnmount() {
    window.removeEventListener("scroll", this.changeNavbarColor);
  }
  changeNavbarColor = () => {
    if (
      document.documentElement.scrollTop > 299 ||
      document.body.scrollTop > 299
    ) {
      this.setState({
        navbarColor: "bg-info"
      });
    } else if (
      document.documentElement.scrollTop < 300 ||
      document.body.scrollTop < 300
    ) {
      this.setState({
        navbarColor: "navbar-transparent"
      });
    }
  };

  updateColor() {
    if (window.innerWidth < 993 && this.state.collapseOpen) {
      this.setState({
        navbarColor: "bg-white"
      });
    } else {
      this.setState({
        navbarColor: "navbar-transparent"
      });
    }
  };

  // this function opens and closes the collapse on small devices
  // it also adds navbar-transparent class to the navbar when closed
  // ad bg-white when opened
  toggleCollapse() {
    let { collapseOpen } = this.state;

    let newState = { collapseOpen: !collapseOpen };

    if (collapseOpen)
      newState["navbarColor"] = "navbar-transparent";
    else
      newState["navbarColor"] = "navbar-transparent";

    this.setState(newState);
  };

  scrollPage = (e, id) => {
    e.preventDefault();

    console.log(`id: ${id}`)
    if (document.getElementById(id) !== null) {
      document.getElementById(id).scrollIntoView();
    }
  };

  languageItems(langList) {
    let { getString } = this.props

    return langList.map((langId, key) => {
      return (
        <DropdownItem key={key} onClick={() => this.setLangId(langId)}>
          {getString(langId, "languages", langId)}
        </DropdownItem>
      )
    });
  }
  setLangId(langId) {
    this.props.setLangId(langId)
    this.setCollapse(false)
  }

  setCollapse(value = false) {
    let newState = { collapseOpen: value };

    if (value)
      newState["navbarColor"] = "bg-white";
    else
      newState["navbarColor"] = "navbar-transparent";


    this.setState(newState);
  };

  // onClick={e => this.scrollPage(e, "headers")}
  render() {
    let { getString } = this.props;
    let { langId, compId, langList } = this.state;

    return (
      <>

        <Navbar className={"fixed-top " + this.state.navbarColor} expand="lg">
          <Container>
            <div className="navbar-translate">
              <NavbarBrand to="/index" tag={Link} id="tooltip6619950104">
                <img
                  alt={project.img.branding.logo.black.alt}
                  width={project.img.branding.logo.black.width * 0.06}
                  height={project.img.branding.logo.black.heigth * 0.06}
                  src={project.img.branding.logo.black.src}
                />
              </NavbarBrand>
              <button
                id="navigation"
                aria-controls="navigation-index"
                aria-expanded={false}
                aria-label="Toggle navigation"
                className="navbar-toggler"
                data-toggle="collapse"
                type="button"
                onClick={() => this.toggleCollapse()}
              >
                <span className="navbar-toggler-bar navbar-kebab" />
                <span className="navbar-toggler-bar navbar-kebab" />
                <span className="navbar-toggler-bar navbar-kebab" />
              </button>
            </div>
            <UncontrolledCollapse navbar toggler="#navigation">
              <Nav className="ml-auto" navbar>
                <NavItem>
                  <NavLink to="/index" tag={Link}>
                    {getString(langId, compId, "aboutus")}
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink to="/products" tag={Link}>
                    {getString(langId, compId, "products")}
                  </NavLink>
                </NavItem>
                <UncontrolledDropdown className="btn-rotate" nav>
                  <DropdownToggle
                    aria-haspopup={true}
                    caret
                    color="default"
                    data-toggle="dropdown"
                    id="dropdown_languages"
                    nav
                  >
                    <i className="tim-icons icon-world" />
                  </DropdownToggle>
                  <DropdownMenu aria-labelledby="dropdown_languages" right>
                    {this.languageItems(langList)}
                  </DropdownMenu>
                </UncontrolledDropdown>
                <NavItem>
                  <NavLink to={projApp} href={projApp}>
                    {getString(langId, compId, "login")}
                  </NavLink>
                </NavItem>
              </Nav>
            </UncontrolledCollapse>
          </Container>
        </Navbar>
      </>
    );
  }
}

export default NavbarScroll;


NavbarScroll.propTypes = {
  getString: PropTypes.func.isRequired,
  prefs: PropTypes.object.isRequired,

}