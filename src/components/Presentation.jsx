import React, { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";
import YoutubeData from "../data/YoutubeData";

export default function Presentation() {

  const language = useContext(LanguageContext)[0];
  const link = YoutubeData[language];

  return (
    <div>
    <h1>{link}</h1>
    <iframe className="youtube-frame" width="420" height="345" src={link}>
    </iframe>
    </div>
  );
}
