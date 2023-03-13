import React from 'react';
import './Home.css';
import selfie from '../../src/assets/images/selfie.jpg'

function Home() {
    return (
      <div className="home-layout">
        
        <div className="left-side">
        </div>
        <div className="right-side">
          <p className="title-text">Front End Developer</p>
          <p className="cursive-text">Zuzana Knightova</p>
          
          <p className="intro-text">Hi! I am a web developer, based in the UK and in Czech Republic. If you are looking for an international person that understands web development then get in touch.</p>
          <div >
            <img src={selfie} alt="selfie" className="selfie"></img>
         </div>
         </div>
      </div>
    );
  }
  
  export default Home;
  

  