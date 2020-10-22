import { GAMESTATE } from '../models';

export const START = 'START';
export const END = 'END';

export const UPDATE_ANSWER = 'UPDATE_ANSWER';
export const SUBMIT_ANSWER = 'SUBMIT_ANSWER';

export const GET_NEXT_QUESTION = 'GET_NEXT_QUESTION';
export const GET_NEXT_QUESTION_SUCCESS = 'GET_NEXT_QUESTION_SUCCESS';
export const GET_NEXT_QUESTION_ERROR = 'GET_NEXT_QUESTION_ERROR';
export const PROGRESS_QUIZ = 'PROGRESS_QUIZ';

export const START_TIMER = 'START_TIMER';
export const STOP_TIMER = 'STOP_TIMER';
export const TICK_TIMER = 'TICK_TIMER';

export const start = () => ({ type: START });
export const won = () => ({ type: END, gamestate: GAMESTATE.WON });
export const lost = () => ({ type: END, gamestate: GAMESTATE.LOST });

export const updateAnswer = (answer) => ({ type: UPDATE_ANSWER, answer });
export const submitAnswer = () => ({ type: SUBMIT_ANSWER });

export const getNextQuestion = () => ({ type: GET_NEXT_QUESTION });
export const getNextQuestionSuccess = (question) => ({ type: GET_NEXT_QUESTION_SUCCESS, question });
export const getNextQuestionError = (error) => ({ type: GET_NEXT_QUESTION_ERROR, error });
export const progressQuiz = () => ({ type: PROGRESS_QUIZ });

export const startTimer = () => ({ type: START_TIMER });
export const stopTimer = () => ({ type: STOP_TIMER });
export const tickTimer = () => ({ type: TICK_TIMER });


