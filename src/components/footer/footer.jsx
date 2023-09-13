import React from 'react';
import './footer.scss';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          Contact me: fdev.raphael@gmail.com
        </div>
        <div className="footer-section section-work">
          Works
        </div>
        <div className="footer-section">
          <a href="https://github.com/votre_nom_utilisateur">Github</a>
          <a href="https://linkedin.com/in/votre_nom_utilisateur">LinkedIn</a>
        </div>
      </div>
      <div className="footer-city">
        ANNECY
      </div>
    </footer>
  );
}

export default Footer;
