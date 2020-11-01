import React from 'react';
import { Link } from 'react-router-dom'


const Landing = () => {
  return (
    <div className='globe'>
      <div className='center-landing-text'>
        <h1>Relocate Me</h1>
        <h3>Choose your next destination.</h3>
        <Link to ='/cities'>
          <button>Get Started</button>
        </Link>
      </div>
    </div>
  );
};

export default Landing;