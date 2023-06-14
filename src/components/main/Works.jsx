import React from 'react';

const Works = () => {
  return (
      <section id={'works'} className={'section'}>
        <h2>My Works</h2>
        <p>Projects</p>
        <ul>
          <li>
            <button>All <span>8</span></button>
          </li>
          <li>
            <button>Front-end <span>3</span></button>
          </li>
          <li>
            <button>Back-end <span>3</span></button>
          </li>
        </ul>
        <ul>
          <li>
            <a href="#" target={'_blank'}>
              <img src="" alt="project1_img"/>
              <div>
                <h3>Project #1</h3>
                <p>Clone Coding with HTML, CSS</p>
              </div>
            </a>
          </li>
          <li>
            <a href="#" target={'_blank'}>
              <img src="" alt="project1_img"/>
              <div>
                <h3>Project #1</h3>
                <p>Clone Coding with HTML, CSS</p>
              </div>
            </a>
          </li>
          <li>
            <a href="#" target={'_blank'}>
              <img src="" alt="project1_img"/>
              <div>
                <h3>Project #1</h3>
                <p>Clone Coding with HTML, CSS</p>
              </div>
            </a>
          </li>
          <li>
            <a href="#" target={'_blank'}>
              <img src="" alt="project1_img"/>
              <div>
                <h3>Project #1</h3>
                <p>Clone Coding with HTML, CSS</p>
              </div>
            </a>
          </li>
          <li>
            <a href="#" target={'_blank'}>
              <img src="" alt="project1_img"/>
              <div>
                <h3>Project #1</h3>
                <p>Clone Coding with HTML, CSS</p>
              </div>
            </a>
          </li>
        </ul>
      </section>
  );
};

export default Works;