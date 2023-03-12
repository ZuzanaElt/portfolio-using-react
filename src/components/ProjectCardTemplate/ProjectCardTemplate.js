import React from 'react';
import { NavLink } from 'react-router-dom';
import ProjectsData from "../../ProjectsData.json";
//import animaleticsImage from "../../../src/assets/images/animaletics.png"
import "./ProjectCardTemplate.css"


//THIS IS FOR THE GALLERY
function ProjectCardTemplate (ProjectsData){

    return(
        <div> 
           <div className="cards" key={ProjectsData.id}>
               <section className=" card">
                   <NavLink
                     to={ProjectsData.deploymentLink}
                     //{`project/${ProjectsData.id}`}
                     
                     end
                    className={({ isActive }) =>
                        isActive ? 'nav-link active' : 'nav-link'
                    }>
                    <div className="img-container">
                      <div className=" img-image">
                          <React.Fragment>
                          <img alt={ProjectsData.name}  src={ProjectsData.screenshot} width= {"90%"} />
                          </React.Fragment>
                      </div>
                    </div> 
                    <p className="proj-title" >{ProjectsData.name} </p> 
                  </NavLink>
                  <div className="project-info">
                    <p>{ProjectsData.additionalInfo}</p>
                  <p >Project ID:{ProjectsData.id}</p> 
                   <p >screenshot:{ProjectsData.screenshot}</p> 
                   <p >NN Deployment:{ProjectsData.deploymentLink}</p> 
                   <p >NN Github link:{ProjectsData.githubRepo}</p>
               </div> 
                  </section>
               
        </div>
      </div>
    );
}

export default ProjectCardTemplate;

