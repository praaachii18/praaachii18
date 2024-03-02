import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'
import "./navbar.css"


function Nav() {
    return (
        <Navbar className="nav">
                    <img src="/assets/rental.png" height="100%" alt="" />
        </Navbar>
    )
}

export default Nav