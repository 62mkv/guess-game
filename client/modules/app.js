import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router';

function Title(props) {
  return <h1>{props.text}</h1>;
}

function Subtitle(props) {
  return <h2>{props.text}</h2>;
}

class Header extends React.Component {
  render() {
    return (
     <div>
       <Title text="This is a Guess Game" />
       <Subtitle text="tiny React application" />
     </div>
    );
  }
}

class Body extends React.Component {
  render() {
    return (
      <div>
        {this.props.children}
      </div>
    );
  }
}

class Footer extends React.Component {
  render() {
    return (
      <div>
        <img src="static/images/ok.png" />
        <img src="static/images/vk.png" />
        <img src="static/images/fb.png" />
      </div>
    );
  }
}

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
         <hr />
        <Body children={this.props.children}/>
         <hr />
        <Footer />
      </div>
    );
  }
}

export default App;
