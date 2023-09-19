  import React from 'react';
  import './footer.scss';
  import annecyImage from '../../assets/img/Annecy-test.svg';

  function Footer() {
    return (
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-section">
            Contact me: Bdev.victor@gmail.com
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
          <img src={annecyImage} alt="" />
        </div>
      </footer>
    );
  }

  export default Footer;
