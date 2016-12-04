import React, { PropTypes } from 'react';

class Progress extends React.Component {

  calculate_progress() {
    return this.props.history.reduce((sum, answer) => { return answer ? sum + 1: sum }, 0);
  }

  render() {
    var tail = new Array(this.props.len - this.props.history.length);
    tail.fill(null);
    const items = this.props.history.concat( tail );
    const answer_results = items.map((answer) => {return ( answer === null ? "unknown" : ( answer ? "correct" : "wrong" ))});
    const answers = answer_results.map((result, index) => {
      let classes = `answer answer_${result}`;
      return (<div key={index} className={classes} />)
    });
    return (
      this.props.current > 0 ? 
        <div>{answers}</div> :
        <div />
    );
  }
}

Progress.propTypes = {
  len: PropTypes.number.isRequired,
  history: PropTypes.arrayOf(PropTypes.bool.isRequired),
  current: PropTypes.number.isRequired
};

export default Progress;
