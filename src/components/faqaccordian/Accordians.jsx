import React from 'react'
import faqs from './faq';
import Accordian from './Accordian';
import "./accordians.css";
function Accordians() {
  const number = 9983975077;
  return (

    <><div className="accordian-heading">
      <h1>Have Questions? We got you.</h1>
      <p>Contact us on +91-{number} Call in case of any other query.</p>
    </div>
      <div className="accordian-container my-3">
        {faqs.map((faqs) => (
          <Accordian
            key={faqs.id}
            question={faqs.question}
            answer={faqs.answer}
          />))}
      </div>
    </>

  )
}

export default Accordians