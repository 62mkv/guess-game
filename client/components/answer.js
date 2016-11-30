import React from 'react';

const Answer = ({number, answer_kind, question, explanation, answer, is_last, proceed}) => {
    let answer_text = answer_kind ===  answer ? 'ВЕРНО' : 'НЕВЕРНО';
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


export default Answer;