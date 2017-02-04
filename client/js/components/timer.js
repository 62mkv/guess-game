import React, { PropTypes } from 'react';
import { splitSeconds } from '../utils';

class Timer extends React.Component {

    constructor(props) {
      super(props);
      this.state = { duration: props.duration };
      this.setDuration = props.setDuration;
    }

    tick() {
      this.setState({ duration: this.state.duration+0.1});
    }

    componentDidMount() {
      this.timerID = setInterval(
        () => this.tick(),
        100
      );
    }

    componentWillUnmount() {
      clearInterval(this.timerID);
      this.setDuration(this.state.duration);
    }

    render() {
      let {min, sec} = splitSeconds(this.state.duration);
      return (
        <div>{min}:{sec}</div>
      ) 
    }
}

Timer.propTypes = {
  duration: PropTypes.number.isRequired,
  setDuration: PropTypes.func.isRequired
}

export default Timer;