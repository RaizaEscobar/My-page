import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <div className='footer-container' id="Footer">
      <section className='footer-email'>
        <p className='footer-email-heading'>
         Let's make something cool together!
        </p>
        <p className='footer-email-text'>
          raizaescobar@gmail.com
        </p>
      </section>
      <div class='footer-links'>
        <div class='footer-link-items'>
          <a href='https://www.linkedin.com/in/raizaescobar/'>  <i className='fab fa-linkedin' /></a>
          <a href='https://github.com/RaizaEscobar'> <i className='fab fa-github' /></a>
        </div>

      </div>

    </div>
  );
}

export default Footer;