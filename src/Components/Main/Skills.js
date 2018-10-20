import React from 'react';
import '../../Style/Skills.css';
import Nav from '../Nav/Nav';

class Skills extends React.Component {
  render(){
    return (
      <div className = 'skills'>
        <Nav />
        <div className = 'skills-container'>
          <h1 className = 'skills-title'>Skills</h1>
          <div className = 'skills-list'>
            <div className = 'skills-box'></div>
            <div className = 'skills-box'></div>
            <div className = 'skills-box'></div>
          </div>
        </div>
      </div>
    )
  }
}

export default Skills;
