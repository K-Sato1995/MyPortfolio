import React from 'react';
import { Route } from 'react-router-dom';
import Home from './Home';

class Main extends React.Component {
  render(){
    return (
      <div className = 'container'>
        <Route exact path= '/MyPortfolio' component={Home}/>
      </div>
    )
  }
}

export default Main;
