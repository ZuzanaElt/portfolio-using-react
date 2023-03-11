import React from 'react';
//import { NavLink } from 'react-router-dom';
import ProjectsData from "../ProjectsData.json";

function ProjectCard (){

    return(
        <div className="card">
       
        <div className="content">
        {/* <NavLink
            to="project"
            end
            className={({ isActive }) =>
                isActive ? 'nav-link active' : 'nav-link'
            }
            >
            INDIVIDUAL PROJECT  =ProjectCard.js @ /project
            
        </NavLink> */}

        <div className="img-container">
        <img
          alt="Animaletics screenshot"
          src="{../src/assets/animaletics.png}"
        />
      </div>

          <ul>
          <li>
              <strong>Project id:</strong> {ProjectsData[0].id}
            </li>
          <li>
              <strong>Project screenshot:</strong> {ProjectsData[0].screenshot}
            </li>
            <li>
              <strong>Project Name:</strong> {ProjectsData[0].name}
            </li>
            <li>
              <strong>Deployment:</strong> {ProjectsData[0].deploymentLink}
            </li>
            <li>
              <strong>Github-page:</strong> {ProjectsData[0].githubRepo}
            </li>
          </ul>
        </div>
        <button>Next project</button>
        <button>Back to Projects Ovewrview</button>
        
      </div>

    );
}

export default ProjectCard;

