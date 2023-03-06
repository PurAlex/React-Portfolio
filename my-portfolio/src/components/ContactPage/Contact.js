import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import "./contact.css";


function Contact(props) {
  return (
    <div>
      <h1>Contact Page</h1>
      <as className='card-contact'>
        <Card>
          <Card.Body>This is some text within a card body.</Card.Body>
        </Card>
      </as>
      <p>
        Get in Touch!
      </p>
      <Link to="learn" role="button" className="btn btn-link">
        GitHub
      </Link>
      <Link to="contact" role="button" className="btn btn-link">
        Linkedln
      </Link>
    </div >
  );
}

export default Contact;
