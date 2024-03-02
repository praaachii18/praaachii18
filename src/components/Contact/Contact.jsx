import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhoneVolume } from "@fortawesome/free-solid-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import Nav from "react-bootstrap/Nav";
import "./contact.css"
function Contact() {
    const number = 9983975077;
    const link = "https://www.instagram.com/rent_and_ride_services?igsh=OW50Y3VoZXVlZjJ1";
    return (
        <div className="contact-container">
            <div className="num">
                <FontAwesomeIcon icon={faPhoneVolume} />
                {number}
            </div>
            <div className="insta">
                <FontAwesomeIcon icon={faInstagram} />
                <Nav.Item>
                    <Nav.Link
                        href={link}
                        className="insta-link"
                    >
                        Instagram
                    </Nav.Link>
                </Nav.Item>
            </div>
        </div>
    );
}

export default Contact;
