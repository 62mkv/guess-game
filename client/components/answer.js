import React, { PropTypes }  from 'react';

const Answer = ({question, isLast, onShowResultClick, onProceedClick, onRestartClick}) => {
    let {answerResult, explanation, questionNumber} = question;
    let answer_text = answerResult ? 'ВЕРНО' : 'НЕВЕРНО';
    let next_question = <button className="btn btn-link" onClick={() => onProceedClick(false)}>Следующий вопрос</button>;
    let last_question = <button className="btn btn-link" onClick={() => onShowResultClick()}>Показать результаты</button>;
    return (
      <div>
        <p>Вы ответили на вопрос #{questionNumber}: {answer_text}</p>
        <p>{explanation}</p>
        <div className="row justify-content-center">
          {isLast ? next_question : last_question}
        </div>
        <div className="row justify-content-end">
          <div className="col-3"> 
            <button className="btn btn-link" onClick={() => onProceedClick(true)}>Начать заново</button> 
          </div>
          <div className="col-3"> 
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
