import React from "react";
import Button from 'react-bootstrap/Button';
import "./projects.css";

function Projects(props) {
  return (
    <div>
      <h1>Projects</h1>
      <div className="card">
        <div className="img-container">
          <img alt={props.name} src={props.image} />
        </div>
        <div className="card-content">
          <h2 className="card-title">Title</h2>
          <p className="card-text">text</p>
          <Button className="btn-card" variant="primary">Go somewhere</Button>
        </div>
      </div>
    </div>
  );
}

export default Projects;
