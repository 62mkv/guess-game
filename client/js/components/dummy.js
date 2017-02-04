import React, { PropTypes } from 'react';

const Title = function ({text}) {
    return <h3>{text}</h3>;
  };

Title.propTypes = {
  text: PropTypes.string.isRequired
};

const Subtitle = function({text}){
    return <h5>{text}</h5>;
  };

Subtitle.propTypes = {
  text: PropTypes.string.isRequired
};

export const Header = function() {
    return (
     <div className="sticky-top">
       <Title text="Наше или не Наше?" />
       <Subtitle text="простенькая игрушка" />
     </div>
    );
  };

export const Footer = function() {
    return (
      <div className="fixed-bottom">
        <img src="images/ok.png" />
        <img src="images/vk.png" />
        <img src="images/fb.png" />
      </div>
    );
  };
 