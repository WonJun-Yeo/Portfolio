import React from 'react';
import '../../styles/footer/footer.css'
import Contact from "./Contact";

const Footer = () => {
  return (
      <footer id={'footer'}>
        <div className="footer-divider">
          <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M649.97 0L550.03 0 599.91 54.12 649.97 0z" className="shape-fill"></path>
          </svg>
        </div>
        <div className={'max_container'}>
          <Contact />
          <p>RubisCo - All rights reserved</p>
        </div>
      </footer>
  );
};

export default Footer;