import React from 'react';
import { NavLink } from 'react-router-dom';
import ProjectsData from "../../ProjectsData.json";
import animaleticsImage from "../../../src/assets/images/animaletics.png"
import "./ProjectCardTemplate.css"

function ProjectCardTemplate (props){

    return(
        <div> 
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
                    <p className="proj-title" >{props.name} </p> 
                  </NavLink>
                  <div className="project-info">
                  <p >Project ID:{props.id}</p>
                  <p >screenshot:{props.screenshot}</p>
                  <p >NN Deployment:{props.deploymentLink}</p>
                  <p >NN Github link:{props.githubRepo}</p>
               </div> 
                  </section>


                
        </div>
      </div>
    );
}

export default ProjectCardTemplate;

