import React, { PropTypes } from 'react';
import { splitSeconds } from '../utils';

class Timer extends React.Component {

    constructor(props) {
      super(props);
      this.state = { seconds: props.seconds };
    }

    tick() {
      this.setState({ seconds: this.state.seconds+1});
    }

    componentDidMount() {
      this.timerID = setInterval(
        () => this.tick(),
        1000
      );
    }

    componentWillUnmount() {
      clearInterval(this.timerID);
    }

    render() {
      let {min, sec} = splitSeconds(this.state.seconds);
      return (
          <div>{min}:{sec}</div>
      ) 
    }
}

Timer.propTypes = {
  seconds: PropTypes.number.isRequired
}

export default Timer;