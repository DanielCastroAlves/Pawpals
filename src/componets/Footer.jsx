import React from "react";
import logo from "../imagens/logo.png";
import dogCoceira from "../imagens/dog-se-coçando.svg";

function Footer() {
  return (
    <div className="contact-section">
      <div className="contact-section-esquerda">
        <img src={logo} alt="Logo" />

        <img src={dogCoceira} alt="cachorro filhote" />
      </div>
      <div className="contact-section-direita">
        <h3>Never miss a tail-wagging moment – subscribe now!</h3>
        <div className="input-group">
          <input className="input-text-form" type="text" placeholder="Name" />
          <input className="input-text-form" type="text" placeholder="Email" />
        </div>
        <div>
          <button className="button-send">Send</button>
        </div>
        <div className="dados-input-contact">
          <h6>Some addres</h6>
          <h6>Some phone number</h6>
        </div>
      </div>
    </div>
  );
}

export default Footer;
