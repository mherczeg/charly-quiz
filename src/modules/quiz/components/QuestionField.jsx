import React from 'react';

function QuestionField({ question, answer, onChange, onSubmit }) {
    return (
        <div className="QuestionForm">
            <div>Question: {question}</div>
            <input type="text"
                value={answer}
                onChange={onChange}
                className="QuestionForm-input" /> 
            <button onClick={onSubmit}>Submit!</button>
        </div>
    );
}

export default QuestionField;
