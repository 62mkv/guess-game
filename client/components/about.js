import React, {PropTypes} from 'react';

const About = function({proceed}){
    return (
      <div>
        <div className="row">
          <div className="col text-justify">
            <p>В этой игре Вам будет предложено несколько слов, для каждого из которых Вам нужно решить - является ли слово "нашим" или "не нашим".</p>
          </div>
        </div>
        <div className="row">
          <div className="col text-justify">
            <p>"Нашими" считаются все слова, пришедшие в современный русский язык из праиндоевропейского, праславянского или древнерусского языков; 
              а "не нашими" все остальные слова.</p>
          </div>
        </div>
        <div  className="row justify-content-center">
          <div className="col text-center"> 
            <button className="btn btn-link" onClick={() => proceed(true)}>Понятно, начали !</button>
          </div>
        </div>
      </div>
    );
  };

About.propTypes = {
  proceed: PropTypes.func.isRequired
};

export default About;
