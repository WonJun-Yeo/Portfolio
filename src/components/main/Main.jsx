import React from 'react';
import '../../styles/main/main.css'
import Home from "./Home";
import About from "./About";
import Skills from "./Skills";
import Works from "./Works";
import UpToTop from "./UpToTop";

const Main = () => {
  return (
      <>
        <Home/>
        <About/>
        <Skills/>
        <Works/>
        <UpToTop/>
      </>
  );
};

export default Main;