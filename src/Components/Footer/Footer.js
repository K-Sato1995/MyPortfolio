import React from 'react';
import '../../Style/Footer.css';

class Footer extends React.Component {
  render(){
    return (
      <div className = 'footer'>
        <div className = 'footer-container'>
          <div className = 'footer-container-left'>
            <h3>Get in touch</h3>
            <p></p>
          </div>
          <div className = 'footer-container-right'>

          </div>
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

export default Footer;
