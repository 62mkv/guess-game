import React, {PropTypes} from 'react';
import VisibleTimer from '../containers/timer';

function Question({question, number, duration, answerClick}) {
  return (
    <div>
      <div>This is Question #{parseInt(number)}</div>
      <div><VisibleTimer duration={duration} /></div>
      <div><strong>{question}</strong></div>
      <button onClick={() => answerClick('OURS', number)}>Наше</button>
      <button onClick={() => answerClick('THEIRS', number)}>Не наше</button>
    </div>
  );
}

Question.propTypes = {
 question: PropTypes.string.isRequired, 
 number: PropTypes.number.isRequired,
 duration: PropTypes.number.isRequired,
 answerClick: PropTypes.func.isRequired 
};

export default Question;
