import React, {PropTypes} from 'react';
import VisibleTimer from '../containers/timer';
import { OURS, THEIRS } from '../const';

function Question({question, number, duration, onAnswerClick}) {
  return (
    <div>
      <div className="row">
        <div className="col">Вопрос #{parseInt(number)}:</div>
        <div className="col"><VisibleTimer duration={duration} /></div>
      </div>
      <div className="row">
        <div><strong>{question}</strong></div>
      </div>  
      <div className="row justify-content-center">
       
        <div className="col-2">
          <button className="btn btn-link" onClick={() => onAnswerClick(OURS, number)}>Наше</button>
        </div>
        <div className="col-2">
          <button className="btn btn-link" onClick={() => onAnswerClick(THEIRS, number)}>Не наше</button>
        </div>
      </div>
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
