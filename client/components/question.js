import React, {PropTypes} from 'react';
import VisibleTimer from '../containers/timer';
import { OURS, THEIRS } from '../const';

function Question({question, number, duration, onAnswerClick}) {
  return (
    <div>
      <div>This is Question #{parseInt(number)}</div>
      <div><VisibleTimer duration={duration} /></div>
      <div><strong>{question}</strong></div>
      <button onClick={() => onAnswerClick(OURS, number)}>Наше</button>
      <button onClick={() => onAnswerClick(THEIRS, number)}>Не наше</button>
    </div>
  );
}

Question.propTypes = {
 question: PropTypes.string.isRequired, 
 number: PropTypes.number.isRequired,
 duration: PropTypes.number.isRequired,
 onAnswerClick: PropTypes.func.isRequired 
};

export default Question;
