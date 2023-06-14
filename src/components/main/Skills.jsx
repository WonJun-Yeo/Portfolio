import React from 'react';

const Skills = () => {
  return (
      <section id={'skills'} className={'section'}>
        <h2>My Skills</h2>
        <p>Skills & Attributes</p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias aperiam at consectetur deleniti, iusto nemo
          reprehenderit? Aspernatur ipsam quasi quidem similique? Nisi porro quo sed similique voluptatem! Libero, non
          quas.
        </p>
        <div>
          <section>
            <h3>Coding Skills</h3>
            <ul>
              <li>
                <div><span>HTML</span><span>98%</span></div>
                <div><div style={{width: '98%'}}></div></div>
              </li>
              <li>
                <div><span>HTML</span><span>98%</span></div>
                <div><div style={{width: '98%'}}></div></div>
              </li>
              <li>
                <div><span>HTML</span><span>98%</span></div>
                <div><div style={{width: '98%'}}></div></div>
              </li>
              <li>
                <div><span>HTML</span><span>98%</span></div>
                <div><div style={{width: '98%'}}></div></div>
              </li>
              <li>
                <div><span>HTML</span><span>98%</span></div>
                <div><div style={{width: '98%'}}></div></div>
              </li>
            </ul>
          </section>
          <section>
            <h3>Tools</h3>
            <li>IntelliJ</li>
            <li>Visual Studio Code</li>
          </section>
          <section>
            <h3>Etc</h3>
            <ul>
              <li>Git</li>
              <li>Scrum Master</li>
              <li>Math</li>
            </ul>
          </section>
        </div>
      </section>
  );
};

export default Skills;