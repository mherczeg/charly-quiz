import React from 'react';
import { useSelector } from 'react-redux'
import EndScore from './components/EndScore';
import QuizForm from './components/QuizForm';
import StartCTA from './components/StartCTA';
import { GAMESTATE } from './models';

const QuizContentSwitch = ({ gamestate }) => {
    switch (gamestate) {
        case GAMESTATE.ACTIVE:
        case GAMESTATE.LOADING:
            return <QuizForm />;
        case GAMESTATE.LOST:
        case GAMESTATE.WON:
            return <EndScore />;
        case GAMESTATE.INITIAL:
        default:
            return <StartCTA />;
    }
}

function Quiz() {
    const gamestate = useSelector(({ quiz }) => quiz.gamestate);

    return (
        <div className="Quiz">
            <QuizContentSwitch gamestate={gamestate} />
        </div>
    );
}

export default Quiz;
