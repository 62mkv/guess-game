import questions from '../stub/Questions';

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
        history: state.history.concat(action.answer_kind === questions[state.question-1].answer)
      };
    case 'PROCEED':
      return {
        session: true,
        mode: 'QUESTION',
        question: action.restart ? 1 : state.question+1,
        history: action.restart ? [] : state.history
      };
    case "@@redux/INIT":
      return initialState;
  }
}
