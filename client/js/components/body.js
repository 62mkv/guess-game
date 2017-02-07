import React, { PropTypes }  from 'react';
import VisibleQuestion from '../containers/question';
import VisibleAnswer from '../containers/answer';
import Progress from './progress';
import About from './about';
import Result from './result';

const Body = function({session, mode, current, questionCount, history, duration, onProceed}) {

  var body_content;      

  if (session) { 
    var progress = <Progress current={current} 
                    len={questionCount} history={history} />;
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
                proceed={onProceed} />
       );
    }

    body_content = <div>{progress}<br />{body_content}</div>;
   
  } else {
    body_content = <About proceed={onProceed} />;
  }

  return (
        <div>
          {body_content}
        </div>
  )

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

