import { connect } from 'react-redux';
import { giveAnswer, proceed } from '../actions';
import Body from '../components/body.js';

const getProgress = (question, mode) => { return question - (mode === 'QUESTION' ? 1: 0); };

const mapStateToProps = (state) => {
  return {
    session: state.session,
    mode: state.mode,
    questionCount: state.questionCount,
    current: getProgress(state.questionNumber, state.mode),
    history: state.history, 
    duration: state.duration
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    onProceed: (restartNeeded) => dispatch(proceed(restartNeeded))
  } 
};

const VisibleBody = connect(
  mapStateToProps, 
  mapDispatchToProps
)(Body);

export default VisibleBody;
