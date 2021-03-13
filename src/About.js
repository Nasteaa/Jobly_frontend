import React from 'react';
import './About.css';

function About() {
  return (
      <div className="about-container">
        <h1 className="cloud-text hvr-home-grow">About</h1>
        <div className="about">
          <p>Your obligatory bootcamp app. Search for jobs and mark them as applied. React.js front end and Express.js backend, with a postgres database and some other stuff.</p>
          <p className="centered">By <a href="https://sangsuh.com" className="link" target='_blank' rel='nonreferrer'>Sang</a> and <a href="https://tyron.world/" className="link" target='_blank' rel='nonreferrer'>Ty</a></p>
        </div>
      </div>
  );
}

export default About;