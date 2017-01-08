import React, {PropTypes} from 'react';

const About = function({proceed}){
    return (
      <div>
        <p>В этой игре Вам будет предложено несколько слов, для каждого из которых Вам нужно решить - является ли слово "нашим" или "не нашим".</p>
        <p>"Нашими" считаются все слова, пришедшие в современный русский язык из праиндоевропейского, праславянского или древнерусского языков; 
            а "не нашими" все остальные слова.</p>
        <div  className="row justify-content-center">
          <div className="col-4"> 
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
