  import React from 'react';
  import './footer.scss';
  import annecyImage from '../../assets/img/Annecy-test.svg';
  import { Link } from 'react-router-dom';


  function Footer() {
    return (
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-section">
            Contact me: Bdev.victor@gmail.com
          </div>
          <div className="section-work">
            <Link to="/projects" className="works">Works</Link>
          </div>
          <div className="footer-section">
            <a href="https://github.com/Neoznzoe" target="_blank" rel="noopener noreferrer">Github</a>
            <a href="https://www.linkedin.com/in/victor-besson/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          </div>
        </div>
        <div className="footer-city">
          <img src={annecyImage} alt="" />
        </div>
      </footer>
    );
  }

  export default Footer;
