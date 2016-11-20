import React from 'react';
import About from './About';
import Question from './Question';
import Answer from './Answer';
import { Header, Footer } from './Dummy';

class Body extends React.Component {

  constructor(props) {
    super(props);

    this.state = { 
      session: false, 
      question: 0, 
      mode: 'QUESTION'
    };

    this.proceed = this.proceed.bind(this);
    this.answer_ours = this.answer_ours.bind(this);
    this.answer_theirs = this.answer_theirs.bind(this);
  }
 
  proceed() {
    this.setState({
      session: true,
      question: this.state.question + 1,
      mode: 'QUESTION'
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
      mode: 'ANSWER'
    });
  }

  render() {
    if (this.state.session) { 
      if (this.state.mode === 'QUESTION') {
        return (
          <Question number={this.state.question} answers={[this.answer_ours,this.answer_theirs]} />
        );
      } else {
        return (
          <Answer number={this.state.question} answer_kind={this.state.answer} proceed={this.proceed} />
        );
      }
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
