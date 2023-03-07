import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import "./contact.css";
import cv from '../../assets/CV(Nicky).pdf';

function Contact() {
  return (
    <div>
      <h1>Contact Page</h1>
      <container className="contact-container">
        <p className='contact-p'>
          Get in Touch!
        </p>
        <form
          action="https://getform.io/f/04feb2e1-24e2-4e73-98b3-837225c11041"
          method="POST"
        >
          <div className="row ">
            <div className="col">
              <input
                type="text"
                className="form-control"
                name="first_name"
                placeholder="First name"
              />
            </div>
            <div className="col">
              <input
                type="text"
                className="form-control"
                name="last_name"
                placeholder="Last name"
              />
            </div>
          </div>
          <div className="row my-3">
            <div className="col">
              <input
                type="email"
                className="form-control"
                name="email"
                placeholder="Email"
              />
            </div>
            <div className="col">
              <input
                type="text"
                className="form-control"
                name="subject"
                placeholder="Subject"
              />
            </div>
          </div>
          <div className="row my-3">
            <div className="col">
              <textarea
                className="form-control"
                name="message"
                placeholder="Message"
                rows="6"
              ></textarea>
            </div>
          </div>
          <div className="row">
            <button type="submit" className="btn btn-custom btn-primary">
              Send
            </button>
          </div>
        </form>
        <div className='contact-information'>
          <a href='mailto:nicky-nico-1998@outlook.com'>Email</a>
          <br></br>
          <a href={cv} download="CV">Download CV</a>
        </div >
      </container>
    </div>
  );
}

export default Contact;
