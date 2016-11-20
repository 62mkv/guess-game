import React from 'react';

class Question extends React.Component {
  render() {
    return (
      <div>
        <p>This is Question #{parseInt(this.props.number)}</p>
        <button onClick={this.props.answers[0]}>Наше</button>
        <button onClick={this.props.answers[1]}>Не наше</button>
      </div>
    );
  }
}

export default Question;
