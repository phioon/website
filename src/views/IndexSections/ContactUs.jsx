
import React from "react";

import PropTypes from "prop-types";
import classnames from "classnames";

import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Label,
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col
} from "reactstrap";

class ContactUs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      compId: this.constructor.name.toLowerCase(),
      langId: props.prefs.langId,     

    };
  }

  static getDerivedStateFromProps(props, state) {
    if (props.prefs.langId !== state.langId)
      return { langId: props.prefs.langId }
    return null
  }

  onFirstNameChange(event) {
    this.setState({firstNameContact1Focus: event.target.value})
  }
  
  onLastNameChange(event) {
      this.setState({lastNameContact1Focus: event.target.value})
  }

  onEmailChange(event) {
    this.setState({emailContact1Focus: event.target.value})
  }
  
  onMessageChange(event) {
    this.setState({message: event.target.value})
  }
  
  handleSubmit(e) {
    e.preventDefault();

    fetch('http://localhost:3002/send',{
        method: "POST",
        body: JSON.stringify(this.state),
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
      }).then(
    	(response) => (response.json())
       ).then((response)=>{
      if (response.status === 'success'){
        alert("Message Sent."); 
        this.resetForm()
      }else if(response.status === 'fail'){
        alert("Message failed to send.")
      }
    })
  }

  resetForm(){
    
    this.setState({firstNameContact1Focus: '', lastNameContact1Focus: '', emailContact1Focus:'', message: ''})
 }

  render() {
    let { getString } = this.props
    let {langId, compId} = this.state

    return (
      <>
        <div  >        
          <div id="contactus">
            <Container>
              <Row>
                <Col md="5">
                  <h2 className="title">{getString(langId, compId, "getintouch")}</h2>
                  <h4 className="description">
                    {getString(langId, compId, "moreinformation")}                    
                  </h4>
                 
                  
                </Col>
                <Col className="ml-auto mr-auto" md="5">
                  <Card className="card-contact card-raised">
                    <Form id="contact-form-2" method="post" role="form" onSubmit={this.handleSubmit.bind(this)} method="POST">
                      <CardHeader className="text-center">
                        <CardTitle tag="h4">{getString(langId, compId, "contactus")}</CardTitle>
                      </CardHeader>
                      <CardBody>
                        <Row>
                          <Col md="6">
                            <label>{getString(langId, compId, "firstname")}</label>
                            <InputGroup
                              className={classnames({
                                "input-group-focus": this.state
                                  .firstNameContact1Focus
                              })}
                            >
                              <InputGroupAddon addonType="prepend">
                                <InputGroupText>
                                  <i className="tim-icons icon-single-02" />
                                </InputGroupText>
                              </InputGroupAddon>
                              <Input
                                aria-label={getString(langId, compId, "firstname")}
                                placeholder={getString(langId, compId, "firstname")}
                                type="text"
                                onFocus={e =>
                                  this.setState({
                                    firstNameContact1Focus: true
                                  })
                                }
                                onBlur={e =>
                                  this.setState({
                                    firstNameContact1Focus: false
                                  })
                                }
                                onChange={this.onFirstNameChange.bind(this)}
                              />
                            </InputGroup>
                          </Col>
                          <Col className="pl-2" md="6">
                            <FormGroup>
                              <label>{getString(langId, compId, "lastname")}</label>
                              <InputGroup
                                className={classnames({
                                  "input-group-focus": this.state
                                    .lastNameContact1Focus
                                })}
                              >
                                <InputGroupAddon addonType="prepend">
                                  <InputGroupText>
                                    <i className="tim-icons icon-caps-small" />
                                  </InputGroupText>
                                </InputGroupAddon>
                                <Input
                                  aria-label={getString(langId, compId, "lastname")}
                                  placeholder={getString(langId, compId, "lastname")}
                                  type="text"
                                  onFocus={e =>
                                    this.setState({
                                      lastNameContact1Focus: true
                                    })
                                  }
                                  onBlur={e =>
                                    this.setState({
                                      lastNameContact1Focus: false
                                    })
                                  }
                                  onChange={this.onLastNameChange.bind(this)}
                                />
                              </InputGroup>
                            </FormGroup>
                          </Col>
                        </Row>
                        <FormGroup>
                          <label>{getString(langId, compId, "email")}</label>
                          <InputGroup
                            className={classnames({
                              "input-group-focus": this.state.emailContact1Focus
                            })}
                          >
                            <InputGroupAddon addonType="prepend">
                              <InputGroupText>
                                <i className="tim-icons icon-email-85" />
                              </InputGroupText>
                            </InputGroupAddon>
                            <Input
                              placeholder={getString(langId, compId, "email")}
                              type="text"
                              onFocus={e =>
                                this.setState({ emailContact1Focus: true })
                              }
                              onBlur={e =>
                                this.setState({ emailContact1Focus: false })
                              }
                              onChange={this.onEmailChange.bind(this)}
                            />
                          </InputGroup>
                        </FormGroup>
                        <FormGroup>
                          <label>{getString(langId, compId, "yourmessage")}</label>
                          <Input
                            id="message-2"
                            name="message"
                            rows="6"
                            type="textarea"
                            value={this.state.message}
                            onChange={this.onMessageChange.bind(this)}
                          />
                        </FormGroup>
                        <Row>
                          <Col md="6">
                            <FormGroup check>
                              <Label check>
                                <Input type="checkbox" />
                                <span className="form-check-sign" />
                                {getString(langId, compId, "notrobot")}
                              </Label>
                            </FormGroup>
                          </Col>
                          <Col md="6">
                            <Button
                              className="btn-round pull-right"
                              color="primary"
                              type="submit"
                            >
                              {getString(langId, compId, "sendmessage")}
                            </Button>
                          </Col>
                        </Row>
                      </CardBody>
                    </Form>                    
                  </Card>
                </Col>
              </Row>
            </Container>
          </div>        
        </div>{" "}
      </>
    );
  }
}

export default ContactUs;


ContactUs.propTypes = {
  getString: PropTypes.func.isRequired,
  prefs: PropTypes.object.isRequired
}