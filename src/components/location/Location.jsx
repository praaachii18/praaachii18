import React from 'react';
import "./location.css";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Location() {
    return (
        <Container fluid className='location-container'>
            <Row>
                <Col sm='6'>
                    <div className="location-text">
                        <h1>Address:</h1>
                        <p>D-10, Kabir Marg, opposite Bani Park Hospital, Sen Colony, Bani Park, Jaipur, Rajasthan 302016</p>
                        <h1>Landmark:</h1>
                        <p>Rama Ayurveda Store</p>
                    </div>
                </Col>
                <Col sm='6'>
                    <div className="location-map">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3557.335695621341!2d75.78585871041479!3d26.924570276542674!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db3b75f09ae57%3A0x4bfb7b284998e840!2sRama%20Ayurveda!5e0!3m2!1sen!2sin!4v1709268226786!5m2!1sen!2sin" width="100%" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                </Col>
            </Row>
        </Container>
    );
}

export default Location;
