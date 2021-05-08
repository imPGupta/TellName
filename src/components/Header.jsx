import React from 'react';
import headerImage from '../head.svg'
import '../style.css';

const Header = ({ headTitle, headExpanded }) => {
  return (
    <div className="head-container">
      <img
        src={headerImage}
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
