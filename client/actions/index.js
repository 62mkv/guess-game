export const giveAnswer = (answer) => {
  return {
    type: 'ANSWER',
    answer_kind: answer
  }
};

export const proceed = () => {
  return {
    type: 'PROCEED',
  }
};
