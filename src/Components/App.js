import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom'
import '../Style/App.css';
import Main from './Main/Main';

class App extends Component {
  render() {
    return (
      <Router>
        <div className = "App">
          <Main />
        </div>
      </Router>
    );
  }
}

export default App;
