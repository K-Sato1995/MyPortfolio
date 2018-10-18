import React from 'react';
import { Route } from 'react-router-dom';
import Home from './Home';

class Main extends React.Component {
  render(){
    return (
      <div className = 'container'>
        <h1>My portfolio</h1>
        <Route exact path= '/' component={Home}/>
      </div>
    )
  }
}

export default Main;
