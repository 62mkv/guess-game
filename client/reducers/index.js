import questions from '../stub/questions';

const initialState = { 
      session: false, 
      question: 0, 
      mode: 'QUESTION',
      history: []
    };


export default function guessApp(state = initialState, action) {
  switch (action.type) {
    case 'ANSWER':
      return {
        session: true,
        mode: 'ANSWER',
        question: state.question,
        history: state.history.concat(action.answer_given === questions[state.question-1].answer),
        answer: action.answer_given
      };
    case 'PROCEED':
      return {
        session: true,
        mode: 'QUESTION',
        question: action.restart ? 1 : state.question + 1,
        history: action.restart ? [] : state.history,
        answer: null
      };
    case 'SHOW_RESULT': 
      return {
        session: true,
        mode: 'SHOW_RESULT',
        question: state.question,
        history: state.history,
        answer: null
      };
    default:
      return initialState;
  }
}
