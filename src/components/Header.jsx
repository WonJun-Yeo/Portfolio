import React from 'react';
import logo from '../assets/images/favicon.ico';

const Header = () => {
  return (
      <header>
        <div>
          <img src={logo} alt="logo"/>
          <h1><a href="#">WonJun</a></h1>
        </div>
        <nav>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#skiils">Skills</a></li>
            <li><a href="#works">Works</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </header>
  );
};

export default Header;