import React from 'react';
import { Link } from 'react-router-dom';
import '../../Style/HomeNav.css';

class HomeNav extends React.Component {
  render(){
    return(
    <div className = 'home-navbar'>
      <ul className = 'home-nav-list'>
        <li className = 'home-nav-list-item'><Link to= '/MyPortfolio'>Home</Link></li>
        <li className = 'home-nav-list-item'><Link to= '/MyPortfolio/About'>About</Link></li>
        <li className = 'home-nav-list-item'><Link to= '/MyPortfolio/Skills'>Skills</Link></li>
        <li className = 'home-nav-list-item'><Link to= '/MyPortfolio/Work'>Work</Link></li>
        <li className = 'home-nav-list-item'><Link to= '/MyPortfolio/Contact'>Contact</Link></li>
      </ul>
    </div>
    )
  }
}

export default HomeNav;
