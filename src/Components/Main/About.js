import React from 'react';
import '../../Style/About.css';

class About extends React.Component {
  render(){
    return (
      <div className = 'aboutImage'>
        <div className = 'layer'>
          <div className = 'row about-container'>
            <h1>About me</h1>
            <div className = 'col-md-6 about-left'>
              <div className = 'about-image-layer'></div>
              <img src  = '../../../penguin.jpeg' className = 'about-me-image'/>
            </div>
            <div className = 'col-md-6 about-right'>
              <div className = 'about-description'>
                <p>People often find me outgoing, upbeat, selfmotivated and silly. I grew up in a very small and peaceful town in Japan and moved to a huge city for college.</p>
                <p>In college, I majored in political economy and mainly spent my time there studying International political economy and Public economics. I also started coding when I was a senior and have been studying programming since then.</p>
                <p>Though what I learnt in college was academically very interesting, I didn't necessarily think I am suitable for a politician or economist. I also was not interested in sales or marketing which a lot of my peers from college in the same department are doing. So I ended up getting a job as a webdeveloper since I really liked coding and I was really fascinated with the idea of createing something unique and original that didn't exist before.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default About;
