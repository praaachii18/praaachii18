import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import cardData from "./content";
import CardContent from "./CardContent";

function Cards() {
    return (
        <Container fluid>
            <h2 className="text-center mb-4">Why Book with Rent And Ride</h2>
            <Row className="justify-content-center">
                {cardData.map((cardData) => (
                    <Col key={cardData.id} xs={12} sm={6} md={4} lg={4} className="mb-4">
                        <CardContent
                            title={cardData.title}
                            icon={cardData.icon}
                        />
                    </Col>
                ))}
            </Row>
        </Container>
    );
}

export default Cards;
