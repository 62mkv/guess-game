import React from 'react';
import { Link } from 'react-router';

class Question extends React.Component {
  render() {
    this.current = parseInt(this.props.params.number);
    this.next = this.current+1;
    return (
      <div>
        <p>This is Question #{this.current}</p>
        <Link to="about">Вернуться в начало</Link>
        <Link to={"question/"+this.next}>Следующий вопрос</Link>
      </div>
    );
  }
}

export default Question;