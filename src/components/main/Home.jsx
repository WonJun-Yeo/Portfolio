import React from 'react';
import '../../styles/main/home.css'
import profile from '../../assets/images/profile.png';

const Home = () => {

  document.addEventListener('scroll', () => {
    const homeContainer = document.querySelector('.home_container');
    const homeContainerHeight = homeContainer.getBoundingClientRect().height;
    homeContainer.style.opacity = 1- window.scrollY / homeContainerHeight;
  });

  return (
      <section id={'home'}>
        <div className={'home_container'}>
          <img src={profile} alt="WonJun's profile" className={'home_avatar'} />
          <h2 className={'home_title'}>Hello <br />I&#39;m <strong className={'home_title_strong'}>RubisCo</strong>, WonJun</h2>
          <p className={'home_description'}>Hello나는 무슨 소프트웨어 엔지니어 입니다.</p>
          <a href="#footer" className={'home_contact'}>Contact Me</a>
        </div>
        <div className="home-divider">
          <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M1200 120L0 16.48 0 0 1200 0 1200 120z" className="shape-fill"></path>
          </svg>
        </div>
      </section>
  );
};

export default Home;