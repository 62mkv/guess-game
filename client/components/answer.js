import React, { PropTypes }  from 'react';

const Answer = ({answerGiven, answerExpected, explanation, number, isLast, proceed, showResult}) => {
    let answer_text = answerGiven == answerExpected ? 'ВЕРНО' : 'НЕВЕРНО';
    let next_question = <button onClick={() => proceed(false)}>Следующий вопрос</button>;
    let last_question = <button onClick={() => showResult()}>Показать результаты</button>;
    return (
      <div>
        <p>Вы ответили на вопрос #{number}: {answer_text}</p>
        <p>{explanation}</p>
        {isLast ? next_question : last_question}
      </div>
    );
}

Answer.propTypes = {
  answerGiven: PropTypes.string.isRequired,
  answerExpected: PropTypes.string.isRequired,
  explanation: PropTypes.string.isRequired,
  number: PropTypes.number.isRequired,
  isLast: PropTypes.bool.isRequired,
  proceed: PropTypes.func.isRequired,
  showResult: PropTypes.func.isRequired
};

export default Answer;
