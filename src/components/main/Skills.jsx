import React from 'react';
import '../../styles/main/skills.css';

const Skills = () => {
  return (
      <section id={'skills'} className={'section'}>
        <div className={'max_container'}>
          <h2 className={'title'}>My Skills</h2>
          <p className={'description'}>Skills & Attributes</p>
          <div className={'skills'}>
            <section className={'skills_coding'}>
              <h3 className={'skills_title'}>Coding Skills</h3>
              <ul>
                <li className={'bar'}>
                  <div className={'bar_metadata'}><span>HTML</span><span>90%</span></div>
                  <div className={'bar_bg'}><div className={'bar_value'} style={{width: '90%'}}></div></div>
                </li>
                <li className={'bar'}>
                  <div className={'bar_metadata'}><span>CSS</span><span>82%</span></div>
                  <div className={'bar_bg'}><div className={'bar_value'} style={{width: '82%'}}></div></div>
                </li>
                <li className={'bar'}>
                  <div className={'bar_metadata'}><span>React</span><span>74%</span></div>
                  <div className={'bar_bg'}><div className={'bar_value'} style={{width: '74%'}}></div></div>
                </li>
                <li className={'bar'}>
                  <div className={'bar_metadata'}><span>JAVA</span><span>81%</span></div>
                  <div className={'bar_bg'}><div className={'bar_value'} style={{width: '81%'}}></div></div>
                </li>
                <li className={'bar'}>
                  <div className={'bar_metadata'}><span>JSP</span><span>75%</span></div>
                  <div className={'bar_bg'}><div className={'bar_value'} style={{width: '75%'}}></div></div>
                </li>
                <li className={'bar'}>
                  <div className={'bar_metadata'}><span>Spring</span><span>70%</span></div>
                  <div className={'bar_bg'}><div className={'bar_value'} style={{width: '70%'}}></div></div>
                </li>
              </ul>
            </section>
            <section className={'skills_tools'}>
              <h3 className={'skills_title'}>Tools</h3>
              <ul>
                <li>IntelliJ</li>
                <li>Eclipse</li>
                <li>Visual Studio Code</li>
                <li>Slack</li>
                <li>Notion</li>
                <li>Confluence</li>
                <li>Figma</li>
              </ul>
            </section>
            <section className={'skills_etc'}>
              <h3 className={'skills_title'}>Etc</h3>
              <ul>
                <li>Git</li>
                <li>Insomnia</li>
              </ul>
            </section>
          </div>
        </div>
      </section>
  );
};

export default Skills;