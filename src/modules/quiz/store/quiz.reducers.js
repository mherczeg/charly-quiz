import { GAMESTATE } from '../models';

import {
START,
END,
UPDATE_ANSWER,
// SUBMIT_ANSWER,
GET_NEXT_QUESTION,
GET_NEXT_QUESTION_SUCCESS,
// GET_NEXT_QUESTION_ERROR,
START_TIMER,
// STOP_TIMER,
TICK_TIMER,
} from './quiz.actions';

const initialState = {
    questionIds: [],
    activeQuestion: null,
    answer: '',
    timer: 0,
    timerId: 0,
    points: 0,
    gamestate: GAMESTATE.INITIAL,
}

export function quizReducer(state = initialState, action) {
    switch (action.type) {
        case START:
            return { ...state, gamestate: GAMESTATE.ACTIVE };
        case END:
            return { ...initialState, points: state.points, gamestate: action.gamestate };

        case UPDATE_ANSWER:
            return { ...state, answer: action.answer };

        case GET_NEXT_QUESTION: 
            return { ...state, activeQuestion: null, answer: '', gamestate: GAMESTATE.LOADING };

        case GET_NEXT_QUESTION_SUCCESS: 
            return { ...state, activeQuestion: action.quesion, questionIds: [ ...state.questionIds, action.question.id ] };

        case START_TIMER: 
            return { ...state, timer: 0, timerId: ++state.timerId };

        case TICK_TIMER: 
            return { ...state, timer: ++state.timer };

        default:
            return state
    }
}
