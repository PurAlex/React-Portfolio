import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import "../assets/css/contact.css";
import cv from '../data/CV(Nicky).pdf';

function Contact() {
  return (
    <div>
      <h1 className='contact-title'>Contact</h1>
      <p>If I catch your attention don't doubt of contacting me!</p>
      <container className="contact-container">
        <form
          action="https://getform.io/f/04feb2e1-24e2-4e73-98b3-837225c11041"
          method="POST"
        >
          <p className='contact-p'>
            Get in Touch!
          </p>
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
        <h5 className='contact-head'>More ways of contacting me...</h5>
        <div className='contact-information'>
          <a className='email' href='mailto:nicky-nico-1998@outlook.com'>Email</a>
          <a className='pdf' href={cv} download="CV">Download CV</a>
        </div >
      </container>
    </div>
  );
}

export default Contact;
