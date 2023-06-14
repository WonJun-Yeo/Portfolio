import React from 'react';
import '../../styles/main/about.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faJava, faReact} from "@fortawesome/free-brands-svg-icons";

const About = () => {
  return (
      <section id={'about'} className={'section max_container'}>
        <h2 className={'title'}>About me</h2>
        <p className={'description'}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus aperiam error ex ipsa iusto maiores
          molestiae necessitatibus omnis, perferendis, possimus quaerat quam rem sed. Alias eaque facere incidunt nulla
          quaerat?
        </p>
        <ul className={'majors'}>
          <li className={'major'}>
            <FontAwesomeIcon icon={faReact} className={'major_icon'}/>
            <p className={'major_title'}>Front-end</p>
            <p>HTML, CSS, TS, React, React Query</p>
          </li>
          <li className={'major'}>
            <FontAwesomeIcon icon={faJava} className={'major_icon'}/>
            <p className={'major_title'}>Mobile</p>
            <p>Android, React Native, Kotlin</p>
          </li>
          <li className={'major'}>
            <FontAwesomeIcon icon={faJava} className={'major_icon'}/>
            <p className={'major_title'}>Back-end</p>
            <p>Java, JSP, Spring, Oracle</p>
          </li>
        </ul>
        <ul className={'jobs'}>
          {/*학교 단체, 이력*/}
          <li className={'job'}>
            <img src="" alt=""/>
            <div>
              <p className={'job_name'}>Google as Senior Software Engineer</p>
              <p className={'job_period'}>2019 Oct - Until now</p>
            </div>
          </li>
          <li className={'job'}>
            <img src="" alt=""/>
            <div>
              <p className={'job_name'}>Google as Senior Software Engineer</p>
              <p className={'job_period'}>2019 Oct - Until now</p>
            </div>
          </li>
        </ul>
      </section>
  );
};

export default About;