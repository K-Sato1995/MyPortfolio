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
      <div className = 'container'>
        <Route exact path='/MyPortfolio' component={ Home } />
        <Route exact path='/MyPortfolio/About' component={ About } />
        <Route exact path='/MyPortfolio/Skills' component={ Skills } />
        <Route exact path='/MyPortfolio/Work' component={ Work } />
        <Route exact path='/MyPortfolio/Contact' component={ Contact } />
        <p className = 'copy-right'>Copyright © K-Sato 2018</p>
        <div className = 'link-list'>
          <a href = 'https://k-blog0130.herokuapp.com/'>B</a>
          <a href = 'https://github.com/K-Sato1995'><i className = 'fa fa-github'></i></a>
          <a href = 'https://www.google.com/'><i className = 'fa fa-google'></i></a>
          <a href = 'https://twitter.com/'><i className = 'fa fa-twitter'></i></a>
        </div>
      </div>
    )
  }
}

export default Main;
