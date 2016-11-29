import React from 'react';
import questions from '../stub/Questions';

class Question extends React.Component {
  let { question, number, answerClick } = this.props;
  render() {
    return (
      <div>
        <p>This is Question #{parseInt(number)}</p>
        <p><strong>{question}</strong></p>
        <button onClick={() => answerClick('OURS')}>Наше</button>
        <button onClick={() => answerClick('THEIRS')}>Не наше</button>
      </div>
    );
  }
}

export default Question;
