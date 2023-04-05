import React from "react";
import { FaPaw } from "react-icons/fa";
import imagemDog from "../imagens/fotoDog1.png";

function Hero() {
  return (
    <div className="page-hero">
      <div className="container-hero">
        <div className="lado-esquerdo">
          <div className="title-hero">
            <h3>Find Your Perfect Companion</h3>
            <h1>Companion</h1>
          </div>
          <div className="descripiton-hero">
            <p>Changing lives one wag at a time.</p>
          </div>
          <div className="container-buttons">
            <button className="find-your-match">
              <FaPaw />
              <p>find your match</p>
            </button>
            <button className="pay-a-visit">
              <FaPaw />
              <p>pay a visit</p>
            </button>
          </div>
        </div>
        <div className="lado-direito">
          <img src={imagemDog} alt="imagem-cachorro" />
        </div>
      </div>
    </div>
  );
}

export default Hero;
