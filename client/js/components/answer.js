import React, { PropTypes }  from 'react';

const Answer = ({question, isLast, onShowResultClick, onProceedClick, onRestartClick}) => {
    let {answerResult, explanation, questionNumber} = question;
    let answer_text = answerResult ? 'ВЕРНО' : 'НЕВЕРНО';
    let next_question = <button className="btn btn-primary" onClick={() => onProceedClick(false)}>Следующий вопрос</button>;
    let last_question = <button className="btn btn-primary" onClick={() => onShowResultClick()}>Показать результаты</button>;
    return (
      <div>
        <p>Вы ответили на вопрос #{questionNumber}: {answer_text}</p>
        <div className="row justify-content-center">
          <div className="col justify"><p>{explanation}</p></div>
        </div>
        <div className="row justify-content-center">
          {isLast ? next_question : last_question}
        </div>
        <div className="row justify-content-end">
          <div className="col-sm-6"> 
            <button className="btn btn-link" onClick={() => onProceedClick(true)}>Начать заново</button> 
          </div>
        </div>
        <div className="row justify-content-end">
          <div className="col-sm-6"> 
            <button className="btn btn-link" onClick={() => onRestartClick()}>Вернуться на стартовую страницу</button> 
          </div>
        </div>
      </div>
    );
}

Answer.propTypes = {
  question: PropTypes.shape({
    answerResult: PropTypes.bool, 
    explanation: PropTypes.string, 
    questionNumber: PropTypes.number
  }),
  isLast: PropTypes.bool.isRequired,
  onShowResultClick: PropTypes.func.isRequired,
  onProceedClick: PropTypes.func.isRequired,
  onRestartClick: PropTypes.func.isRequired
};

export default Answer;
