import React from "react";
import { FaPaw } from "react-icons/fa";
import imagemDog2 from "../imagens/dog2.svg";

function About() {
  return (
    <div className="page-about">
      <div className="container-about">
        <div className="lado-esquerdo">
          <img src={imagemDog2} alt="imagem-cachorro" />
        </div>
        <div className="lado-direito">
          <div className="title-about">
            <h1>Welcome!</h1>
          </div>
          <div className="descripiton-about">
            <p>
              Our mission is to provide loving homes for dogs in need and to
              promote responsible pet ownership. We work with local shelters and
              rescue organizations to rescue dogs of all breeds and sizes. By
              adopting a dog from us, you're not only saving a life, but also
              gaining a loyal and loving companion.
              <br />
            </p>

            <p>
              Our adoption process is designed to ensure that each dog is
              matched with the right family. We carefully screen all applicants
              to ensure that they're prepared for the responsibilities of dog
              ownership. Our goal is to make the adoption process as smooth and
              stress-free as possible, so that you can focus on finding the
              perfect canine companion.
            </p>
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
      </div>
    </div>
  );
}

export default About;
