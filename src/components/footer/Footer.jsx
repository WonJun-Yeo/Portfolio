import React from 'react';
import '../../styles/footer/footer.css'
import Contact from "./Contact";

const Footer = () => {
  return (
      <footer id={'footer'}>
        <div className={'max_container'}>
          <Contact />
          <p>RubisCo - All rights reserved</p>
        </div>
      </footer>
  );
};

export default Footer;