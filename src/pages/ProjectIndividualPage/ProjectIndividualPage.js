import React, { useState }  from 'react';
import ProjectCardTemplate from '../../components/ProjectCardTemplate/ProjectCardTemplate';
import ProjectsData from "../../ProjectsData.json";
import "./ProjectIndividualPage.css"


function ProjectIndividualPage() {
  
        const [projectsArray] = useState(ProjectsData)

    return(
      <div>
        <h1  className="pageName" > Projects</h1>
        <section className="cards">
        {projectsArray.map((projectEl) => (
            (projectEl.id=id) => {
            <ProjectCardTemplate
            id={projectEl.id}
            name={projectEl.name}
            screenshot={projectEl.screenshot}
            deploymentLink={projectEl.deploymentLink}
            githubRepo={projectEl.githubRepo}
        />}
        ))     
        }
        </section>
      </div>
    )

}

export default ProjectIndividualPage;