import React, {PropTypes} from 'react';
import Timer from './timer';

const Question = function({question, number, answerClick}) {
  return (
    <div>
      <div>This is Question #{parseInt(number)}</div>
      <div><Timer seconds={0} /></div>
      <div><strong>{question}</strong></div>
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
