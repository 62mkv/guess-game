import React, {PropTypes} from 'react';

const Question = function({question, number, answerClick}) {
  return (
    <div>
      <p>This is Question #{parseInt(number)}</p>
      <p><strong>{question}</strong></p>
      <button onClick={() => answerClick('OURS')}>Наше</button>
      <button onClick={() => answerClick('THEIRS')}>Не наше</button>
    </div>
  );
};

Question.propTypes = {
 question: PropTypes.string.isRequired, 
 number: PropTypes.number.isRequired,
 answerClick: PropTypes.func.isRequired 
};

export default Question;
