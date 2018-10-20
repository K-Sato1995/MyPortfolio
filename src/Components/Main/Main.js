import React from 'react';
import { Route } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Skills from './Skills';
import Work from './Work';
import Contact from './Contact';

class Main extends React.Component {
  render(){
    return (
      <div className = 'Main'>
        <Route exact path='/MyPortfolio' component={ Home } />
        <Route exact path='/MyPortfolio/About' component={ About } />
        <Route exact path='/MyPortfolio/Skills' component={ Skills } />
        <Route exact path='/MyPortfolio/Work' component={ Work } />
        <Route exact path='/MyPortfolio/Contact' component={ Contact } />
      </div>
    )
  }
}

export default Main;
