import { connect } from 'react-redux';
import { giveAnswer, proceed } from '../actions';
import Body from '../components/body.js';

const getProgress = (question, mode) => { return question - (mode === 'QUESTION' ? 1: 0); };

const mapStateToProps = (state) => {
  return {
    session: state.session,
    mode: state.mode,
    questionNumber: state.questionNumber, 
    questionCount: state.questionCount,
    current: getProgress(state.questionNumber, state.mode),
    history: state.history, 
    duration: state.duration
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    onAnswer: (answer, questionNumber) => dispatch(giveAnswer(answer, questionNumber)),
    onProceed: (restartNeeded, questionNumber) => dispatch(proceed(restartNeeded, questionNumber))
  } 
};

const VisibleBody = connect(
  mapStateToProps, 
  mapDispatchToProps
)(Body);

export default VisibleBody;
