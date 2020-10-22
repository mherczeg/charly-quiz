export const quizFormDataSelecor = ({ quiz }) => ({
    gamestate: quiz.gamestate,
    questionCount: quiz.questionIds.length,
    points: quiz.points,
    answer: quiz.answer,
    timer: quiz.timer,
    highScore: quiz.highScore,
    question: quiz.activeQuestion ? quiz.activeQuestion.question : ''
})

export const endScoreDataSelecor = ({quiz}) => ({
    gamestate: quiz.gamestate
})