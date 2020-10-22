import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { GAMESTATE } from '../models';
import { submitAnswer, updateAnswer } from '../store/quiz.actions';
import { quizFormDataSelecor } from '../store/quiz.selectors';
import QuestionField from './QuestionField';
import QuizInfo from './QuizInfo';

function QuizForm() {
    const dispath = useDispatch();
    const { gamestate, answer, question, points, questionCount, timer, highScore } = useSelector(quizFormDataSelecor);
    const infoProps = { questionCount, points, highScore, timer, gamestate };

    return (
        <div className="QuizForm">
            <QuizInfo {...infoProps} />
            {gamestate === GAMESTATE.LOADING ?
                'Fetching Question... ' :
                <QuestionField question={question}
                    answer={answer}
                    onChange={(e) => dispath(updateAnswer(e.target.value))}
                    onSubmit={() => dispath(submitAnswer())} />}
        </div>
    );
}

export default QuizForm;
