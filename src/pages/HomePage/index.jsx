import React from "react";
import Header from "../../components/Header/header";
import Footer from "../../components/footer/footer";
import './index.scss';

function HomePage() {
    return (
      <div>
        <Header/>
        <div className="page-wrapper">
          <div className="title">Bonjour,</div>
        </div>
        <Footer/>
      </div>
    );
  }

export default HomePage;
