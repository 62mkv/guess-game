import React from 'react';

class Title extends React.Component {
  render() {
    return <h1>{this.props.text}</h1>;
  }
}

class Subtitle extends React.Component {
  render() {
    return <h2>{this.props.text}</h2>;
  }
}

export class Header extends React.Component {
  render() {
    return (
     <div>
       <Title text="This is a Guess Game" />
       <Subtitle text="tiny React application" />
     </div>
    );
  }
}

export class Footer extends React.Component {
  render() {
    return (
      <div>
        <img src="images/ok.png" />
        <img src="images/vk.png" />
        <img src="images/fb.png" />
      </div>
    );
  }
}
