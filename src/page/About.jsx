import React from "react";
/* import { FaPaw } from "react-icons/fa"; */
import dogCaramelo from "../imagens/dog-caramelo.svg";
import dogOlhandoCima from "../imagens/dog-3.svg";
import Contact from "../page/Contact";
import Header from "../componets/Header";
import Footer from "../componets/Footer";

function About() {
  return (
    <>
      <Header />
      <div className="page-about-v">
        <div className="container-about-v">
          <div className="esquerdo">
            <img src={dogCaramelo} alt="imagem-cachorro" />
          </div>
          <div className="direito">
            <div className="title-about-v">
              <h1>Welcome!</h1>
            </div>
            <div className="descripiton-about-v">
              <p>
                Welcome to our dog adoption website! We're a group of passionate
                dog lovers who are dedicated to helping homeless dogs find their
                forever homes. Our team includes experienced animal welfare
                professionals, dedicated volunteers, and of course, our furry
                companions who inspire us every day.
                <br />
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="about-segunda-parte">
        <p>
          We believe that every dog deserves a loving home, and we work
          tirelessly to ensure that our adoptable dogs are healthy, happy, and
          ready to be your loyal companion. Our adoption process is designed to
          match you with the perfect dog for your lifestyle, and we're committed
          to providing ongoing support and resources to help you and your new
          furry friend thrive. As a non-profit organization, we rely on the
          generosity of our donors, sponsors, and volunteers to keep our mission
          going strong. Every donation and volunteer hour makes a difference in
          the lives of our furry friends, and we're grateful for the support of
          our community. Thank you for considering adoption and for visiting our
          website. We hope to be a resource for you and your furry family for
          years to come!
        </p>
        
          <img src={dogOlhandoCima} alt="imagem-cachorro" />
        
      </div>
      <Contact Contact />
      <Footer />
    </>
  );
}

export default About;
