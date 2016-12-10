import React, { PropTypes }  from 'react';

const Answer = ({answer_given, answer_expected, explanation, number, is_last, proceed}) => {
    let answer_text = answer_given == answer_expected ? 'ВЕРНО' : 'НЕВЕРНО';
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
  answer_given: PropTypes.string.isRequired,
  answer_expected: PropTypes.string.isRequired,
  explanation: PropTypes.string.isRequired,
  number: PropTypes.number.isRequired,
  is_last: PropTypes.bool.isRequired,
  proceed: PropTypes.func.isRequired
};

export default Answer;
