import { configureStore } from '@reduxjs/toolkit';
import { quizReducer } from './modules/quiz/store/quiz.reducers';

export default configureStore({
    reducer: {
        quiz: quizReducer
    },
});
