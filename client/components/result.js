import React, { PropTypes } from 'react';
import { splitSeconds } from '../utils';

const Result = function({properAnswerCount, totalQuestionCount, duration, proceed}) {
  let { min, sec} = splitSeconds(duration);
  return (
    <div>
       Вы правильно ответили на {properAnswerCount} из {totalQuestionCount} вопросов за {min} минут {sec} секунд! ПОЗДРАВЛЯЕМ !
       <button onClick={() => proceed(true, 1)}>Начать снова</button>
    </div>
  );
};

Result.propTypes = {
  properAnswerCount: PropTypes.number.isRequired,
  totalQuestionCount: PropTypes.number.isRequired,
  duration: PropTypes.number.isRequired,
  proceed: PropTypes.func.isRequired
};

export default Result;