import React from 'react';

class Answer extends React.Component {
  render() {
    let answer_text = this.props.answer_kind === 'OURS' ? 'ВЕРНО' : 'НЕВЕРНО';
    let next_question = <button onClick={this.props.proceed}>Следующий вопрос</button>;
    let last_question = <button onClick={this.props.restart}>Спасибо за игру!</button>;
    return (
      <div>
        <p>Вы ответили на вопрос {answer_text}</p>
        {this.props.is_last ? next_question : last_question}
      </div>
    );
  }
}

export default Answer;