import React from 'react';
import '../../styles/main/works.css';
import commingSoon from '../../assets/images/commingSoon.png';
import project1 from '../../assets/images/project1.png';
import project2 from '../../assets/images/project2.png';

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
          <p>배포가 되어있는 경우 해당 페이지로<br/> 아닌 경우 GitHub Repository 로 이동됩니다!</p>
          <ul className={'categories'}>
            <li>
              <button className={'category category_selected'} data-category={'all'} onClick={handleOnClickCategory}>All <span className={'category_count'}>4</span></button>
            </li>
            <li>
              <button className={'category'} data-category={'front-end'} onClick={handleOnClickCategory}>Front-end <span className={'category_count'}>2</span></button>
            </li>
            <li>
              <button className={'category'} data-category={'back-end'} onClick={handleOnClickCategory}>Back-end <span className={'category_count'}>2</span></button>
            </li>
          </ul>
          <ul className={'projects'}>
            <li className={'project'} data-type={'front-end'}>
              <a href="https://wonjun-yeo.github.io/RubisCo_Studio/" target={'_blank'}>
                <img src={project1} alt="project1_img" className={'project_image'}/>
                <div className={'project_metadata'}>
                  <h3 className={'project_title'}>RubisCo Studio</h3>
                  <p>협업 포토그래퍼의 사진으로 카드, 편지지 등을 주문할 수 있는 사이트</p>
                  <p className={'project_stack'}>HTML, CSS, SCSS, JQuery</p>
                </div>
              </a>
            </li>
            <li className={'project'} data-type={'back-end'}>
              <a href="https://github.com/WonJun-Yeo/My_SNS" target={'_blank'}>
                <img src={project2} alt="project1_img" className={'project_image'}/>
                <div className={'project_metadata'}>
                  <h3 className={'project_title'}>MySNS</h3>
                  <p>최소한의 개인정보로 주변인들을 추천해주고 추억을 기록할 수 있는 Mini SNS</p>
                  <p className={'project_stack'}>HTML, CSS, JSP, H2 database</p>
                </div>
              </a>
            </li>
            <li className={'project'} data-type={'front-end'}>
              <a href="/#" target={'_blank'}>
                <img src={commingSoon} alt="project1_img" className={'project_image'}/>
                <div className={'project_metadata'}>
                  <h3 className={'project_title'}></h3>
                  <p>퍼블리싱으로 제작되어 있는 예전 미니 프로젝트를 React와 TypeScript를 적용시켜 새롭게 renewal할 예정입니다.</p>
                  <p className={'project_stack'}>HTML, SCSS, TypeScript, React, ReactQuery</p>
                </div>
              </a>
            </li>
            <li className={'project'} data-type={'back-end'}>
              <a href="/#" target={'_blank'}>
                <img src={commingSoon} alt="project1_img" className={'project_image'}/>
                <div className={'project_metadata'}>
                  <h3 className={'project_title'}>Basic Notice Board</h3>
                  <p>JPS에서 Spring으로 마이그레이션 하는 과정으로 개발을 진행해 나갈 예정입니다.</p>
                  <p className={'project_stack'}>HTML, CSS, JSP, Spring, MySQL</p>
                </div>
              </a>
            </li>
          </ul>
        </div>
      </section>
  );
};

export default Works;