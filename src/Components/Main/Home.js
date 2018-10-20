import React from 'react';
import { Link } from 'react-router-dom';
import '../../Style/Home.css';
import HomeNav from '../Nav/HomeNav';

class Home extends React.Component {
  render(){
    return(
      <div className = 'homeImage'>
        <div className = 'layer'>
          <HomeNav />
          <h1 className = 'home-title'>K-Sato's Portfolio</h1>
          <p className = 'home-description'>A silly boy aspiring to be a competent programmer</p>
          <p className = 'read-more'><Link to= '/MyPortfolio/About'>Read More</Link></p>
          <p className = 'copy-right'>Copyright © K-Sato 2018</p>
          <div className = 'link-list'>
            <a href = 'https://k-blog0130.herokuapp.com/'>B</a>
            <a href = 'https://github.com/K-Sato1995'><i className = 'fa fa-github'></i></a>
            <a href = 'https://www.google.com/'><i className = 'fa fa-google'></i></a>
            <a href = 'https://twitter.com/'><i className = 'fa fa-twitter'></i></a>
          </div>
        </div>
      </div>
    )
  }
}

export default Home;
