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
        {/* Wrap Route elements in a Routes component */}
        <Routes>
          {/* Define routes using the Route component to render different page components at different paths */}
          {/* Define a default route that will render the Home component */}
          <Route path="/" element={<Home />} />
          <Route path="projects" element={<Projects />} />
          {/* Define a route that will have descendant routes */}
          <Route path="contact/*" element={<Contact />} />


        </Routes>



      </div>
      <Wrapper>
        <Title>My Projects</Title>
        {
          projects.map(f => <Projects key={f.name} name={f.name}
            image={f.image}
            link={f.link}
          />)
        }
      </Wrapper >
      <Footer />
    </Router >

  );

}

export default App;

