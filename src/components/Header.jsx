import React from 'react';
import '../styles/header.css';
import logo from '../assets/images/favicon.ico';

const Header = () => {
  document.addEventListener('scroll', () => {
    const header = document.querySelector('.header');
    const headerHeight = header.getBoundingClientRect().height;
    window.scrollY > headerHeight? header.classList.add('header_dark')
        : header.classList.remove('header_dark');
  });

  return (
      <header className={'header'}>
        <div className={'header_logo'}>
          <img src={logo} alt="logo" className={'header_logo_img'}/>
          <h1 className={'header_logo_title'}><a href="#">WonJun</a></h1>
        </div>
        <nav className={'header_nav'}>
          <ul className={'header_menu'}>
            <li><a className={'header_menu_item active'} href="#home">Home</a></li>
            <li><a className={'header_menu_item'} href="#about">About</a></li>
            <li><a className={'header_menu_item'} href="#skills">Skills</a></li>
            <li><a className={'header_menu_item'} href="#works">Works</a></li>
            <li><a className={'header_menu_item'} href="#testimonial">Testimonial</a></li>
            <li><a className={'header_menu_item'} href="#footer">Contact</a></li>
          </ul>
        </nav>
      </header>
  );
};

export default Header;