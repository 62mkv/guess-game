import React from 'react';
import { Header, Footer } from './dummy';
import VisibleBody from '../containers/body.js';

const App = function() {
    return (
      <div style={{height: '100%'}}>
        <Header />
         <hr />
        <div style={{minHeight: '60%'}}>
          <VisibleBody />
        </div>
         <hr />
        <Footer />
      </div>
    );
  };

export default App;
