import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Nav from './Nav/Nav';
import Main from './Main/Main';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Nav />
          <Main />
        </div>
      </Router>
    );
  }
}

export default App;
