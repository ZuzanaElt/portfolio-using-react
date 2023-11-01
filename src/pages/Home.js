import React from 'react';
import './Home.css';
import selfie from '../../src/assets/images/selfie.jpg'

function Home() {
    return (
      <div className="home-layout">
        
        <div className="left-side">
        <div >
            <img src={selfie} alt="selfie" className="selfie"></img>
         </div>
        </div>
        <div className="right-side">
          <div id="border-top"></div>
          <p className="title-text text-box">Front End Developer</p>
          <p className="cursive-text text-box">Zuzana Knightova</p>
          
          <p className="intro-text text-box">Hi! I am a web developer, based in Czech Republic and in the UK. If you are looking for an international person that understands web development then get in touch.</p>
          <p className="text-box"> I learned my skills in Front-end-dev Bootcamp and through follow-up individual work. I am hard-working and enjoy working in a friendly team.</p>

          
         </div>
      </div>
    );
  }
  
  export default Home;
  

  