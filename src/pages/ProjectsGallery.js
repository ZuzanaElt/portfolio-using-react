import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
//import ProjectsData from "../ProjectsData.json";
import ProjectCard from "./ProjectCard";


function ProjectsGallery() {
    return (
      
      <Router>
        <div>
        
          <Routes>
            
              <Route path="/projectsgallery/Project/:id" element={<ProjectCard />} />
          </Routes>
        
        
      </div>
    </Router>
    );
  }
  
  export default ProjectsGallery;