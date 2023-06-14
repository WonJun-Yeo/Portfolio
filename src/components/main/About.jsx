import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faJava, faReact} from "@fortawesome/free-brands-svg-icons";

const About = () => {
  return (
      <section id={'about'}>
        <h2>About me</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus aperiam error ex ipsa iusto maiores
          molestiae necessitatibus omnis, perferendis, possimus quaerat quam rem sed. Alias eaque facere incidunt nulla
          quaerat?
        </p>
        <ul>
          <li>
            <FontAwesomeIcon icon={faReact}/>
            <p>Front-end</p>
            <p>HTML, CSS, TS, React, React Query</p>
          </li>
          <li>
            <FontAwesomeIcon icon={faJava} />
            <p>Mobile</p>
            <p>Android, React Native, Kotlin</p>
          </li>
          <li>
            <FontAwesomeIcon icon={faJava} />
            <p>Back-end</p>
            <p>Java, JSP, Spring, Oracle</p>
          </li>
        </ul>
        <ul>
          {/*학교 단체, 이력*/}
          <li>
            <img src="" alt=""/>
            <div>
              <p>Google as Senior Software Engineer</p>
              <p>2019 Oct - Until now</p>
            </div>
          </li>
          <li>
            <img src="" alt=""/>
            <div>
              <p>Google as Senior Software Engineer</p>
              <p>2019 Oct - Until now</p>
            </div>
          </li>
        </ul>
      </section>
  );
};

export default About;