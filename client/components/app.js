import React from 'react';
import { Header, Footer } from './Dummy';
import VisibleBody from '../containers/body.js';

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
         <hr />
        <VisibleBody />
         <hr />
        <Footer />
      </div>
    );
  }
}

export default App;
