import React from 'react';
import '../../styles/footer/contact.css'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGithub} from "@fortawesome/free-brands-svg-icons";
import {faEnvelope, faPhone} from "@fortawesome/free-solid-svg-icons";

const Contact = () => {
  return (
      <>
        <h2 className={'contact_title'}>Let&#39;s talk</h2>
        <p className={'contact_description'}>많은 관심 부탁드립니다!</p>
        <ul className={'contact_links'}>
          <li>
            <a href="mailto:rbgh004@naver.com" title={`send email to WonJun`} target={'_blank'} className={'contact_link'}>
              <FontAwesomeIcon icon={faEnvelope} />
            </a>
          </li>
          <li>
            <a href="tel:010-9033-6633" title={`call WonJun`} target={'_blank'} className={'contact_link'}>
              <FontAwesomeIcon icon={faPhone} />
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