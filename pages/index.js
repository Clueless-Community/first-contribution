import React, {useEffect, useState} from "react";
import Navbar from "./components/Navbar";
import HeroLight from "./components/HeroLight";
import CreatorSection from "./components/CreatorSection";
import DiscrodHome from "./components/DiscrodHome";
import Footer from "./components/Footer";
import HeroDark from "./components/HeroDark";

const index = () => {

  const [Hometheme, setHomeTheme] = useState("");
  const HeroTheme = () => {
    if(document.documentElement.classList.contains("dark")){
      setHomeTheme("dark")

    }
    else{
      setHomeTheme("")
    }
  }

  useEffect(() => {
    HeroTheme()
  }, [])

  return (
    <div>

        <Navbar 
          herotheme = {HeroTheme}
        />
        {!Hometheme && (
      <HeroLight />
        )}
        { Hometheme === "dark" && (
          <HeroDark />
        )}
      <div className="bg-white relative z-10">
      <DiscrodHome />
        <CreatorSection />
        <Footer />
      </div>
    </div>
  );
};

export default index;
