import React from "react";
import { Container } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import content from "../../content.json";
function About() {
  return (
    <Container id="about" className="my-5">
      <Row>
        <h2 className="text-center mb-4">Our Story</h2>
        <Col lg={12}>
          <div className="text-center">
            <p>{content.AboutUsContentPart1}</p>
            <p>{content.AboutUsContentPart2}</p>
            <p>{content.AboutUsContentPart3}</p>
            <h4 className="text-center  border-bottom border-warning">
              {content.AboutUsContentPart4}
            </h4>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default About;
