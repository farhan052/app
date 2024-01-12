import React from "react";
import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  CardHeader,
  Button,
  Label,
  Input,
  Form,
} from "reactstrap";
import { Link } from "react-router-dom";

//Import Countdown
import Countdown from "react-countdown";

const Section = () => {
  const renderer = ({ days, hours, minutes, seconds, completed }) => {
    if (completed) {
      // Render a completed state
      return <span>You are good to go!</span>;
    } else {
      return (
        <>
          <div className="counter-number ico-countdown">
            <div id="days" className="coming-box">
              {days}
              <span>Days</span>
            </div>
            <div id="hours" className="coming-box">
              {hours}
              <span>Hours</span>
            </div>
            <div id="mins" className="coming-box">
              {minutes}
              <span>Hours</span>
            </div>
            <div id="secs" className="coming-box">
              {seconds}
              <span>Seconds</span>
            </div>
            <div id="end" className="h1"></div>
          </div>
        </>
      );
    }
  };

  return (
    <React.Fragment>
      <section className="section hero-section bg-ico-hero" id="home">
        {/* <div className="bg-overlay bg-primary"></div> */}
        <Container>
          <Row className="align-items-center">
            <Col lg={5}>
              <div className="text-white-50">
                <h1 className="text-white fw-semibold mb-3 hero-title">"BOOST YOUR CAREER IN SAP"</h1>
                <p className="font-size-17">WITH NO. 1 SAP TRAINING PROVIDER IN INDIA</p>
                <p className="font-size-14">"BOOST YOUR CAREER IN SAP"
WITH NO. 1 SAP TRAINING PROVIDER IN INDIA
4.9   (6678 Ratings)

Our SAP Certification Training Classes will enable you to clear SAP certification exams. Master SAP certification skills in this online SAP cours</p>

                <div className="d-flex flex-wrap gap-2 mt-4">
                  <Link to="#" className="btn w-lg btn-success">Discover More</Link>
                  {/* <Link to="#" className="btn btn-light">How it work</Link> */}
                </div>
              </div>
            </Col>
            <Col lg={5} md={8} sm={10} className="ms-lg-auto">
              <Card className="overflow-hidden mb-0 mt-5 mt-lg-0">
                <CardHeader className="text-center">
                  <h5 className="mb-0">Check Your Course Fee</h5>
                </CardHeader>
                <CardBody>
                <Form className="">
                    <div className="mb-3">
                      {/* <Label htmlFor="formrow-firstname-Input">First Name</Label> */}
                      <Input
                        type="text"
                        className="form-control"
                        id="formrow-firstname-Input"
                        placeholder=" Your  Name"
                      />
                    </div>
                    <div className="mb-3">
                      {/* <Label htmlFor="formrow-firstname-Input">First Name</Label> */}
                      <Input
                        type="text"
                        className="form-control"
                        id="formrow-name-Input"
                        placeholder=" Your  Email"
                      />
                    </div>

                    <Row>
                      <Col md={3}>
                        <div className="mb-3">
                          {/* <Label htmlFor="formrow-email-Input">Email</Label> */}
                          <Input
                            type="select"
                            className="form-control"
                            id="formrow-email-Input"
                            placeholder=" Your "
                          />
                        </div>
                      </Col>
                      <Col md={9}>
                        <div className="mb-3">
                          {/* <Label htmlFor="formrow-password-Input">Password</Label> */}
                          <Input
                            type="password"
                            className="form-control"
                            autoComplete="off"
                            id="formrow-password-Input"
                            placeholder="Your Mobile No"
                          />
                        </div>
                      </Col>
                    </Row>

                  <Row className="justify-content-end">

                    {/* <div className="mb-3">
                      <div className="form-check">
                        <Input
                          type="checkbox"
                          className="form-check-Input"
                          id="formrow-customCheck"
                        />
                        <Label
                          className="form-check-Label"
                          htmlFor="formrow-customCheck"
                        >
                          Check me out
                        </Label>
                      </div>
                    </div> */}
                    <div className="px-auto mt-2">
                      <button type="submit" className="btn mx-auto px-auto w-lg col-sm-12 text-lg btn-primary w-md">
                        Calculate
                      </button>
                    </div>
                  </Row>
                  </Form>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>
    </React.Fragment>
  );
};

export default Section;
