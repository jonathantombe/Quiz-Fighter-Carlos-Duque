import React from 'react';
import './Result.css';

const Result = ({ winner }) => {
    return (
        <div className="result-container">
            <h2 className="result-text">
                {winner ? `${winner} ¡Gana!` : "¡Es un empate!"}
            </h2>
        </div>
    );
};

export default Result;

