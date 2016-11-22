import React from 'react';
import questions from './Questions';

class Answer extends React.Component {
  render() {
    let question = questions[this.props.number-1];
    let answer_text = this.props.answer_kind ===  question.answer ? 'ВЕРНО' : 'НЕВЕРНО';
    let next_question = <button onClick={this.props.proceed}>Следующий вопрос</button>;
    let last_question = <button onClick={this.props.restart}>Спасибо за игру!</button>;
    let is_last = this.props.number < questions.length;
    return (
      <div>
        <p>Вы ответили на вопрос {answer_text}</p>
        <p>{question.explanation}</p>
        {is_last ? next_question : last_question}
      </div>
    );
  }
}

export default Answer;