import React from "react";
import Header from "../../components/Header/header";
import ProjectPage from "../../components/projects-page/projects-page";
import './projects.scss';

function Projects() {
    return (
        <div>
        <Header/>
        <div className="projectsPage">
          <ProjectPage/>
          </div>
        <div className="noise"></div>
      </div>
      
    );
  }

export default Projects;
