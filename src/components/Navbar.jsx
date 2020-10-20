import React, { useContext } from "react";
import Flag from "./Flag";
import { LanguageContext } from "../context/LanguageContext";

function Navbar() {

  const language = useContext(LanguageContext)[0];

  var toshow = ""

  if (language==="UK") {
    toshow = "Summary"
  } else {
    toshow = "Sommario"
  }

  return (
    <nav class="navbar fixed-top navbar-expand-lg navbar-dark">
    <Flag />
      <div class="navbar-brand">Diego Bettega</div>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item">
            <a class="nav-link" href="#summary">
              {toshow}
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#work-experience">
              Work Experience
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#projects">
              Projects
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#education">
              Education
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#courses">
              Courses
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
