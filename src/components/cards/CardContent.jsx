import React from 'react';
import Card from 'react-bootstrap/Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './CardContent.css';

function CardContent({ title, icon }) {
    return (
        <Card className="card-wrapper">
            <Card.Body>
                <div className="card-icon">
                    <FontAwesomeIcon icon={icon} />
                </div>
                <Card.Title>{title}</Card.Title>
            </Card.Body>
        </Card>
    );
}

export default CardContent;
