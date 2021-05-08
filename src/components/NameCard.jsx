import React from 'react';
import '../style.css';

const NameCard = ({ jsxname }) => {
    return (
        <div className='name-card'>
            <p className="result-name">{jsxname}</p>
        </div>
    );
};

export default NameCard;
