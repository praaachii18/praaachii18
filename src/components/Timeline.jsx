import React from "react";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGlobe,
  faBicycle,
  faMapMarkerAlt,
  faStoreAlt,
  faClipboardCheck,
  faCheckCircle,
} from "@fortawesome/free-solid-svg-icons";

function RentalGuide() {
  return (
    <Container className="py-5">
      <h2 className="text-center mb-4">
        Book Your Dream Ride In Just Few Simple Steps
      </h2>
      <Row className="text-center">
        <Col xs={12} sm={6} lg={4}>
          <FontAwesomeIcon
            icon={faGlobe}
            size="3x"
            className="mb-3 text-warning"
          />
          <h5>Visit Our Website</h5>
          <p>Start your bike rental journey by visiting our website.</p>
        </Col>
        <Col xs={12} sm={6} lg={4}>
          <FontAwesomeIcon
            icon={faBicycle}
            size="3x"
            className="mb-3 text-warning"
          />
          <h5>Explore Our Selection</h5>
          <p>Discover a wide range of bikes available for rent.</p>
        </Col>
        <Col xs={12} sm={6} lg={4}>
          <FontAwesomeIcon
            icon={faMapMarkerAlt}
            size="3x"
            className="mb-3 text-warning"
          />
          <h5>Plan Your Visit</h5>
          <p>Note down our store location and operating hours.</p>
        </Col>
        <Col xs={12} sm={6} lg={4}>
          <FontAwesomeIcon
            icon={faStoreAlt}
            size="3x"
            className="mb-3 text-warning"
          />
          <h5>Visit Our Store</h5>
          <p>
            Head to our store at your convenience to proceed with the rental.
          </p>
        </Col>
        <Col xs={12} sm={6} lg={4}>
          <FontAwesomeIcon
            icon={faClipboardCheck}
            size="3x"
            className="mb-3 text-warning"
          />
          <h5>Select Your Bike</h5>
          <p>
            Choose the bike model that suits your preferences and requirements.
          </p>
        </Col>
        <Col xs={12} sm={6} lg={4}>
          <FontAwesomeIcon
            icon={faCheckCircle}
            size="3x"
            className="mb-3 text-warning"
          />
          <h5>Complete the Rental Process</h5>
          <p>Meet our staff at the store to finalize the rental agreement.</p>
        </Col>
        <Col xs={12}>
          <hr className="my-4" />
        </Col>
      </Row>
      <Row className="text-center">
        <Col xs={12} className="mb-3">
          <FontAwesomeIcon
            icon={faCheckCircle}
            size="3x"
            className="text-success"
          />
          <h5>Get Ready to Ride</h5>
          <p>Once the paperwork is done, you're all set to enjoy your ride!</p>
        </Col>
      </Row>
    </Container>
  );
}

export default RentalGuide;
