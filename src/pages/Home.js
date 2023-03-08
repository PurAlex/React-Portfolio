import React from "react";
import "../assets/css/home.css";

function Home() {
  return (
    <div className="header">
      <img className="home-img" alt="Me" src={require("../assets/images/me.jpg")}></img>
      <h1>Hello, I am Alexander</h1>
      <p>
        Front End Web Developer
      </p>
      <p className="list-text">I like to code and learn new stuff</p>
      <div className="container-lists">
        <h2 className="head-list-1">Some of my skills are:</h2>
        <ul className="list-one">
          <li>
            HTML
          </li>
          <li>
            CSS
          </li>
          <li>
            JavaScript
          </li>
          <li>
            jQuery
          </li>
          <li>
            Bootstrap
          </li>
        </ul>
      </div>
      <div className="container-lists">
        <h2 className="head-list-2">I'm currently learning and improving:</h2>
        <ul className="list-two">
          <li>React</li>
          <li>JavaScript</li>
          <li>Ajax</li>
          <li>Node.js</li>
        </ul>
      </div>
    </div>
  );
}

export default Home;
