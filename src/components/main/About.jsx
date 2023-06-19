import React from 'react';
import '../../styles/main/about.css';
import school from '../../assets/images/school.png';
import company from '../../assets/images/company.png';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faJava, faReact} from "@fortawesome/free-brands-svg-icons";

const About = () => {
  return (
      <section id={'about'} className={'section'}>
        <div className={'max_container'}>

          <h2 className={'title'}>About me</h2>
          <p className={'description'}>
            I think "basic" is important <br/>
            It's the basics to learn, to work.
          </p>
          <ul className={'majors'}>
            <li className={'major'}>
              <FontAwesomeIcon icon={faReact} className={'major_icon'}/>
              <p className={'major_title'}>Front-end</p>
              <p>HTML, CSS, SCSS, TS, JQuery, React</p>
            </li>
            <li className={'major'}>
              <FontAwesomeIcon icon={faJava} className={'major_icon'}/>
              <p className={'major_title'}>Back-end</p>
              <p>Java, JSP, Spring, RDBMS</p>
            </li>
          </ul>
          <ul className={'jobs'}>
            <li className={'job'}>
              <img src={school} alt="" className={'job_image'}/>
              <div>
                <p className={'job_name'}>한국소프트웨어인재개발원 - 교육생</p>
                <p className={'job_period'}>2022 Feb - 2022 Aug.</p>
              </div>
            </li>
            <li className={'job'}>
              <img src={company} alt="" className={'job_image'}/>
              <div>
                <p className={'job_name'}>넥스트리 - 선임개발자</p>
                <p className={'job_period'}>2022 Aug - 2023 Jun.</p>
              </div>
            </li>
          </ul>
        </div>
        <div className="about-divider">
          <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M649.97 0L550.03 0 599.91 54.12 649.97 0z" className="shape-fill"></path>
          </svg>
        </div>
      </section>
  );
};

export default About;