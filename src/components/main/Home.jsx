import React from 'react';
import profile from '../../assets/images/profile.jpg';

const Home = () => {
  return (
      <section id={'home'}>
        <img src={profile} alt="WonJun's profile"/>
        <h2>Hello I&#39;m RubisCo, WonHun</h2>
        <p>나는 무슨 소프트웨어 엔지니어 입니다.</p>
        <a href="#contact">Contact Me</a>
      </section>
  );
};

export default Home;