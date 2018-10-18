import React from 'react';
import { Link } from 'react-router-dom';
import '../../Style/Nav.css';

class Nav extends React.Component {
  render(){
    return(
    <div className = 'navbar'>
      <ul className = 'nav-list'>
        <li className = 'nav-list-item'><Link to= '/MyPortfolio'>Home</Link></li>
        <li className = 'nav-list-item'><Link to= '/MyPortfolio/About'>About</Link></li>
        <li className = 'nav-list-item'><Link to= '/MyPortfolio/Skills'>Skills</Link></li>
        <li className = 'nav-list-item'><Link to= '/MyPortfolio/Work'>Work</Link></li>
        <li className = 'nav-list-item'><Link to= '/MyPortfolio/Contact'>Contact</Link></li>
      </ul>
    </div>
    )
  }
}

export default Nav;
