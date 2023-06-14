import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGithub} from "@fortawesome/free-brands-svg-icons";
import Contact from "./main/Contact";

const Footer = () => {
  return (
      <footer>
        <Contact />
        <p>RubisCo - All rights reserved</p>
      </footer>
  );
};

export default Footer;