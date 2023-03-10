import React from 'react';
//import ProjectsData from "../ProjectsData.json";

function ProjectCard (props){

   
    
    
    return(
        <div className="card">
        <div className="img-container">
          <img alt={props.name} src={props.image} />
        </div>
        <div className="content">
          <ul>
            <li>
              <strong>Name:</strong> {props.name}
            </li>
            <li>
              <strong>Deployment:</strong> {props.deployment-link}
            </li>
            <li>
              <strong>Github-page:</strong> {props.github-repo}
            </li>
          </ul>
        </div>
        
      </div>

    );
}

export default ProjectCard;