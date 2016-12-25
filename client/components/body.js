import React, { PropTypes }  from 'react';
import Question from './question';
import Answer from './answer';
import Progress from './progress';
import questions from '../stub/questions';
import About from './about';
import Result from './result';

const Body = function({session, mode, questionNumber, 
                       lastAnswer, current, history, duration, 
                       onAnswer, onProceed, onShowResult}) {
  if (session) { 
      var progress = <Progress current={current} 
                      len={questions.length} history={history} />;
      const current_question = questions[questionNumber-1];
      var body_content;      
      if (mode === 'QUESTION') {
        body_content = (
          <Question question={current_question.question} number={questionNumber} 
                    duration={duration} answerClick={onAnswer} />
        );
      } else if (mode === 'ANSWER') {
         body_content = (
          <Answer answerGiven={lastAnswer} answerExpected={current_question.answer} explanation={current_question.explanation} 
             number={questionNumber} isLast={questionNumber < questions.length} proceed={onProceed} showResult={onShowResult}/>
        );
      } else {
         let properAnswerCount = history.reduce((sum, answer) => { return answer ? sum + 1: sum }, 0);
         body_content = (
          <Result properAnswerCount={properAnswerCount} 
                  totalQuestionCount={questions.length} 
                  duration={duration}
                  proceed={onProceed}> </Result>
         );
      }

      return (
        <div>{progress}<br />{body_content}</div>
      ); 
  } else {
      return (
        <div>
          <About proceed={onProceed} />
        </div>
      );
  }
};

Body.propTypes = {
 session: PropTypes.bool, 
 mode: PropTypes.string, 
 questionNumber: PropTypes.number, 
 lastAnswer: PropTypes.string, 
 current: PropTypes.number, 
 history: PropTypes.arrayOf(PropTypes.bool),
 duration: PropTypes.number.isRequired,
 onAnswer: PropTypes.func.isRequired, 
 onProceed: PropTypes.func.isRequired,  
 onShowResult: PropTypes.func.isRequired
};

export default Body;

