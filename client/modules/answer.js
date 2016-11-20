import React from 'react';

class Answer extends React.Component {
  render() {
    let answer_text = this.props.answer_kind === 'OURS' ? 'ВЕРНО' : 'НЕВЕРНО';
    return (
      <div>
        <p>Вы ответили на вопрос {answer_text}</p>
        <button onClick={this.props.proceed}>Следующий вопрос</button>
      </div>
    );
  }
}

export default Answer;