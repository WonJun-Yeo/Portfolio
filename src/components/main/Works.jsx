import React from 'react';
import '../../styles/main/works.css';

const Works = () => {
  return (
      <section id={'works'} className={'section'}>
        <div className={'max_container'}>
          <h2 className={'title'}>My Works</h2>
          <p className={'description'}>Projects</p>
          <ul className={'categories'}>
            <li>
              <button className={'category category_selected'}>All <span className={'category_count'}>8</span></button>
            </li>
            <li>
              <button className={'category'}>Front-end <span className={'category_count'}>3</span></button>
            </li>
            <li>
              <button className={'category'}>Back-end <span className={'category_count'}>3</span></button>
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
        </div>
      </section>
  );
};

export default Works;