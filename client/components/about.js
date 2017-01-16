import React, {PropTypes} from 'react';

const About = function({proceed}){
    return (
      <div>
        <div className="row align-items-center">
          <div className="col-12 text-justify">
            <p>В этой игре Вам будет предложено несколько слов, для каждого из которых Вам нужно решить - является ли слово "нашим" или "не нашим".</p>
          </div>
          <div className="col-12 text-justify">
            <p>"Нашими" считаются все слова, пришедшие в современный русский язык из праиндоевропейского, праславянского или древнерусского языков; 
              а "не нашими" все остальные слова.</p>
          </div>
          <div className="col-12 text-center"> 
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
