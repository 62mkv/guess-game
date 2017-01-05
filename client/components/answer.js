import React, { PropTypes }  from 'react';

const Answer = ({question, isLast, onShowResultClick, onProceedClick, onRestartClick}) => {
    let {answerResult, explanation, questionNumber} = question;
    let answer_text = answerResult ? 'ВЕРНО' : 'НЕВЕРНО';
    let next_question = <button onClick={() => onProceedClick(false)}>Следующий вопрос</button>;
    let last_question = <button onClick={() => onShowResultClick()}>Показать результаты</button>;
    return (
      <div>
        <p>Вы ответили на вопрос #{questionNumber}: {answer_text}</p>
        <p>{explanation}</p>
        {isLast ? next_question : last_question}
        <button onClick={() => onProceedClick(true)}>Начать заново</button>
        <button onClick={() => onRestartClick()}>Вернуться на стартовую страницу</button>
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
