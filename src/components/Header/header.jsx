import React from "react";
import './header.scss';
import { Link } from 'react-router-dom';


function Header() {
  return(
    <header>
      <span>Victor Besson</span>
      <span>Fullstack / Creative developper</span>
      <Link to="/projects" className="works">Works</Link>
    </header>
    );
}

export default Header;
