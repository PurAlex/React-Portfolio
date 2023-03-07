import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import "./contact.css";
import cv from '../../assets/CV(Nicky).pdf';

function Contact(git) {
  return (
    <div>
      <h1>Contact Page</h1>
      <p className='contact-p'>
        Get in Touch!
      </p>
      <div className='contact-information'>
        <a href='mailto:nicky-nico-1998@outlook.com'>Email</a>
        <br></br>
        <a href={cv} download="CV">Download CV</a>
      </div >
    </div>
  );
}

export default Contact;
