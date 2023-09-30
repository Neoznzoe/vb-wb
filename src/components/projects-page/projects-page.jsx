import './projects-page.scss';
import React, { useState } from "react";

function ProjectPage() {
  const [projects, setProjects] = useState([
    { id: 1, name: 'Projet 1', imageUrl: '../../assets/img/braden-jarvis-prSogOoFmkw-unsplash.jpg' },
    { id: 2, name: 'Projet 2', imageUrl: '../../../assets/img/braden-jarvis-prSogOoFmkw-unsplash.jpg' },
    { id: 3, name: 'Projet 3', imageUrl: '../../../assets/img/braden-jarvis-prSogOoFmkw-unsplash.jpg' },
    { id: 4, name: 'Projet 4', imageUrl: '../../../assets/img/braden-jarvis-prSogOoFmkw-unsplash.jpg' },
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
        <img src={currentImage} alt="Current Project" />
      </div>

      <div className="list-section">
        <ul>
          {projects.map(project => (
            <li 
              key={project.id} 
              onClick={() => setCurrentImage(project.imageUrl)}
            >
              {project.name}
            </li>
          ))}
        </ul>
        </div>
      </div>
    );
  }

export default ProjectPage;
