import React from "react";
import profile from "../images/profile_pic.png";

function Navbar() {
  return (
    <div class="container-fluid">
      <div class="row">
      <nav class="navbar fixed-top navbar-expand-lg navbar-dark">
        <img class="navbar-symbol" src={profile} alt="Profile Picture" />
        <a class="navbar-brand" href="">Diego Bettega</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item">
              <a class="nav-link" href="#title">Summary</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#experience">Work Experience</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#projects">Projects</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#education">Education</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#courses">Courses</a>
            </li>
          </ul>
        </div>
      </nav>
      </div>
    </div>
  );
}

export default Navbar;
