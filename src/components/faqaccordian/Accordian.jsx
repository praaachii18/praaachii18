import React from 'react'
import Accordion from 'react-bootstrap/Accordion';
import "./accordian.css";
function Accordian(props) {
    return (
        <Accordion >
            <Accordion.Item eventKey="0" className='accordian-item'>
                <Accordion.Header className="accordian-header">{props.question}</Accordion.Header>
                <Accordion.Body className="accordian-body">
                    {props.answer}
                </Accordion.Body>
            </Accordion.Item>
        </Accordion >
    )
}

export default Accordian