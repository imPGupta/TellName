import React from 'react';
import '../style.css';

const Header = ({ headTitle, headExpanded }) => {
    return (
      <div className='head-container'>
        <h2 className={`heading ${
                    headExpanded ? 'head-text-expanded' : 'head-text-contracted'
                }`}>Find The Cool And Amazing Names For Your Websites🤩</h2>
            <img
                src="https://raw.githubusercontent.com/imPGupta/TellName/1930f79bef36e52de27f0eaf46ce8434c4d4157c/img/head.svg"
                alt='head-img'
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
