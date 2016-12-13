import React, { PropTypes } from 'react';

const Result = function({properAnswerCount, totalQuestionCount, proceed}) {
  return (
    <div>
       Вы правильно ответили на {properAnswerCount} из {totalQuestionCount} вопросов! ПОЗДРАВЛЯЕМ !
       <button onClick={() => proceed(true)}>Начать снова</button>
    </div>
  );
};

Result.propTypes = {
  properAnswerCount: PropTypes.number.isRequired,
  totalQuestionCount: PropTypes.number.isRequired,
  proceed: PropTypes.func.isRequired
};

export default Result;