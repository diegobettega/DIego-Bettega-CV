import React, { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";
import Flag from "./Flag";
import NavbarData from "../data/NavbarData";

export default function Navbar() {
  const language = useContext(LanguageContext)[0];

  return (
    <nav className="navbar fixed-top navbar-expand-lg navbar-dark">
      <Flag />
      <div class="navbar-brand">Diego Bettega</div>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <a className="nav-link" href="#summary">
              {NavbarData[language][0]}
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#work-experience">
              {NavbarData[language][1]}
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#projects">
              {NavbarData[language][2]}
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#education">
              {NavbarData[language][3]}
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#courses">
              {NavbarData[language][4]}
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
