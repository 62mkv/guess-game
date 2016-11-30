export const giveAnswer = (answer) => {
  return {
    type: 'ANSWER',
    answer_kind: answer
  }
};

export const proceed = (restart_needed) => {
  return {
    type: 'PROCEED',
    restart: restart_needed
  }
};
