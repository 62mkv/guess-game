import questions from '../stub/questions';

export const giveAnswer = (answer, questionNumber) => {
  return {
    type: 'ANSWER',
    explanation: questions[questionNumber-1].explanation,
    answerResult: answer === questions[questionNumber-1].answer
  }
};

function proceedFunction(restart, questionNumber) {
  return {
    type: 'PROCEED',
    restart, 
    questionCount: restart ? questions.length : null,
    question: questions[questionNumber-1].question,
    questionNumber
  }
}

export const proceed = (restartNeeded) => function(dispatch, getState){
  let questionNumber = restartNeeded ? 1 : getState().questionNumber+1;
  
  dispatch(proceedFunction(restartNeeded, questionNumber));
};

export const showResult = () => {
  return {
    type: 'SHOW_RESULT'
  }
};

export const setDuration = (duration) => {
  return {
    type: 'SET_DURATION',
    duration
  }
};

export const restart = () => {
  return {
    type: 'RESTART'
  }
};
