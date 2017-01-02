import questions from '../stub/questions';

export const giveAnswer = (answer, questionNumber) => {
  return {
    type: 'ANSWER',
    explanation: questions[questionNumber-1].explanation,
    answerResult: answer === questions[questionNumber-1].answer
  }
};

export const proceed = (restartNeeded, questionNumber) => {
  return {
    type: 'PROCEED',
    restart: restartNeeded, 
    questionCount: restartNeeded ? questions.length : null,
    question: questions[questionNumber-1].question
  }
};

export const showResult = () => {
  return {
    type: 'SHOW_RESULT'
  }
};

export const setDuration = (value) => {
  return {
    type: 'SET_DURATION',
    duration: value
  }
};
