import React from 'react';
import About from './About';
import Question from './Question';
import Answer from './Answer';
import Progress from './Progress';
import { Header, Footer } from './Dummy';
import questions from './Questions';

class Body extends React.Component {

  constructor(props) {
    super(props);

    this.state = { 
      session: false, 
      question: 0, 
      mode: 'QUESTION',
      history: []
    };

    this.proceed = this.proceed.bind(this);
    this.answer_ours = this.answer_ours.bind(this);
    this.answer_theirs = this.answer_theirs.bind(this);
    this.restart = this.restart.bind(this);
  }
 
  proceed() {
    this.setState({
      session: true,
      question: this.state.question + 1,
      mode: 'QUESTION'
    });
  }

  restart() {
    this.setState({
      session: true,
      question: 1,
      mode: 'QUESTION',
      history: []
    });
  }

  answer_ours() {
    return this.answer('OURS');
  }

  answer_theirs() {
    return this.answer('THEIRS');
  }

  answer(answer_kind) {
    this.setState({
      answer: answer_kind, 
      mode: 'ANSWER',
      history: this.state.history.concat(answer_kind == questions[this.state.question-1].answer)
    });
  }

  render() {
    if (this.state.session) { 
      var progress = <Progress current={this.state.question - (this.state.mode === 'QUESTION' ? 1: 0)} 
                      len={questions.length} history={this.state.history} />;

      if (this.state.mode === 'QUESTION') {
        var body_content = (
          <Question number={this.state.question} answers={[this.answer_ours,this.answer_theirs]} />
        );
      } else {
        var body_content = (
          <Answer number={this.state.question} answer_kind={this.state.answer} 
             proceed={this.proceed} restart={this.restart}/>
        );
      }
      return (
        <div>{progress}<br/>{body_content}</div>
      ); 
    } else {
      return (
        <div>
          <About proceed={this.proceed} />
        </div>
      );
    }
  }
}

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
         <hr />
        <Body />
         <hr />
        <Footer />
      </div>
    );
  }
}

export default App;
