import { 
    getNextQuestion, 
    getNextQuestionError, 
    getNextQuestionSuccess, 
    GET_NEXT_QUESTION, 
    GET_NEXT_QUESTION_SUCCESS, 
    lost, 
    progressQuiz, 
    PROGRESS_QUIZ, 
    START, 
    startTimer, 
    START_TIMER, 
    SUBMIT_ANSWER, 
    tickTimer,
    TICK_TIMER,
    won,
} from "./quiz.actions";
import { from, of } from 'rxjs';
import { filter, map, switchMap, delay } from 'rxjs/operators';
import { getRandomQuestion } from "../../../lib/api";
import { QUESTION_LIMIT, TIME_LIMIT } from "../models";

const validateAnswer = ({ activeQuestion, answer }) => answer.toLowerCase() === activeQuestion.answer.toLowerCase()

const startEpic = action$ => action$.pipe(
    filter(action => action.type === START),
    map(() => getNextQuestion()),
);

const getQuestionEpic = action$ => action$.pipe(
    filter(action => action.type === GET_NEXT_QUESTION),
    switchMap(() => from(getRandomQuestion()
        .then(([ question ]) => getNextQuestionSuccess(question))
        .catch((error) => getNextQuestionError(error))
    )),
);

const startTimerEpic = action$ => action$.pipe(
    filter(action => action.type === GET_NEXT_QUESTION_SUCCESS),
    map(() => startTimer()),
);

const progressTimerEpic = (action$, state$) => action$.pipe(
    filter(action => [START_TIMER, TICK_TIMER].includes(action.type)),
    switchMap(() => {
        const timerId = state$.value.quiz.timerId;
        return of(true).pipe(
            delay(1000),
            // need to make sure no new timers have been started since this increment has been queued
            filter(() => timerId === state$.value.quiz.timerId), 
            map(() => state$.value.quiz.timer < TIME_LIMIT ? tickTimer() : lost()),
        )
    }),
);

const questionAnsweredEpic = (action$, state$) => action$.pipe(
    filter(action => action.type === SUBMIT_ANSWER),
    map(() => validateAnswer(state$.value.quiz) ? progressQuiz() : lost()),
);

const progressQuizEpic = (action$, state$) => action$.pipe(
    filter(action => action.type === PROGRESS_QUIZ),
    map(() => state$.value.quiz.questionIds.length === QUESTION_LIMIT ? won() : getNextQuestion()),
);

export default [
    startEpic,
    getQuestionEpic,
    startTimerEpic,
    progressTimerEpic,
    questionAnsweredEpic,
    progressQuizEpic,
];