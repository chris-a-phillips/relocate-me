import React from 'react';
import './About.css'

const About = () => {
  return (
      <div className='about-content'>
        <div className='content-shadow'>
        <h1>About</h1>
          <p>Welcome to Relocate Me. The purpose of this site is to provide information about different cities worldwide. This will give you a snapshot of what it's like to live there. With this information, you can see how each city stacks up. Some of the data on this website uses a "Teleport Score". This score is a comparison against the other cities on this site. With over 250 cities worldwide listed on this site, the scores are very comprehensive.</p>
          
          <p>This website's data is provided by the Teleport Cities API. They do incredible work and have a vast amount of data about each of the cities on this website. If you would like further information about any particular city you can check them out <a href="https://teleport.org/">here.</a></p>
        </div>
      </div>
  );
};

export default About;