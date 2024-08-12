import React from 'react';
import './Character.css';

const Character = ({ name, health }) => {
    return (
        <div className="character">
            <div className="character-name">{name}</div>
            <div className="health-bar">
                <div className="health-bar-inner" style={{ width: `${health}%` }}></div>
            </div>
        </div>
    );
};

export default Character;
