const initialState = { 
      session: false, 
      questionNumber: 0,  
      questionCount: 0,
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
        questionNumber: state.questionNumber,
        questionCount: state.questionCount,
        duration: state.duration,
        history: state.history.concat(action.answerResult),
        answerResult: action.answerResult,
        explanation: action.explanation
      };
    case 'PROCEED':
      return {
        session: true,
        mode: 'QUESTION',
        questionNumber: action.questionNumber,
        questionCount: action.restart ? action.questionCount : state.questionCount,
        question: action.question,
        history: action.restart ? [] : state.history,
        duration: action.restart ? 0 : state.duration
      };
    case 'SHOW_RESULT': 
      return { ...state, mode: 'SHOW_RESULT' };
    case 'SET_DURATION':
      return { ...state, duration: action.duration};
    case 'RESTART':
      return initialState;
    default:
      return state;
  }
}
