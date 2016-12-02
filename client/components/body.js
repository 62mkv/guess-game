import React, { PropTypes }  from 'react';
import Question from './Question';
import Answer from './Answer';
import Progress from './Progress';
import questions from '../stub/Questions';
import About from './About';

const Body = ({session, mode, question_number, last_answer, current, history, onAnswerClick, onProceedClick}) => {
    if (session) { 
      var progress = <Progress current={current} 
                      len={questions.length} history={history} />;
      const current_question = questions[question_number-1];
      var body_content;      
      if (mode === 'QUESTION') {
        body_content = (
          <Question question={current_question.question} number={question_number} answerClick={onAnswerClick} />
        );
      } else {
         body_content = (
          <Answer number={question_number} answer_kind={last_answer} question={current_question.question} explanation={current_question.explanation} answer={current_question.answer}
             is_last={question_number < questions.length} proceed={onProceedClick} />
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

Body.propTypes = {
 session: PropTypes.bool, 
 mode: PropTypes.string, 
 question_number: PropTypes.string, 
 last_answer: PropTypes.string, 
 current: PropTypes.integer, 
 history: PropTypes.arrayOf(PropTypes.bool),
 onAnswerClick: PropTypes.func.isRequired, 
 onProceedClick: PropTypes.func.isRequired  
};

export default Body;
