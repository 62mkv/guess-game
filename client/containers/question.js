import { connect } from 'react-redux';
import Question from '../components/question';
import { giveAnswer } from '../actions';

function mapStateToProps(state) {
  return {
    question: state.question, 
    number: state.questionNumber, 
    duration: state.duration
  }
}

function mapDispatchToProps(dispatch) {
  return {
    onAnswerClick: (answerGiven, questionNumber) => dispatch(giveAnswer(answerGiven, questionNumber))
  }
}

const VisibleQuestion = connect(
  mapStateToProps,
  mapDispatchToProps
)(Question);

export default VisibleQuestion;