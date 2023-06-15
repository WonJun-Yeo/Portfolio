import React from 'react';
import '../../styles/main/skills.css';

const Skills = () => {
  return (
      <section id={'skills'} className={'section'}>
        <div className={'max_container'}>
          <h2 className={'title'}>My Skills</h2>
          <p className={'description'}>Skills & Attributes</p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias aperiam at consectetur deleniti, iusto nemo
            reprehenderit? Aspernatur ipsam quasi quidem similique? Nisi porro quo sed similique voluptatem! Libero, non
            quas.
          </p>
          <div className={'skills'}>
            <section className={'skills_coding'}>
              <h3 className={'skills_title'}>Coding Skills</h3>
              <ul>
                <li className={'bar'}>
                  <div className={'bar_metadata'}><span>HTML</span><span>98%</span></div>
                  <div className={'bar_bg'}><div className={'bar_value'} style={{width: '98%'}}></div></div>
                </li>
                <li className={'bar'}>
                  <div className={'bar_metadata'}><span>HTML</span><span>98%</span></div>
                  <div className={'bar_bg'}><div className={'bar_value'} style={{width: '98%'}}></div></div>
                </li>
                <li className={'bar'}>
                  <div className={'bar_metadata'}><span>HTML</span><span>98%</span></div>
                  <div className={'bar_bg'}><div className={'bar_value'} style={{width: '98%'}}></div></div>
                </li>
                <li className={'bar'}>
                  <div className={'bar_metadata'}><span>HTML</span><span>98%</span></div>
                  <div className={'bar_bg'}><div className={'bar_value'} style={{width: '98%'}}></div></div>
                </li>
                <li className={'bar'}>
                  <div className={'bar_metadata'}><span>HTML</span><span>98%</span></div>
                  <div className={'bar_bg'}><div className={'bar_value'} style={{width: '98%'}}></div></div>
                </li>
              </ul>
            </section>
            <section className={'skills_tools'}>
              <h3 className={'skills_title'}>Tools</h3>
              <ul>
                <li>IntelliJ</li>
                <li>Visual Studio Code</li>
              </ul>
            </section>
            <section className={'skills_etc'}>
              <h3 className={'skills_title'}>Etc</h3>
              <ul>
                <li>Git</li>
                <li>Scrum Master</li>
                <li>Math</li>
              </ul>
            </section>
          </div>
        </div>
      </section>
  );
};

export default Skills;