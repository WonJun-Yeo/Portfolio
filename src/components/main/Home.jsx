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
              다하는 <br/> 원준 입니다.</h2>
            <p className={'home_description'}>결국은 풀스택 <br/> 앞, 뒤 가리지 않는 저를 소개합니다!</p>
            <a href="#footer" className={'home_contact'}>Contact Me</a>
          </div>
        </div>
      </section>
  );
};

export default Home;