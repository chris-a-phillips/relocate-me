import React from 'react';
import { Link } from 'react-router-dom'


const Nav = () => {
  return (
    <div className='nav-bar'>
      <div className='nav-logo'>
      <Link to ='/'><h5>Home</h5></Link>
      </div>
      <div className='filler-space'></div>
      <div className='nav-cities'>
      <Link to ='/cities'><h5>Cities</h5></Link>
      </div>
      <div className='nav-about'>
      <Link to ='/about'><h5>About</h5></Link>
      </div>
    </div>
  );
};

export default Nav;