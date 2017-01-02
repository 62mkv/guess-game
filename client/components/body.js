import React, { PropTypes }  from 'react';
import VisibleQuestion from '../containers/question';
import VisibleAnswer from '../containers/answer';
import Progress from './progress';
import About from './about';
import Result from './result';

const Body = function({session, mode, current, questionCount, history, duration, onProceed}) {
  if (session) { 
      var progress = <Progress current={current} 
                      len={questionCount} history={history} />;
      var body_content;      
      if (mode === 'QUESTION') {
        body_content = (
          <VisibleQuestion />
        );
      } else if (mode === 'ANSWER') {
         body_content = (
          <VisibleAnswer />
        );
      } else {
         let properAnswerCount = history.reduce((sum, answer) => { return sum + (answer ? 1 : 0) }, 0);
         body_content = (
          <Result properAnswerCount={properAnswerCount} 
                  totalQuestionCount={questionCount} 
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
 session: PropTypes.bool.isRequired, 
 mode: PropTypes.string.isRequired, 
 current: PropTypes.number.isRequired, 
 questionCount: PropTypes.number.isRequired,
 history: PropTypes.arrayOf(PropTypes.bool),
 duration: PropTypes.number.isRequired,
 onProceed: PropTypes.func.isRequired
};

export default Body;

