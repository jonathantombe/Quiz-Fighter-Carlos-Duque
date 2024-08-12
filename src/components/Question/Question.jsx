import React, { useState } from 'react';
import './Question.css';

const Question = ({ question, options, onAnswer }) => {
    const [selectedOption, setSelectedOption] = useState(null);

    const handleSubmit = () => {
        if (selectedOption !== null) {
            onAnswer(selectedOption);
        }
    };

    return (
        <div className="question-container">
            <h2 className="question-text">{question}</h2>
            {options.map((option, index) => (
                <div key={index} className="option">
                    <input
                        type="radio"
                        id={`option-${index}`}
                        name="question"
                        value={option}
                        checked={selectedOption === option}
                        onChange={() => setSelectedOption(option)}
                        className="option-input"
                    />
                    <label htmlFor={`option-${index}`} className="option-label">
                        {option}
                    </label>
                </div>
            ))}
            <button onClick={handleSubmit} className="submit-button">
                Enviar
            </button>
        </div>
    );
};

export default Question;
