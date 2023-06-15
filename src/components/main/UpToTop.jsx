import React from 'react';
import '../../styles/main/uptotop.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowUp} from "@fortawesome/free-solid-svg-icons";

const UpToTop = () => {
  return (
      <aside>
        <a href="src/components#home" title={'up to top'} className={'arrow-up'}>
          <FontAwesomeIcon icon={faArrowUp} />
        </a>
      </aside>
  );
};

export default UpToTop;