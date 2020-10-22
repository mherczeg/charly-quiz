import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { GAMESTATE } from '../models';
import { start } from '../store/quiz.actions';
import { endScoreDataSelecor } from '../store/quiz.selectors';

function EndScore() {
    const { gamestate } = useSelector(endScoreDataSelecor);
    const dipsatch = useDispatch();

    return (
        <div className="EndScore">
            <div className="EndScore-message">
                {gamestate === GAMESTATE.WON && 'You Won!'}
                {gamestate === GAMESTATE.LOST && 'Game Over'}
            </div>
            <button onClick={() => dipsatch(start())}>Restart</button>
        </div>
    );
}

export default EndScore;
