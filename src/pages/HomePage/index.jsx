import React from "react";
import Header from "../../components/Header/header";
import './index.scss';

function HomePage() {
    return (
      <div>
        <Header/>
        <div className="page-wrapper">
          <div className="title">Bonjour,</div>
        </div>
      </div>
    );
  }

export default HomePage;
