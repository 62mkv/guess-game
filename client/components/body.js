import React from 'react';
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
      if (this.state.mode === 'QUESTION') {
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

export default Body;
