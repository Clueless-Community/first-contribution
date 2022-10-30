import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import HeroLight from "./components/HeroLight";
import CreatorSection from "./components/CreatorSection";
import DiscordHome from "./components/DiscordHome";
import RecentContributors from "./components/RecentContributors";
import Footer from "./components/Footer";
import HeroDark from "./components/HeroDark";
import Document from "./document";
import Topfab from "./components/Topfab";
import PageContentWrapper from './components/PageContentWrapper'

const index = () => {
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
    <>
      <Document />
      <Navbar herotheme={HeroTheme} homeTheme={Hometheme} />
      {!Hometheme && <HeroLight />}
      {Hometheme === "dark" && <HeroDark />}
      <PageContentWrapper className="relative z-10 !bg-transparent">
        <RecentContributors />
        <DiscordHome />
        <Topfab />
        <CreatorSection />
      </PageContentWrapper>
      <Footer />
    </>
  );
};

export default index;
