import React from 'react';

function QuestionField({ question, answer, onChange, onSubmit }) {
    return (
        <div className="QuestionField">
            <div className="QuestionField-question">Question: {question}</div>
            <input type="text"
                className="QuestionField-input"
                value={answer}
                onChange={onChange} /> 
            <button className="QuestionField-submit" onClick={onSubmit}>Submit!</button>
        </div>
    );
}

export default QuestionField;
