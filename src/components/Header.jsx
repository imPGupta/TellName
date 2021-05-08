import React from 'react';
import '../style.css';

const Header = ({ headTitle, headExpanded }) => {
  return (
    <div className="head-container">
      <img
        src="https://raw.githubusercontent.com/imPGupta/TellName/975ba0bd8a542ac786e51f2c883883276017c17e/public/img/head.svg"
        alt="head-img"
        className={`head-img ${
          headExpanded ? 'head-img-expanded' : 'head-img-contracted'
        }`}
      />
      <div
        className={`head-text ${
          headExpanded ? 'head-text-expanded' : 'head-text-contracted'
        }`}
      >
        {headTitle}
      </div>
    </div>
  );
};

export default Header;
