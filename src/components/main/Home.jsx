import React from 'react';
import '../../styles/main/home.css'
import profile from '../../assets/images/profile.png';
import TypeIt from "typeit-react";

const Home = () => {

  document.addEventListener('scroll', () => {
    const homeContainer = document.querySelector('.home_container');
    const homeContainerHeight = homeContainer.getBoundingClientRect().height;
    homeContainer.style.opacity = 1 - window.scrollY / homeContainerHeight;
  });

  return (
      <section id={'home'}>
        <div className={'max_container home_container'}>
          <img src={profile} alt="WonJun's profile" className={'home_avatar'}/>
          <div>
            <h2 className={'home_title'}>안녕하세요! <br/>저는
              <TypeIt className={'home_title_strong'}
                      element={"strong"}
                      getBeforeInit={(instance) => {
                        instance.type(" FE&BE ").pause(750).delete(10).pause(500).type(" 그런 노력을 ");

                        return instance;
                      }}
              />
              다하는 , 원준 입니다.</h2>
            <p className={'home_description'}>Hello나는 무슨 소프트웨어 엔지니어 입니다.</p>
            <a href="#footer" className={'home_contact'}>Contact Me</a>
          </div>
        </div>
        <div className="home-divider">
          <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120"
               preserveAspectRatio="none">
            <path d="M1200 120L0 16.48 0 0 1200 0 1200 120z" className="shape-fill"></path>
          </svg>
        </div>
      </section>
  );
};

export default Home;