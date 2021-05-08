import React from 'react';
import NameCard from "./NameCard";
import '../style.css'

const ResultContainer = ({ suggestedName }) => {
    const Namesjsx = suggestedName.map((jsxname) => {
        return <NameCard key={jsxname} jsxname={jsxname} />
    });
    return (
        <div className="results-container">
            {Namesjsx}
        </div>
    );
};

export default ResultContainer;
