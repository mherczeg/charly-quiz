import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { combineEpics, createEpicMiddleware } from 'redux-observable';
import { quizReducer } from './modules/quiz/store/quiz.reducers';
import quizEpics from './modules/quiz/store/quiz.epics';

const epics = [ ...quizEpics, ]

const rootEpic = combineEpics(...epics);
  
const rootReducer = combineReducers({
    quiz: quizReducer
});

const epicMiddleware = createEpicMiddleware();

const store = configureStore({
    reducer: rootReducer,
    middleware: [epicMiddleware],
});

epicMiddleware.run(rootEpic);

export default store;
