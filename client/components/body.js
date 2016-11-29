import React from 'react';
import Question from './Question';
import Answer from './Answer';
import Progress from './Progress';
import questions from '../stub/Questions';

const Body = ({session, mode, question_number, last_answer, current, history, onAnswerClick, onProceedClick}) => {
    if (session) { 
      var progress = <Progress current={current} 
                      len={questions.length} history={history} />;

      if (this.state.mode === 'QUESTION') {
        var body_content = (
          <Question question={questions[question_number-1].question} number={question_number} answerClick={onAnswerClick} />
        );
      } else {
        var body_content = (
          <Answer number={question_number} answer_kind={last_answer} 
             proceed={onProceedClick} />
        );
      }
      return (
        <div>{progress}<br />{body_content}</div>
      ); 
    } else {
      return (
        <div>
          <About proceed={onProceedClick} />
        </div>
      );
    }
};

export default Body;
