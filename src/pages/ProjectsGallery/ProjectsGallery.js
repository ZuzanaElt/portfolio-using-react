import React, { useState } from 'react';
import ProjectsData from "../../ProjectsData.json";
import ProjectCardTemplate from "../../components/ProjectCardTemplate/ProjectCardTemplate";
import "./ProjectsGallery.css";


function ProjectsGallery() {
  const [projectsArray] = useState(ProjectsData)

  return(
    <div>
      <h1  className="pageName" > Projects</h1>
      <section className="cards">
      {projectsArray.map((props) => (
          <ProjectCardTemplate
          id={props.id}
          name={props.name}
          screenshot={props.screenshot}
          deploymentLink={props.deploymentLink}
          githubRepo={props.githubRepo}
          additionalInfo={props.additionalInfo}
      />
      ))     
      }
      </section>
    </div>
)
};
  export default ProjectsGallery;