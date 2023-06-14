import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGithub} from "@fortawesome/free-brands-svg-icons";

const Contact = () => {
  return (
      <>
        <h2>Let&#39;s talk</h2>
        <p>rbgh004@naver.com</p>
        <ul>
          <li>
            <a href="https://github.com/WonJun-Yeo" title={`WonJun's github link`} target={'_blank'}>
              <FontAwesomeIcon icon={faGithub} />
            </a>
          </li>
          <li>
            <a href="https://github.com/WonJun-Yeo">
              <FontAwesomeIcon icon={faGithub} />
            </a>
          </li>
        </ul>
      </>
  );
};

export default Contact;