import React  from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import ProjectsGallery from "./pages/ProjectsGallery/ProjectsGallery";
import Footer from "./components/Footer/Footer";
import Wrapper from "./components/Wrapper/Wrapper";
import Header from "./components/Header/Header";
import Resume from "./pages/Resume";


function App() {
  return (
    
    <Router>
      <div>
        <Header/>
        <Wrapper>
          <Routes>
            
              <Route path="/" element={<Home />} />
              <Route path="projectsgallery/" element={<ProjectsGallery/>} />
              <Route path="contact/*" element={<Contact />} />
              <Route path="resume/" element = {<Resume/>} />
          </Routes>
        </Wrapper>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;