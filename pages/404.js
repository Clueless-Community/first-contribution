import Navbar from "./components/Navbar";
import React, { useState, useEffect } from "react";
import ErrorLight from "./components/ErrorLight";
import ErrorDark from "./components/ErrorDark";
import Document from "./document";

const ErrorPage = () => {
  const [Hometheme, setHomeTheme] = useState("");
  const HeroTheme = () => {
    if (document.documentElement.classList.contains("dark")) {
      setHomeTheme("dark");
    } else {
      setHomeTheme("");
    }
  };

  useEffect(() => {
    HeroTheme();
  }, []);
  return (
    <div>
    <Document />
      <Navbar herotheme={HeroTheme} />
      {!Hometheme && <ErrorLight />}
      {Hometheme === "dark" && <ErrorDark />}
    </div>
  );
};

export default ErrorPage;
