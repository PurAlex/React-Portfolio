import React from "react";
import Button from 'react-bootstrap/Button';
import "./projects.css";


function Projects(props) {
  return (
    <div>
      <div className="card">
        <div className="img-container">
          <img alt={props.name} src={props.image} />
        </div>
        <div className="card-content">
          <h2 className="card-title">{props.name}</h2>
          <h2 className="card-text">text</h2>
          <a href={props.link}>
            <Button className="btn-card" variant="primary">Go to repo </Button>
          </a>
        </div>
      </div>
    </div >
  );
}

export default Projects;
