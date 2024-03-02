import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRupeeSign } from '@fortawesome/free-solid-svg-icons';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const PriceCard = ({ title, dailyPrice, weeklyPrice, link }) => {
    return (
        <Container fluid className="my-4">
            <Row className="justify-content-center">
                <Col xs={12} sm={6} lg={4}>
                    <Card className="h-100   border-0 border-top border-bottom border-warning rounded">
                        <Card.Img variant="top" src={link} className="card-img-top" />
                        <Card.Body>
                            <Card.Title className="text-center">{title}</Card.Title>
                            <Card.Text className="text-center">
                                <p><strong>Daily Price:</strong> <FontAwesomeIcon icon={faRupeeSign} /> {dailyPrice}</p>
                                <p><strong>Weekly Price:</strong> <FontAwesomeIcon icon={faRupeeSign} /> {weeklyPrice}</p>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default PriceCard;
