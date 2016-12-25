const initialState = { 
      session: false, 
      question: 0, 
      mode: 'QUESTION',
      history: [],
      duration: 0
    };


export default function guessApp(state = initialState, action) {
  switch (action.type) {
    case 'ANSWER':
      return {
        session: true,
        mode: 'ANSWER',
        question: state.question,
        history: state.history.concat(action.answer_result),
        duration: state.duration,
        answer: action.answer_given
      };
    case 'PROCEED':
      return {
        session: true,
        mode: 'QUESTION',
        question: action.restart ? 1 : state.question + 1,
        history: action.restart ? [] : state.history,
        duration: action.restart ? 0 : state.duration,
        answer: null
      };
    case 'SHOW_RESULT': 
      return {
        session: true,
        mode: 'SHOW_RESULT',
        question: state.question,
        history: state.history,
        duration: state.duration,
        answer: null
      };
    case 'SET_DURATION':
      return { ...state, duration: action.duration};
    default:
      return initialState;
  }
}
