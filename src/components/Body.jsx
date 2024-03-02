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

function Body() {
    return (
        <React.Fragment>
            <Container fluid className="sub-container "></Container>

            <div className="container ">
                <Container className="welcome-container">
                    <Row className="d-flex align-items-center justify-content-center">
                        <Col sm={6}>
                            <h2 className="title">Bikes on Rent in Jaipur</h2>
                        </Col>
                        <Col sm={6}>
                            <p className="welcome">Welcome to Rent & Ride, your one-stop destination for all your bike rental needs in Jaipur. Located just 100m away from Jaipur Railway station and 800m away from Jaipur bus stand, we are conveniently situated to serve your commute needs in the Pinkcity</p>

                        </Col>
                        <Col col-lg-12 col-md-6 col-sm-2>
                            <Cards />
                        </Col>
                    </Row>
                </Container>
                <Container className='timeline-container my-5'>
                    <Row>
                        <Col>
                            <Timeline />
                        </Col>
                    </Row>
                </Container>
                <Container className='prices-container my-5'>
                    <Row>
                        <Col>
                            <Prices />
                        </Col>
                    </Row>
                </Container>
                <Container className='accordians-container my-5'>
                    <Row>
                        <Col>
                            <Accordians />
                        </Col>
                    </Row>
                </Container>
                <Container className='location-container my-5'>
                    <Row>
                        <Col>
                            <Location />
                        </Col>
                    </Row>
                </Container>
                <Container className='contact-container my-5'>
                    <Row className="d-flex align-items-center justify-content-center">
                        <Col>
                            <Contact />
                        </Col>
                    </Row>
                </Container>
            </div>
        </React.Fragment>
    );
}

export default Body;
