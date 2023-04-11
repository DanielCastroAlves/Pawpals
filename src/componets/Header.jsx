import React from "react";
import logo from "../imagens/logo.png";
import { HiSearch } from "react-icons/hi";

function Header() {
  const buttonsNav = [
    {
      nome: "About Us",
      link: "/about",
    },
    {
      nome: "Available Dogs",
      link: "availableDogs",
    },
    {
      nome: "Adoption Process",
      link: "adoptionProcess",
    },
    {
      nome: "How To Help",
      link: "howToHelp",
    },
    {
      nome: "FAQ",
      link: "faq",
    },
    {
      nome: "Contact Us",
      link: "contactUs",
    },
  ];

  return (
    <header>
      <nav className="header">
        <a href="/">
          <img src={logo} alt="Logo" />
        </a>
        <ul className="nav-list">
          {buttonsNav.map((item) => (
            <li>
              <a href={item.link}>{item.nome}</a>
            </li>
          ))}
        </ul>
        <div className="search-auth">
          <HiSearch />
          <div className="log-in">
            <a href="log-in">Log In</a>
          </div>
          <div className="sign-up">
            <a href="sign-up">Sign Up</a>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
