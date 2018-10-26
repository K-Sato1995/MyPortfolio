import React from 'react';
import '../../Style/Skills.css';
import Nav from '../Nav/Nav';
import Footer from '../Footer/Footer';

class Skills extends React.Component {
  render(){
    return (
      <div className = 'skills'>
        <Nav navDescription = {'Here are some languages, frameworks and tools that I am familiar with.'}/>
        <div className = 'skills-container'>
          <h1>Languages<div className = 'border'></div></h1>
          <div className = 'skills-list'>
            <div className = 'skills-box'>
              <h3>HTML5</h3>
              {/* ProcessBar1 */}
              <h4 className = 'processbar-title'>Proficiency</h4>
              <div className = 'progress proficiency'>
                <div className = 'progress-bar' id ='HTML-proficiency'></div>
              </div>
              {/* ProcessBar2 */}
              <h4 className = 'processbar-title'>Experience</h4>
              <div className = 'progress experience'>
                <div className = 'progress-bar' id = 'HTML-experience'></div>
              </div>
              <p className = 'skill-description'>I constantly write/read HTML both on my personal projects and projects at work.</p>
            </div>

            <div className = 'skills-box'>
              <h3>CSS3</h3>
              {/* ProcessBar1 */}
              <h4 className = 'processbar-title'>Proficiency</h4>
              <div className = 'progress proficiency'>
                <div className = 'progress-bar' id ='CSS-proficiency'></div>
              </div>
              {/* ProcessBar2 */}
              <h4 className = 'processbar-title'>Experience</h4>
              <div className = 'progress experience'>
                <div className = 'progress-bar' id = 'CSS-experience'></div>
              </div>
              <p className = 'skill-description'>I constantly use CSS on my personal projects and often write/read it on projects at work.</p>
            </div>

            <div className = 'skills-box'>
              <h3>SASS</h3>
              {/* ProcessBar1 */}
              <h4 className = 'processbar-title'>Proficiency</h4>
              <div className = 'progress proficiency'>
                <div className = 'progress-bar' id ='SASS-proficiency'></div>
              </div>
              {/* ProcessBar2 */}
              <h4 className = 'processbar-title'>Experience</h4>
              <div className = 'progress experience'>
                <div className = 'progress-bar' id = 'SASS-experience'></div>
              </div>
              <p className = 'skill-description'>I freaquently use SASS on my personal projects. I also often read/write it on projects at work.</p>
            </div>

            <div className = 'skills-box'>
              <h3>Javascript/ES6</h3>
              {/* ProcessBar1 */}
              <h4 className = 'processbar-title'>Proficiency</h4>
              <div className = 'progress proficiency'>
                <div className = 'progress-bar' id ='JS-proficiency'></div>
              </div>
              {/* ProcessBar2 */}
              <h4 className = 'processbar-title'>Experience</h4>
              <div className = 'progress experience'>
                <div className = 'progress-bar' id = 'JS-experience'></div>
              </div>
              <p className = 'skill-description'>I constantly use JS on my personal projects and sometimes read/write it on projects at work.</p>
            </div>

            <div className = 'skills-box'>
              <h3>Ruby</h3>
              {/* ProcessBar1 */}
              <h4 className = 'processbar-title'>Proficiency</h4>
              <div className = 'progress proficiency'>
                <div className = 'progress-bar' id ='Ruby-proficiency'></div>
              </div>
              {/* ProcessBar2 */}
              <h4 className = 'processbar-title'>Experience</h4>
              <div className = 'progress experience'>
                <div className = 'progress-bar' id = 'Ruby-experience'></div>
              </div>
              <p className = 'skill-description'>I constantly write/read Ruby both on my personal projects and projects at work.</p>
            </div>

            <div className = 'skills-box'>
              <h3>Go</h3>
              {/* ProcessBar1 */}
              <h4 className = 'processbar-title'>Proficiency</h4>
              <div className = 'progress proficiency'>
                <div className = 'progress-bar' id ='Go-proficiency'></div>
              </div>
              {/* ProcessBar2 */}
              <h4 className = 'processbar-title'>Experience</h4>
              <div className = 'progress experience'>
                <div className = 'progress-bar' id = 'Go-experience'></div>
              </div>
              <p className = 'skill-description'>I sometimes use Go on my personal projects but never used it at work.</p>
            </div>
          </div>

          <h1 className = 'skills-title'>Frameworks<div className = 'border'></div></h1>
          <div className = 'skills-list'>
            <div className = 'skills-box'>
              <h3>Ruby on Rails</h3>
              {/* ProcessBar1 */}
              <h4 className = 'processbar-title'>Proficiency</h4>
              <div className = 'progress proficiency'>
                <div className = 'progress-bar' id ='Rails-proficiency'></div>
              </div>
              {/* ProcessBar2 */}
              <h4 className = 'processbar-title'>Experience</h4>
              <div className = 'progress experience'>
                <div className = 'progress-bar' id = 'Rails-experience'></div>
              </div>
              <p className = 'skill-description'>I constantly use Rails both on my personal projects and projects at work.</p>
            </div>

            <div className = 'skills-box'>
              <h3>React.js</h3>
              {/* ProcessBar1 */}
              <h4 className = 'processbar-title'>Proficiency</h4>
              <div className = 'progress proficiency'>
                <div className = 'progress-bar' id ='React-proficiency'></div>
              </div>
              {/* ProcessBar2 */}
              <h4 className = 'processbar-title'>Experience</h4>
              <div className = 'progress experience'>
                <div className = 'progress-bar' id = 'React-experience'></div>
              </div>
              <p className = 'skill-description'>I sometimes use React both on my personal projects and projects at work.</p>
            </div>

            <div className = 'skills-box'>
              {/* <div className = 'skill-logo' id = 'Bstrap'>B</div> */}
              <h3>Bootstrap</h3>
              {/* ProcessBar1 */}
              <h4 className = 'processbar-title'>Proficiency</h4>
              <div className = 'progress proficiency'>
                <div className = 'progress-bar' id ='Bstrap-proficiency'></div>
              </div>
              {/* ProcessBar2 */}
              <h4 className = 'processbar-title'>Experience</h4>
              <div className = 'progress experience'>
                <div className = 'progress-bar' id = 'Bstrap-experience'></div>
              </div>
              <p className = 'skill-description'>I constantly use it on my personal projects and sometimes on projects at work.</p>
            </div>
          </div>
          <h1 className = 'skills-title'>Tools<div className = 'border'></div></h1>
          <div className = 'skills-list'>
            <div className = 'skills-box'></div>
            <div className = 'skills-box'></div>
            <div className = 'skills-box'></div>
          </div>
        </div>
        <Footer />
      </div>
    )
  }
}

export default Skills;
