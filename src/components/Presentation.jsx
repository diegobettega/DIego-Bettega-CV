import React, { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";
import PresentationData from "../data/PresentationData";

export default function Presentation() {
  const language = useContext(LanguageContext)[0];
  const link = PresentationData[language];

  return (
    <div className="col-md-6">
      <iframe
        className="youtube-frame"
        src={link}
      ></iframe>
    </div>
  );
}
