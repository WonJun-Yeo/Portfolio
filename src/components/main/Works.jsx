import React from 'react';
import '../../styles/main/works.css';
import test_image from '../../assets/images/test_image.jpg';

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
          <ul className={'projects'}>
            <li className={'project'}>
              <a href="#" target={'_blank'}>
                <img src={test_image} alt="project1_img" className={'project_image'}/>
                <div className={'project_metadata'}>
                  <h3 className={'project_title'}>Project #1</h3>
                  <p>Clone Coding with HTML, CSS</p>
                </div>
              </a>
            </li>
            <li className={'project'}>
              <a href="#" target={'_blank'}>
                <img src={test_image} alt="project1_img" className={'project_image'}/>
                <div className={'project_metadata'}>
                  <h3 className={'project_title'}>Project #1</h3>
                  <p>Clone Coding with HTML, CSS</p>
                </div>
              </a>
            </li>
            <li className={'project'}>
              <a href="#" target={'_blank'}>
                <img src={test_image} alt="project1_img" className={'project_image'}/>
                <div className={'project_metadata'}>
                  <h3 className={'project_title'}>Project #1</h3>
                  <p>Clone Coding with HTML, CSS</p>
                </div>
              </a>
            </li>
            <li className={'project'}>
              <a href="#" target={'_blank'}>
                <img src={test_image} alt="project1_img" className={'project_image'}/>
                <div className={'project_metadata'}>
                  <h3 className={'project_title'}>Project #1</h3>
                  <p>Clone Coding with HTML, CSS</p>
                </div>
              </a>
            </li>
            <li className={'project'}>
              <a href="#" target={'_blank'}>
                <img src={test_image} alt="project1_img" className={'project_image'}/>
                <div className={'project_metadata'}>
                  <h3 className={'project_title'}>Project #1</h3>
                  <p>Clone Coding with HTML, CSS</p>
                </div>
              </a>
            </li>
            <li className={'project'}>
              <a href="#" target={'_blank'}>
                <img src={test_image} alt="project1_img" className={'project_image'}/>
                <div className={'project_metadata'}>
                  <h3 className={'project_title'}>Project #1</h3>
                  <p>Clone Coding with HTML, CSS</p>
                </div>
              </a>
            </li>
            <li className={'project'}>
              <a href="#" target={'_blank'}>
                <img src={test_image} alt="project1_img" className={'project_image'}/>
                <div className={'project_metadata'}>
                  <h3 className={'project_title'}>Project #1</h3>
                  <p>Clone Coding with HTML, CSS</p>
                </div>
              </a>
            </li>
            <li className={'project'}>
              <a href="#" target={'_blank'}>
                <img src={test_image} alt="project1_img" className={'project_image'}/>
                <div className={'project_metadata'}>
                  <h3 className={'project_title'}>Project #1</h3>
                  <p>Clone Coding with HTML, CSS</p>
                </div>
              </a>
            </li>
            <li className={'project'}>
              <a href="#" target={'_blank'}>
                <img src={test_image} alt="project1_img" className={'project_image'}/>
                <div className={'project_metadata'}>
                  <h3 className={'project_title'}>Project #1</h3>
                  <p>Clone Coding with HTML, CSS</p>
                </div>
              </a>
            </li>
            <li className={'project'}>
              <a href="#" target={'_blank'}>
                <img src={test_image} alt="project1_img" className={'project_image'}/>
                <div className={'project_metadata'}>
                  <h3 className={'project_title'}>Project #1</h3>
                  <p>Clone Coding with HTML, CSS</p>
                </div>
              </a>
            </li>
            <li className={'project'}>
              <a href="#" target={'_blank'}>
                <img src={test_image} alt="project1_img" className={'project_image'}/>
                <div className={'project_metadata'}>
                  <h3 className={'project_title'}>Project #1</h3>
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