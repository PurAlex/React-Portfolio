import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavTabs from './components/NavTabs';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Projects from './pages/Projects';
import './assets/css/style.css';
import Footer from './components/footer';
import project from './data/projects.json';

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

