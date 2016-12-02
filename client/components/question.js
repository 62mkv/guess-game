import React from 'react';
import questions from '../stub/Questions';

const Question = (question, number, answerClick) => {
  return (
    <div>
      <p>This is Question #{parseInt(number)}</p>
      <p><strong>{question}</strong></p>
      <button onClick={() => answerClick('OURS')}>Наше</button>
      <button onClick={() => answerClick('THEIRS')}>Не наше</button>
    </div>
  );
};

export default Question;
