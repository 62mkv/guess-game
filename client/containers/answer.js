import { connect } from 'react-redux';
import Answer from '../components/answer.js';
import { proceed, showResult } from '../actions';

function mapStateToProps(state) {
  return {
    question: { 
      answerResult: state.answerResult,
      explanation: state.explanation,
      questionNumber: state.questionNumber
    },
    isLast: state.questionNumber < state.questionCount
  }
}

function mapDispatchToProps(dispatch) {
  return {
    onProceedClick: (restartNeeded, questionNumber) => dispatch(proceed(restartNeeded, questionNumber)),
    onShowResultClick: () => dispatch(showResult())
  }
}

const VisibleAnswer = connect(mapStateToProps, mapDispatchToProps)(Answer);

export default VisibleAnswer;