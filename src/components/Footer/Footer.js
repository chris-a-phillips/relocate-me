import React from 'react';
import './Footer.css'

const Footer = () => {
  return (
    <div className='footer-color'>
      <div className='footer-contact'><h4>Contact Me</h4></div>
      <div className='footer'>
        <h5><a href="https://www.linkedin.com/in/chris-a-phillips/" target='blank'>LinkedIn</a></h5>
        <h5><a href="https://github.com/atlfinesse" target='blank'>Github</a></h5>
        <h5><a href="https://codepen.io/atlfinesse" target='blank'>Codepen</a></h5>
      </div>
      Powered By <a href='https://teleport.org/' target='blank'>
        <img
          src='data:image/png;base64,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'
          alt='Teleport Logo'
        ></img>
      </a>
    </div>
  );
};

export default Footer;