import React, {PropTypes} from 'react';
import VisibleTimer from '../containers/timer';
import { OURS, THEIRS } from '../const';

function Question({question, number, duration, onAnswerClick}) {
  return (
    <div>
      <div className="row justify-content-between">
        <div className="col-3">Вопрос #{parseInt(number)}:</div>
        <div className="col-3 text-right"><VisibleTimer duration={duration} /></div>
      </div>
      <div className="row justify-content-center">
        <div className="col text-center"><h1>{question}</h1></div>
      </div>  
      <div className="row justify-content-center">
       
        <div className="col-4 text-right">
          <button className="btn btn-link" onClick={() => onAnswerClick(OURS, number)}>Наше</button>
        </div>
        <div className="col-4 text-left">
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
