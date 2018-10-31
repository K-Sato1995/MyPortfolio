import React from 'react';
import Nav from '../Nav/Nav';
import Footer from '../Footer/Footer';
import '../../Style/Home.css';

class Home extends React.Component {
  render(){
    return(
      <div className = 'about'>
        <Nav navDescription = {"Hi! I'm K-Sato, a self-taught programmer who loves to learn new things"}/>
        <div className = 'about-container'>
          <p>People often find me outgoing, upbeat, selfmotivated and silly. I grew up in a very small and peaceful town in Japan and moved to a huge city for college.</p>
          <p>In college, I majored in political economy and mainly spent my time there studying International political economy and Public economics. I also started coding when I was a senior and have been studying programming since then.</p>
          <p>Though what I learnt in college was academically very interesting, I didn't necessarily think I am suitable for a politician or economist. I also was not interested in sales or marketing which a lot of my peers from college in the same department are doing. So I ended up getting a job as a webdeveloper since I really liked coding and I was really fascinated with the idea of createing something unique and original that didn't exist before.</p>
        </div>
        <Footer />
      </div>
    )
  }
}

export default Home;
