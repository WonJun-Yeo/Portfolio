import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowUp} from "@fortawesome/free-solid-svg-icons";

const UpToTop = () => {
  return (
      <aside>
        <a href="#home" title={'up to top'}>
          <FontAwesomeIcon icon={faArrowUp} />
        </a>
      </aside>
  );
};

export default UpToTop;