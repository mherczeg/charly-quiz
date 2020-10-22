import React from 'react';
import { useDispatch } from 'react-redux';
import { start } from '../store/quiz.actions';

function StartCTA() {
    const dispatch = useDispatch();

    return (
        <div className="StartCTA">
            <button onClick={() => dispatch(start())}>Start!</button>
        </div>
    );
}

export default StartCTA;
