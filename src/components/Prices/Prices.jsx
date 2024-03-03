import React from "react";
import PriceCard from "./PriceCard";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Prices() {
  return (
    <div className="price-container">
      <h2 className="text-center mb-4">PORTFOLIO</h2>
      <Row className="row-cols-1 row-cols-sm-1 row-cols-md-1 row-cols-lg-1 g-4 ">
        <Col>
          <PriceCard
            title="Activa"
            dailyPrice={500}
            weeklyPrice={3500}
            weeklyOfferPrice={3080}
            link="/assets/activa.webp"
          />
        </Col>
        <Col>
          <PriceCard
            title="Bike"
            dailyPrice={700}
            weeklyPrice={4900}
            weeklyOfferPrice={4312}
            link="/assets/bike.webp"
          />
        </Col>
      </Row>
    </div>
  );
}

export default Prices;
