import React from 'react';
import { NavLink } from 'react-router-dom';


//THIS IS FOR THE GALLERY
function ProjectCardTemplate (ProjectsData){

    return(
        <div> 
           <div className="cards" key={ProjectsData.id}>
               <section className=" card">
              
                <p className="proj-title" >{ProjectsData.name} </p>
                <div className="img-container">
                    <div className=" img-image">
                        <React.Fragment>
                        <img alt={ProjectsData.name}  src={ProjectsData.screenshot} width= {"90%"} />
                        </React.Fragment>
                    </div>
                </div> 
                     
                <div className="buttons ">
                  <NavLink
                     to={ProjectsData.deploymentLink}
                     //{`project/${ProjectsData.id}`}
                     end
                     className={({ isActive }) =>
                        isActive ? 'nav-link active' : 'nav-link'
                    }>
                        <button>Deployment </button>
                  </NavLink>

                  <NavLink
                     to={ProjectsData.githubRepo}
                     //{`project/${ProjectsData.id}`}
                     end
                     className={({ isActive }) =>
                        isActive ? 'nav-link active' : 'nav-link'
                      }>
                       <button>GitHub</button>
                    </NavLink>
                </div>
                  
                  <div className="project-info">
                    <p>{ProjectsData.additionalInfo}</p>
                 
                  </div> 
                  <div className="thick-line">
                  <p align="bottom" ></p>
                  </div>
              </section>
               
        </div>
      </div>
    );
}

export default ProjectCardTemplate;

