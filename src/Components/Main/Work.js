import React from 'react';
import Nav from '../Nav/Nav';
import '../../Style/Work.css';

class Work extends React.Component {
  render(){
    return (
      <div>
        <Nav navDescription = {'Here are some personal projects I have worked on'}/>
        <div className = 'work-container'>
          <div className = 'work-list'>
            {/* Box1 */}
            <div className = 'work-box'>
              <h3>My Blog</h3>
              <p className = 'work-description'>This is my personal blog Where I post about programming and my life. I created it with Runy on Rails.</p>
              <ul className = 'work-tags'>
                <li className = 'Ruby'>Ruby</li>
                <li className = 'Rails'>Rails</li>
                <li className = 'JS'>Javascript</li>
                <li className = 'BS'>Bootstrap</li>
                <li className = 'SASS'>Sass</li>
              </ul>
              <a href = 'https://github.com/K-Sato1995/MyBlog'><i className = 'fa fa-github work-link'></i></a>
            </div>

            {/* Box2 */}
            <div className = 'work-box'>
              <h3>Finance</h3>
              <p className = 'work-description'>This is a webapplication to keep track of your household accounts. I created it with Ruby on Rails and React.js.</p>
              <ul className = 'work-tags'>
                <li className = 'Ruby'>Ruby</li>
                <li className = 'Rails'>Rails</li>
                <li className = 'JS'>Javascript</li>
                <li className = 'React'>React</li>
                <li className = 'BS'>Bootstrap</li>
                <li className = 'SASS'>Sass</li>
              </ul>
              <a href = 'https://github.com/K-Sato1995/Finance'><i className = 'fa fa-github work-link'></i></a>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Work;
