import React from 'react';
import '../../styles/main/works.css';
import test_image from '../../assets/images/test_image.jpg';

const Works = () => {
  const handleOnClickCategory = (e) => {
    //TODO: modify based mockdata
    const filter = e.target.dataset.category;
    if (!filter) return;

    const active = document.querySelector('.category_selected');
    active.classList.remove('category_selected');
    e.target.classList.add('category_selected');

    const projects = document.querySelectorAll('.project');
    const projectsContainer = document.querySelector('.projects');

    projectsContainer.classList.add('anim-out');

    setTimeout(() => {
      projectsContainer.classList.remove('anim-out');
      projects.forEach(project => {
        if(filter === 'all' || filter === project.dataset.type) {
          project.style.display = 'block';
        } else {
          project.style.display = 'none';
        }
      });
    }, 150);
  };

  return (
      <section id={'works'} className={'section'}>
        <div className={'max_container'}>
          <h2 className={'title'}>My Works</h2>
          <p className={'description'}>Projects</p>
          <ul className={'categories'}>
            <li>
              <button className={'category category_selected'} data-category={'all'} onClick={handleOnClickCategory}>All <span className={'category_count'}>6</span></button>
            </li>
            <li>
              <button className={'category'} data-category={'front-end'} onClick={handleOnClickCategory}>Front-end <span className={'category_count'}>3</span></button>
            </li>
            <li>
              <button className={'category'} data-category={'back-end'} onClick={handleOnClickCategory}>Back-end <span className={'category_count'}>3</span></button>
            </li>
          </ul>
          <ul className={'projects'}>
            <li className={'project'} data-type={'back-end'}>
              <a href="/#" target={'_blank'}>
                <img src={test_image} alt="project1_img" className={'project_image'}/>
                <div className={'project_metadata'}>
                  <h3 className={'project_title'}>Project #1</h3>
                  <p>Clone Coding with HTML, CSS</p>
                </div>
              </a>
            </li>
            <li className={'project'} data-type={'back-end'}>
              <a href="/#" target={'_blank'}>
                <img src={test_image} alt="project1_img" className={'project_image'}/>
                <div className={'project_metadata'}>
                  <h3 className={'project_title'}>Project #1</h3>
                  <p>Clone Coding with HTML, CSS</p>
                </div>
              </a>
            </li>
            <li className={'project'} data-type={'front-end'}>
              <a href="/#" target={'_blank'}>
                <img src={test_image} alt="project1_img" className={'project_image'}/>
                <div className={'project_metadata'}>
                  <h3 className={'project_title'}>Project #1</h3>
                  <p>Clone Coding with HTML, CSS</p>
                </div>
              </a>
            </li>
            <li className={'project'} data-type={'back-end'}>
              <a href="/#" target={'_blank'}>
                <img src={test_image} alt="project1_img" className={'project_image'}/>
                <div className={'project_metadata'}>
                  <h3 className={'project_title'}>Project #1</h3>
                  <p>Clone Coding with HTML, CSS</p>
                </div>
              </a>
            </li>
            <li className={'project'} data-type={'front-end'}>
              <a href="/#" target={'_blank'}>
                <img src={test_image} alt="project1_img" className={'project_image'}/>
                <div className={'project_metadata'}>
                  <h3 className={'project_title'}>Project #1</h3>
                  <p>Clone Coding with HTML, CSS</p>
                </div>
              </a>
            </li>
            <li className={'project'} data-type={'front-end'}>
              <a href="/#" target={'_blank'}>
                <img src={test_image} alt="project1_img" className={'project_image'}/>
                <div className={'project_metadata'}>
                  <h3 className={'project_title'}>Project #1</h3>
                  <p>Clone Coding with HTML, CSS</p>
                </div>
              </a>
            </li>
            <li className={'project'} data-type={'front-end'}>
              <a href="/#" target={'_blank'}>
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