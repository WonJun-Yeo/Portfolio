import React from 'react';
import '../styles/header.css';
import logo from '../assets/images/favicon.ico';

const Header = () => {
  return (
      <header className={'header'}>
        <div className={'header_logo'}>
          <img src={logo} alt="logo" className={'header_logo_img'}/>
          <h1 className={'header_logo_title'}><a href="#">WonJun</a></h1>
        </div>
        <nav>
          <ul className={'header_menu'}>
            <li><a className={'header_menu_item active'} href="#home">Home</a></li>
            <li><a className={'header_menu_item'} href="#about">About</a></li>
            <li><a className={'header_menu_item'} href="#skiils">Skills</a></li>
            <li><a className={'header_menu_item'} href="#works">Works</a></li>
            <li><a className={'header_menu_item'} href="#contact">Contact</a></li>
          </ul>
        </nav>
      </header>
  );
};

export default Header;