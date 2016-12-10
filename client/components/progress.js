import React, { PropTypes } from 'react';

const Progress = function({len, history, current}){

    var tail = new Array(len - history.length);
    tail.fill(null);
    const items = history.concat( tail );
    const answer_results = items.map((answer) => {return ( answer === null ? "unknown" : ( answer ? "correct" : "wrong" ))});
    const answers = answer_results.map((result, index) => {
      let classes = `answer answer_${result}`;
      return (<div key={index} className={classes} />)
    });
    return (
      current > 0 ? 
        <div>{answers}</div> :
        <div />
    );
  };

Progress.propTypes = {
  len: PropTypes.number.isRequired,
  history: PropTypes.arrayOf(PropTypes.bool.isRequired),
  current: PropTypes.number.isRequired
};

export default Progress;
