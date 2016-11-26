import React from 'react';

class Progress extends React.Component {

  calculate_progress() {
    return this.props.history.reduce((sum, answer) => { return answer ? sum + 1: sum }, 0);
  }

  render() {
    return (
      this.props.current > 0 ? 
        <div> Вы ответили на {this.props.current} из {this.props.len} вопросов, и набрали {this.calculate_progress()} баллов!</div> :
        <div />
    );
  }
}

export default Progress;
