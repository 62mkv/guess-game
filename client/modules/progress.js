import React from 'react';

class Progress extends React.Component {

  calculate_progress() {
    return this.props.history.reduce((sum, answer) => { return answer ? sum + 1: sum }, 0);
  }

  render() {
    var tail = new Array(this.props.len - this.props.history.length);
    tail.fill(null);
    const items = this.props.history.concat( tail );
    const answer_results = items.map((answer) => {return ( answer === null ? "unknown" : ( answer ? "correct" : "wrong" ))});
    const answers = answer_results.map((result) => {
      let classes = `answer answer_${result}`;
      return (<div className={classes} />)
    });
    return (
      this.props.current > 0 ? 
        <div>{answers}</div> :
        <div />
    );
  }
}

export default Progress;
