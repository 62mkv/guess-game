import questions from '../stub/questions';

export const giveAnswer = (answer, question) => {
  return {
    type: 'ANSWER',
    answer_given: answer, 
    answer_result: answer === questions[question-1].answer
  }
};

export const proceed = (restart_needed) => {
  return {
    type: 'PROCEED',
    restart: restart_needed
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
