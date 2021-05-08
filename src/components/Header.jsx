import React from 'react';
import '../style.css';

const Header = ({ headTitle, headExpanded }) => {
  return (
    <div className="head-container">
      <img
        src="https://raw.githubusercontent.com/imPGupta/TellName/1ffbfa33f2a471099767cd8e5555e3f52abe6696/public/img/head.svg"
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
