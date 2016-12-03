import React, { PropTypes }  from 'react';

const Answer = ({number, answer_kind, question, explanation, answer, is_last, proceed}) => {
    let answer_text = answer_kind == answer ? 'ВЕРНО' : 'НЕВЕРНО';
    let next_question = <button onClick={() => proceed(false)}>Следующий вопрос</button>;
    let last_question = <button onClick={() => proceed(true)}>Спасибо за игру!</button>;
    return (
      <div>
        <p>Вы ответили на вопрос #{number}: {answer_text}</p>
        <p>{explanation}</p>
        {is_last ? next_question : last_question}
      </div>
    );
}

Answer.propTypes = {
  number: PropTypes.number.isRequired,
  answer_kind: PropTypes.number.isRequired,
  question: PropTypes.string.isRequired,
  explanation: PropTypes.string.isRequired,
  answer: PropTypes.number.isRequired,
  is_last: PropTypes.bool.isRequired,
  proceed: PropTypes.func.isRequired
};

export default Answer;