import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavTabs from './components/NavTab/NavTabs';
import Home from './components/HomePage/Home';
import Contact from './components/ContactPage/Contact';
import Projects from './components/ProjectsCard/Projects';
import "./components/css/style.css";
import Footer from './components/Footer/footer';
import project from './projects.json';
import Wrapper from './components/Wrapper';
import Title from './components/Title';

function App() {

  const [projects, setProjects] = useState(project);


  return (

    < Router >
      <div>
        <NavTabs />
        <Routes>
          <Route index element={<Home />} />
          <Route path="projects" element={<Projects />} />
          <Route path="contact" element={<Contact />} />
        </Routes>
      </div>
      <Footer />
    </Router >

  );

}

export default App;

