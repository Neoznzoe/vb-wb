import React from "react";
import './header.scss';
import { Link } from 'react-router-dom';


function Header() {
  return(
    <header>
      <Link to="/" className="accueil">Victor Besson</Link>
      <span>Fullstack / Creative developper</span>
      <Link to="/projects" className="works">Works</Link>
    </header>
    );
}

export default Header;
