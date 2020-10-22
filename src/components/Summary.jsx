import React, { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";
import SummaryData from "../data/SummaryData";
import Info from "./Info";
import Presentation from "./Presentation";

export default function Summary() {
  const language = useContext(LanguageContext)[0];

  return (
    <div className="summary container-fluid">
      <div className="row">
      <Presentation />
        <div className="row col-md-6">

          <div className="row col-md-12">
            <div className="col-md-1" style={{ backgroundColor: "green" }}>
              <div className="profile-icon">
                <i className="fa fa-phone profile-icon"></i>
              </div>
            </div>
            <div
              className="col-md-8 info-text"
              style={{ backgroundColor: "red" }}
            >
              +44 (0) 7478 992 706
            </div>
          </div>

          <div className="row col-md-12">
            <div className="col-md-1" style={{ backgroundColor: "green" }}>
              <div className="profile-icon">
                <i className="fa fa-envelope profile-icon"></i>
              </div>
            </div>
            <div
              className="col-md-8 info-text"
              style={{ backgroundColor: "red" }}
            >
              <a href="mailto:diego.bettega.90@gmail.com">
                diego.bettega.90@gmail.com
              </a>
            </div>
          </div>

          <div className="row col-md-12">
            <div className="col-md-1" style={{ backgroundColor: "green" }}>
              <div className="profile-icon">
                <i className="fa fa-map-marker profile-icon"></i>
              </div>
            </div>
            <div
              className="col-md-8 info-text"
              style={{ backgroundColor: "red" }}
            >
              <a
                className="info-text"
                href="https://www.google.com/maps/place/150+Rusthall+Ave,+London+W4+1BL/@51.5005084,-0.2622953,17z/data=!3m1!4b1!4m5!3m4!1s0x48760e1640916611:0x4a2392a9aaa72312!8m2!3d51.5005084!4d-0.2601066"
              >
                {" "}
                150A Rusthall Avenue, Chiswick, London, W4 1BS
              </a>
            </div>
          </div>

          <div className="row col-md-12">
            <div className="col-md-1" style={{ backgroundColor: "green" }}>
              <div className="profile-icon">
                <i className="fa fa-linkedin profile-icon"></i>
              </div>
            </div>
            <div
              className="col-md-8 info-text"
              style={{ backgroundColor: "red" }}
            >
              <a
                className="info-text"
                href="https://www.linkedin.com/in/diego-bettega-59a649b7/"
              >
                {" "}
                LinkedIn Profile
              </a>
            </div>
          </div>

          <div className="row col-md-12">
            <div className="col-md-1" style={{ backgroundColor: "green" }}>
              <div className="profile-icon">
                <i className="fa fa-github profile-icon"></i>
              </div>
            </div>
            <div
              className="col-md-8 info-text"
              style={{ backgroundColor: "red" }}
            >
              <a
                className="info-text"
                href="https://github.com/diegobettega?tab=repositories"
              >
                {" "}
                GitHub Repository
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
