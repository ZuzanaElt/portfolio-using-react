import React  from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Contact from "./components/Contact";
import Home from "./pages/Home";

import ProjectsGallery from "./pages/ProjectsGallery/ProjectsGallery";
//import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Wrapper from "./components/Wrapper/Wrapper";
import Header from "./components/Header/Header";
import ProjectCard from "./pages/ProjectCard";
//import projects from "./projects.json";

function App() {
  return (
    
    <Router>
      <div>
        <Header/>
        <Wrapper>
          <Routes>
            
              <Route path="/" element={<Home />} />
              <Route path="projectsgallery/" element={<ProjectsGallery/>} />
                <Route path="projectsgallery/project/" element={<ProjectCard/>} />
              <Route path="contact/*" element={<Contact />} />
            
          </Routes>
        </Wrapper>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;