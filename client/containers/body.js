import { connect } from 'react-redux';
import { giveAnswer, proceed } from '../actions';
import Body from '../components/Newbody.js';

const getProp = (prop) => { return prop };

const getProgress = (question, mode) => { return question - (mode === 'QUESTION' ? 1: 0); };

const mapStateToProps = (state) => {
  return {
    session: getProp(state.session),
    mode: getProp(state.mode),
    question_number: getProp(state.question), 
    last_answer: getProp(state.answer),
    current: getProgress(state.question, state.mode),
    history: getProp(state.history)
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    onAnswerClick: (answer) => { dispatch(giveAnswer(answer)); },
    onProceedClick: () => { dispatch(proceed); }
  } 
};

const VisibleBody = connect(
  mapStateToProps, 
  mapDispatchToProps
)(Body);

export default VisibleBody;
