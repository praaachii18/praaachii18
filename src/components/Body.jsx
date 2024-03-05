import React from "react";
import "./body.css";
import Cards from "./cards/Cards";
import Timeline from "./Timeline";
import Accordians from "./faqaccordian/Accordians";
import Prices from "./Prices/Prices";
import Location from "./location/Location";
import Contact from "./Contact/Contact";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import About from "./About/About";

function Body() {
  return (
    <React.Fragment>
      <Container fluid id="home" className="sub-container "></Container>
      <div className="container ">
        <Container className="welcome-container">
          <Row className="d-flex align-items-center justify-content-center">
            <Col sm={6}>
              <h2 className="title">Bikes on Rent in Jaipur</h2>
            </Col>
            <Col sm={6}>
              <p className="welcome">
                Welcome to Rent & Ride, your one-stop destination for all your
                bike rental needs in Jaipur. Located just 100m away from Jaipur
                Railway station and 800m away from Jaipur bus stand, we are
                conveniently situated to serve your bike commute needs in the
                Pinkcity. Whether you need a bike for sightseeing, exploring, or
                simply getting around town, Rent & Ride has you covered. Rent a
                bike from us today and experience the freedom of two wheels in
                Jaipur!
              </p>
            </Col>
          </Row>
          <Cards />
          <Timeline />
          <Prices />
          <Accordians />
          <Location />
          <Contact />
          <About />
        </Container>
      </div>
    </React.Fragment>
  );
}

export default Body;
