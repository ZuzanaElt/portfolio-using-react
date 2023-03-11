import React from 'react';
import { NavLink } from 'react-router-dom';

import ProjectsData from "../../ProjectsData.json";
import animaleticsImage from "../../assets/images/animaletics.png"
//import ProjectCard from "./ProjectCard";
import "./ProjectsGallery.css"


function ProjectsGallery() {
  return (
    <div>
      <h1  className="pageName" > Projects</h1>
    
      <div className="cards">
          <section className=" card">
              <NavLink
                to="project"
                end
                className={({ isActive }) =>
                    isActive ? 'nav-link active' : 'nav-link'
                }>
                <div className="img-container">
                  <div className=" img-image">
                      <React.Fragment>
                      <img alt={ProjectsData.name}  src={animaleticsImage} width= {"90%"} />
                      </React.Fragment>
                  </div>
                </div> 
                <p className="proj-title" >{ProjectsData[0].name} </p> 
              </NavLink>
              <div className="project-info">
              <p >Project ID:{ProjectsData[0].id}</p>
              <p >screenshot:{ProjectsData[0].screenshot}</p>
              <p >NN Deployment:{ProjectsData[0].deploymentLink}</p>
              <p >NN Github link:{ProjectsData[0].githubRepo}</p>
              </div>
          </section>
         
        
      </div>
    </div>
      
  );
}
  
  export default ProjectsGallery;