import React from 'react';
import { Link } from 'react-router-dom';

class Nav extends React.Component {
  render(){
    return(
      <div className = 'navbar'>
        Portfolio
        <Link to= '/'>Home</Link>
        <Link to= 'Skills'>Skills</Link>
        <Link to= 'Experience'>Experience</Link>
      </div>
    )
  }
}

export default Nav;
