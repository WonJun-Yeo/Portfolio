import React from 'react';
import '../../styles/main/uptotop.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowUp} from "@fortawesome/free-solid-svg-icons";

const UpToTop = () => {
  document.addEventListener('scroll', () => {
    const arrowUp = document.querySelector('.arrow-up');
    const homeHeight = document.querySelector('#home').getBoundingClientRect().height;

    window.scrollY > homeHeight / 2? arrowUp.style.opacity = 1
        : arrowUp.style.opacity = 0;
  })

  return (
      <aside>
        <a href="#home" title={'up to top'} className={'arrow-up'}>
          <FontAwesomeIcon icon={faArrowUp} />
        </a>
      </aside>
  );
};

export default UpToTop;