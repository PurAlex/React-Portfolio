import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavTabs from './components/NavTabs';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Projects from './pages/Projects';
import './assets/css/style.css';
import Footer from './components/footer';

function App() {
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

