import React from "react";
import ContactInput from "../componets/ContactInput";
import mapa from "../imagens/mapa.svg";

export default function Contact() {
  return (
    <div className="container-contact">
      <div className="contact-page-left">
        <div className="container-title">
          <h3>Pay us a visit</h3>
          <h5>Schedule a visit and come meet our pals</h5>
        </div>
        <ContactInput />
      </div>

      <div className="contact-page-right">
        <img src={mapa} alt="" />
        <div className="dados">
          <h6>Some addres</h6>
          <h6>Some phone number</h6>
        </div>
        <div className="container-redes-sociais"></div>
      </div>
    </div>
  );
}
