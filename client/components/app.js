import React from 'react';
import { Header, Footer } from './Dummy';
import VisibleBody from '../containers/body.js';

const App = function() {
    return (
      <div>
        <Header />
         <hr />
        <VisibleBody />
         <hr />
        <Footer />
      </div>
    );
  };

export default App;
