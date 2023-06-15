import React from 'react';
import '../../styles/main/home.css'
import profile from '../../assets/images/profile.png';

const Home = () => {
  return (
      <section id={'home'}>
        <img src={profile} alt="WonJun's profile" className={'home_avatar'} />
        <h2 className={'home_title'}>Hello <br />I&#39;m <strong className={'home_title_strong'}>RubisCo</strong>, WonJun</h2>
        <p className={'home_description'}>Hello나는 무슨 소프트웨어 엔지니어 입니다.</p>
        <a href="#footer" className={'home_contact'}>Contact Me</a>
      </section>
  );
};

export default Home;