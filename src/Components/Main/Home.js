import React from 'react';
import { Link } from 'react-router-dom';
import '../../Style/Home.css';

class Home extends React.Component {
  render(){
    return(
      <div className = 'homeImage'>
        <div className = 'layer'>
          <h1 className = 'home-title'>K-Sato's Portfolio</h1>
          <p className = 'home-description'>A silly boy aspiring to be a competent programmer</p>
          <p className = 'read-more'><Link to= '/MyPortfolio/About'>Read More</Link></p>
        </div>
      </div>
    )
  }
}

export default Home;
