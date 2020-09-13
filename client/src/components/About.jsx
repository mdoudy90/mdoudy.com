import React, { useEffect, useState } from 'react';

export const About = () => {
  return (
    <div className='module-container'>
      {/* <h2>About</h2> */}
      <div className='about'>
        <div className='about-me'>
          <h2>Hi! I'm Michael, a software engineer based in New York City.</h2>
        </div>
        <div className='about-details'>
          <div className='about-data'>
            <h3>Data</h3>
            <div className='about-sub-container'>
              <div className='about-sub-component'>
                <h5>EDUCATION:</h5>
                <h5>
                  Software Engineering Immersive Program at <a href='https://www.hackreactor.com/'>Hack Reactor</a> and BS in Industrial Engineering from <a href='https://www.gatech.edu/'>Georgia
                  Institute of Technology</a>.
                </h5>
              </div>
              <div className='about-sub-component'>
                <h5>FUN FACT:</h5>
                <h5>Spent 2 years working with VR/AR and Startup Ecosystem development in Russia, Finland, Estonia.</h5>
              </div>
              <div className='about-sub-component'>
                <h5>HUMAN LANGUAGES:</h5>
                <h5>English, Russian, and basic German</h5>
              </div>
              <div className='about-sub-component'>
                <h5>INTERESTS:</h5>
                <h5>Photography, Virtual Reality, Puzzles, Pondering about singularity</h5>
              </div>
            </div>
          </div>
          <div className='about-skills'>
            <h3>Skills</h3>
            <div className='about-sub-container'>
              <div className='about-sub-component'>
                <h5>FRONT-END:</h5>
                <h5>JavaScript, TypeScript, React, Redux, CSS/Sass, HTML5</h5>
              </div>
              <div className='about-sub-component'>
                <h5>BACK-END:</h5>
                <h5>Node.js, Express, MySQL, PostgreSQL, MongoDB, Redis</h5>
              </div>
              <div className='about-sub-component'>
                <h5>TOOLS:</h5>
                <h5>Git, Docker, AWS, Heroku, Postman, Bash, Visual Studio Code, Photoshop</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
