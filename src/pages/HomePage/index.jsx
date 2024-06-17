import React, { useEffect, useRef } from "react";
import Header from "../../components/Header/header";
import Footer from "../../components/footer/footer";
import './index.scss';

function HomePage() {
    const textRef = useRef(null);

    useEffect(() => {
      const text = textRef.current;
      if (text) {
          const characters = text.innerText.split("");
          const angle = 360 / characters.length;
          text.innerHTML = characters.map(
              (char, i) => `<span style="transform:rotate(${angle * i}deg)">${char}</span>`
          ).join("");
      }
  }, []);

    return (
      <div>
        <Header/>
        <div className="page-wrapper">
          <div className="title">Bonjour,</div>
          {/* Circle Animated Text Logo HTML */}
          <div className="circle">
              <div className="logo"></div>
              <div className="text">
                  <p ref={textRef}> Denis Bett - Creative UI/UX  Designer -  </p>
              </div>
          </div>
        </div>
        <div className="main-content">
          <Footer/>
        </div>
        <div className="noise"></div>
      </div>
    );
}

export default HomePage;
