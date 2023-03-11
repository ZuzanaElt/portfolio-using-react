import React, { useState } from 'react';


import ProjectsData from "../../ProjectsData.json";
//import animaleticsImage from "../../assets/images/animaletics.png"
import ProjectCardTemplate from "../../components/ProjectCardTemplate/ProjectCardTemplate";
import "./ProjectsGallery.css"




function ProjectsGallery() {
  const [projectsArray] = useState(ProjectsData)

  return(
    <div>
      <h1  className="pageName" > Projects</h1>
      <section className="cards">
      {projectsArray.map((projectEl) => (
          <ProjectCardTemplate
          id={projectEl.id}
          name={projectEl.name}
          screenshot={projectEl.screenshot}
          deploymentLink={projectEl.deploymentLink}
          githubRepo={projectEl.githubRepo}
      />
      ))     
      }
      </section>
    </div>
)
};
  export default ProjectsGallery;