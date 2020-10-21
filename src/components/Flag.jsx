import React, { useState, useContext } from "react";
import ukflag from "../images/uk_flag.png";
import itflag from "../images/italian_flag.png";
import { LanguageContext } from "../context/LanguageContext";

export default function Flag() {
  const [language, setLanguage] = useContext(LanguageContext);
  const [opacityUK, setOpacityUK] = useState(1);
  const [opacityIT, setOpacityIT] = useState(0.5);

  function handleClickUK() {
    setLanguage("UK");
    setOpacityUK(1);
    setOpacityIT(0.5);
  }

  function handleClickIT() {
    setLanguage("IT");
    setOpacityIT(1);
    setOpacityUK(0.5);
  }

  function handleMouseOverUK() {
    setOpacityUK(1);
    setOpacityIT(0.5);
  }

  function handleMouseOutUK() {
    if (language === "IT") {
      setOpacityUK(0.5);
      setOpacityIT(1);
    }
  }

  function handleMouseOverIT() {
    setOpacityIT(1);
    setOpacityUK(0.5);
  }

  function handleMouseOutIT() {
    if (language === "UK") {
      setOpacityIT(0.5);
      setOpacityUK(1);
    }
  }

  return (
    <div>
      <img
        className="navbar-symbol uk-flag"
        src={ukflag}
        alt="UK-flag"
        style={{ opacity: opacityUK }}
        onClick={handleClickUK}
        onMouseOver={handleMouseOverUK}
        onMouseOut={handleMouseOutUK}
      />
      &nbsp;
      <img
        className="navbar-symbol it-flag"
        src={itflag}
        alt="Italian-flag"
        style={{ opacity: opacityIT }}
        onClick={handleClickIT}
        onMouseOver={handleMouseOverIT}
        onMouseOut={handleMouseOutIT}
      />
    </div>
  );
}
