import React from 'react';
import { GAMESTATE, QUESTION_LIMIT, TIME_LIMIT } from '../models';

const getRemainingQuestions = (questionCount, loading) => QUESTION_LIMIT - (questionCount - (loading ? 0 : 1));
const getRemainingTime = (timer) => TIME_LIMIT - timer;

function QuizInfo({ questionCount, points, highScore, timer, gamestate }) {
    return (
        <ul className="QuizForm">
            <li>Remaining Questions: {getRemainingQuestions(questionCount, gamestate === GAMESTATE.LOADING)}</li>
            <li>High Score: {highScore}</li>
            <li>Current Points: {points}</li>
            <li>Question Points: {points || '1'}</li>
            <li>Timer: {getRemainingTime(timer)}</li>
        </ul>
    );
}

export default QuizInfo;
