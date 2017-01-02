import React, { PropTypes }  from 'react';

const Answer = ({question, isLast, onProceedClick, onShowResultClick}) => {
    let {answerResult, explanation, questionNumber} = question;
    let answer_text = answerResult ? 'ВЕРНО' : 'НЕВЕРНО';
    let next_question = <button onClick={() => onProceedClick(false, questionNumber)}>Следующий вопрос</button>;
    let last_question = <button onClick={() => onShowResultClick()}>Показать результаты</button>;
    return (
      <div>
        <p>Вы ответили на вопрос #{questionNumber}: {answer_text}</p>
        <p>{explanation}</p>
        {isLast ? next_question : last_question}
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
  onProceedClick: PropTypes.func.isRequired,
  onShowResultClick: PropTypes.func.isRequired
};

export default Answer;
