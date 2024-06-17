import './projects-page.scss';
import React, { useState } from "react";
import image1 from '../../assets/img/braden-jarvis-prSogOoFmkw-unsplash.jpg';
import image2 from '../../assets/img/dan-rogers-lMIvz5b1vRo-unsplash.jpg';
import image3 from '../../assets/img/maxime-gauthier-aBrM3LLqJX4-unsplash.jpg';
import image4 from '../../assets/img/michael-d-rnKqWvO80Y4-unsplash.jpg';

function ProjectPage() {
  const [projects, setProjects] = useState([
    { id: 1, name: 'Projet 1', imageUrl: image1, option: 'Branding' },
    { id: 2, name: 'Projet 2', imageUrl: image2, option: 'Web Developpement' },
    { id: 3, name: 'Projet 3', imageUrl: image3, option: 'Portrait' },
    { id: 4, name: 'Projet 4', imageUrl: image4, option: 'UX/UI Design' },
    { id: 5, name: 'Projet 5', imageUrl: image1, option: 'Branding' },
    { id: 6, name: 'Projet 6', imageUrl: image1, option: 'Game Design' },
    { id: 6, name: 'Projet 7', imageUrl: image1, option: 'Illlustration' },
    { id: 6, name: 'Projet 8', imageUrl: image1, option: 'UX/UI Design' },
  ]);

  const [currentImage, setCurrentImage] = useState("path_to_default_project_image.jpg");
  
  // État pour les champs de formulaire
  const [newProjectName, setNewProjectName] = useState("");
  const [newProjectImageUrl, setNewProjectImageUrl] = useState("");

  // Fonction pour gérer la soumission du formulaire
  const handleSubmit = (e) => {
    e.preventDefault();

    // Ajouter le nouveau projet à l'état
    setProjects(prevProjects => [...prevProjects, {
      id: Date.now(), // Utiliser le timestamp comme ID unique
      name: newProjectName,
      imageUrl: newProjectImageUrl
    }]);

    // Réinitialiser les champs de formulaire
    setNewProjectName("");
    setNewProjectImageUrl("");
  };

  return (
    <div className="container">
      <div className="photo-section">
        {currentImage !== "path_to_default_project_image.jpg" ? (
          <img src={currentImage} alt="" />
        ) : null}
      </div>
  
      <div className="list-section">
      <ul>
        <li className='li-title'>
          WORK
          <span className="project-count">{projects.length}</span>
        </li>
        <div className="projects-container">
        {projects.map(project => (
          <li 
              key={project.id} 
              onMouseOver={() => setCurrentImage(project.imageUrl)}
              onMouseOut={() => setCurrentImage("path_to_default_project_image.jpg")}
              onClick={() => setCurrentImage(project.imageUrl)}
          >
              <span className="arrow">→</span>
              <span className="project-name">{project.name}</span>
              <span className="project-option">{project.option}</span>
          </li>
        ))}
        </div>
      </ul>
    </div>
    </div>
  );
  
  }

export default ProjectPage;
