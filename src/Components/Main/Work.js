import React from 'react';
import Nav from '../Nav/Nav';
import '../../Style/Work.css';
import Footer from '../Footer/Footer';

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
              <p className = 'work-description'>This is my personal blog where I post about programming and my life. I created it with Runy on Rails.</p>
              <ul className = 'work-tags'>
                <li className = 'Ruby'>Ruby</li>
                <li className = 'Rails'>Rails</li>
                <li className = 'JS'>Javascript</li>
                <li className = 'BS'>Bootstrap</li>
                <li className = 'SASS'>Sass</li>
                <li className = 'Jquery'>Jquery</li>
              </ul>
              <a href = 'https://github.com/K-Sato1995/MyBlog'><i className = 'fa fa-github work-link'></i></a>
            </div>

            {/* Box2 */}
            <div className = 'work-box'>
              <h3>Finance App</h3>
            <p className = 'work-description'>This is a web-application to keep track of your household accounts. I created it with Ruby on Rails and React.js.</p>
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

            {/*  Box3*/}
            <div className = 'work-box'>
              <h3>Task MGMT</h3>
              <p className = 'work-description'>I learn the fundations of creating a web-application with RoR from building this simple todo-list-like task management application.</p>
              <ul className = 'work-tags'>
                <li className = 'Ruby'>Ruby</li>
                <li className = 'Rails'>Rails</li>
                <li className = 'BS'>Bootstrap</li>
                <li className = 'SASS'>Sass</li>
              </ul>
              <a href = 'https://github.com/K-Sato1995/Todo'><i className = 'fa fa-github work-link'></i></a>
            </div>

            {/* Box4 */}
            <div className = 'work-box'>
              <h3>Pinboard</h3>
              <p className = 'work-description'>This is a clone of pinterest. I utilized masonry-rails gem to create Pinterest-like picture movement.</p>
              <ul className = 'work-tags'>
                <li className = 'Ruby'>Ruby</li>
                <li className = 'Rails'>Rails</li>
                <li className = 'BS'>Bootstrap</li>
                <li className = 'SASS'>Sass</li>
                <li className = 'Jquery'>Jquery</li>
              </ul>
              <a href = 'https://github.com/K-Sato1995/Pinboard'><i className = 'fa fa-github work-link'></i></a>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    )
  }
}

export default Work;
