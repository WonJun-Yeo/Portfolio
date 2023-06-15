import React from 'react';
import '../../styles/footer/contact.css'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGithub} from "@fortawesome/free-brands-svg-icons";

const Contact = () => {
  return (
      <>
        <h2 className={'contact_title'}>Let&#39;s talk</h2>
        <p className={'contact_description'}>rbgh004@naver.com</p>
        <ul className={'contact_links'}>
          <li>
            <a href="https://github.com/WonJun-Yeo" title={`WonJun's github link`} target={'_blank'} className={'contact_link'}>
              <FontAwesomeIcon icon={faGithub} />
            </a>
          </li>
          <li>
            <a href="https://github.com/WonJun-Yeo" className={'contact_link'}>
              <FontAwesomeIcon icon={faGithub} />
            </a>
          </li>
        </ul>
      </>
  );
};

export default Contact;