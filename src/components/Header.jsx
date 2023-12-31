import React, {useState} from 'react';
import '../styles/header.css';
import headerLogo from '../assets/images/header_icon.png';
import {faBars} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const Header = () => {
  document.addEventListener('scroll', () => {
    const header = document.querySelector('.header');
    const headerHeight = header.getBoundingClientRect().height;
    window.scrollY > headerHeight ? header.classList.add('header_dark')
        : header.classList.remove('header_dark');
  });

  const [activeNav, setActiveNav] = useState(false);

  const handleOnClickToggle = () => {
    setActiveNav(!activeNav);
  };

  const handleOnClickMenu = () => {
    setActiveNav(false);
  };

  return (
      <header className={'header'}>
        <div className={'header_logo'}>
          <a href="/#"><img src={headerLogo} alt="logo" className={'header_logo_img'}/></a>
        </div>
        <nav className={'header_nav'}>
          <ul className={activeNav ? 'header_menu open' : 'header_menu'}>
            <li onClick={handleOnClickMenu}><a className={'header_menu_item'} href="#home">Home</a></li>
            <li onClick={handleOnClickMenu}><a className={'header_menu_item'} href="#about">About</a></li>
            <li onClick={handleOnClickMenu}><a className={'header_menu_item'} href="#skills">Skills</a></li>
            <li onClick={handleOnClickMenu}><a className={'header_menu_item'} href="#works">Works</a></li>
            <li onClick={handleOnClickMenu}><a className={'header_menu_item'} href="#testimonial">Testimonial</a></li>
            <li onClick={handleOnClickMenu}><a className={'header_menu_item'} href="#footer">Contact</a></li>
          </ul>
        </nav>
        <button className={'header_toggle'} aria-label={'navigation menu toggle'} onClick={handleOnClickToggle}>
          <FontAwesomeIcon icon={faBars}/>
        </button>
      </header>
  );
};

export default Header;