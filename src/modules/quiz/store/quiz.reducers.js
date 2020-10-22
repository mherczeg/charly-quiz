import { GAMESTATE } from '../models';

import {
START,
END,
UPDATE_ANSWER,
GET_NEXT_QUESTION,
GET_NEXT_QUESTION_SUCCESS,
START_TIMER,
TICK_TIMER,
PROGRESS_QUIZ,
} from './quiz.actions';

const initialState = {
    questionIds: [],
    activeQuestion: null,
    answer: '',
    timer: 0,
    timerId: 0,
    points: 0,
    gamestate: GAMESTATE.INITIAL,
    highScore: 0,
}

export function quizReducer(state = initialState, action) {
    switch (action.type) {
        case START:
            return { ...state, points: 0, gamestate: GAMESTATE.ACTIVE };
        case END:
            return { 
                ...initialState,
                points: state.points,
                gamestate: action.gamestate,
                highScore: Math.max(state.points, state.highScore),
            };

        case UPDATE_ANSWER:
            return { ...state, answer: action.answer };

        case GET_NEXT_QUESTION: 
            return { ...state, activeQuestion: null, answer: '', gamestate: GAMESTATE.LOADING };

        case GET_NEXT_QUESTION_SUCCESS: 
            return { ...state, 
                activeQuestion: action.question,
                questionIds: [ ...state.questionIds, action.question.id ],
                gamestate: GAMESTATE.ACTIVE,
            };

        case PROGRESS_QUIZ:
            const points = state.points ? state.points*2 : 1;
            return {
                ...state,
                points,
                highScore: Math.max(points, state.highScore),
            }

        case START_TIMER: 
            return { ...state, timer: 0, timerId: ++state.timerId };

        case TICK_TIMER: 
            return { ...state, timer: ++state.timer };

        default:
            return state
    }
}
