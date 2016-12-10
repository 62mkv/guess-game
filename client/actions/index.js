export const giveAnswer = (answer) => {
  return {
    type: 'ANSWER',
    answer_given: answer
  }
};

export const proceed = (restart_needed) => {
  return {
    type: 'PROCEED',
    restart: restart_needed
  }
};
