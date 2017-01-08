import React, { PropTypes } from 'react';

const Title = function ({text}) {
    return <h1>{text}</h1>;
  };

Title.propTypes = {
  text: PropTypes.string.isRequired
};

const Subtitle = function({text}){
    return <h2>{text}</h2>;
  };

Subtitle.propTypes = {
  text: PropTypes.string.isRequired
};

export const Header = function() {
    return (
     <div>
       <Title text="This is a Guess Game" />
       <Subtitle text="tiny React application" />
     </div>
    );
  };

export const Footer = function() {
    return (
      <div className="footer">
        <img src="images/ok.png" />
        <img src="images/vk.png" />
        <img src="images/fb.png" />
      </div>
    );
  };
 