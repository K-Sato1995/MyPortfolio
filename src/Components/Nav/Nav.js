import React from 'react';
import { Link } from 'react-router-dom';

class Nav extends React.Component {
  render(){
    return(
      <div className = 'navbar'>
        <h1>Portfolio</h1>
        <Link to= '/MyPortfolio'>Home</Link>
        <Link to= '/MyPortfolio/About'>About</Link>
        <Link to= '/MyPortfolio/Skills'>Skills</Link>
        <Link to= '/MyPortfolio/Work'>Work</Link>
        <Link to= '/MyPortfolio/Contact'>Contact</Link>
      </div>
    )
  }
}

export default Nav;
