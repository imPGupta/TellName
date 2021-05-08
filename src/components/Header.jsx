import React from 'react';
// import headerImage from '../header.png';
import '../style.css';

// https://raw.githubusercontent.com/imPGupta/TellName/1930f79bef36e52de27f0eaf46ce8434c4d4157c/img/head.svg
// https://raw.githubusercontent.com/TheLeanProgrammer/name-it/b52a349bb26331c9390a3205b36a310cfd72164b/static/media/icon.beb8c84d.svg
// https://user-images.githubusercontent.com/26179770/106359099-693e3380-6336-11eb-8069-9e36f25de5ca.png
const Header = ({ headTitle, headExpanded }) => {
    return (
        <div className='head-container'>
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
