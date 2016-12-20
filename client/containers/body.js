import { connect } from 'react-redux';
import { giveAnswer, proceed, showResult } from '../actions';
import Body from '../components/body.js';

const getProp = (prop) => { return prop };

const getProgress = (question, mode) => { return question - (mode === 'QUESTION' ? 1: 0); };

const mapStateToProps = (state) => {
  return {
    session: getProp(state.session),
    mode: getProp(state.mode),
    questionNumber: getProp(state.question), 
    lastAnswer: getProp(state.answer),
    current: getProgress(state.question, state.mode),
    history: getProp(state.history)
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    onAnswer: (answer) => { dispatch(giveAnswer(answer)); },
    onProceed: (restart_needed) => { dispatch(proceed(restart_needed)); },
    onShowResult: () => { dispatch(showResult()); }
  } 
};

const VisibleBody = connect(
  mapStateToProps, 
  mapDispatchToProps
)(Body);

export default VisibleBody;
