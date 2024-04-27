import React from 'react';
import { FaDiscord } from 'react-icons/fa6';

function Footer() {
  return (
    <footer>
      <div class='footer-container flex-col md:justify-between gap-5 lg:flex-row max-w-screen-lg w-full'>
        <div class='footer-logo'>
          <img
            src='/b4y.png'
            alt='Logo'
            style={{ maxWidth: '150px', maxHeight: '150px' }}
          />
        </div>
        <div class='footer-links flex-col sm:flex-row'>
          <a href='#'>Home</a>
          <a href='#'>Division Boosting</a>
          <a href='#'>Net Wins</a>
          <a href='#'>Placement Games</a>
          <a href='#'>Contact</a>
        </div>
        <div class='footer-social'>
          <FaDiscord class='fab fa-discord text-4xl cursor-pointer' />
        </div>
      </div>
      <div class='footer-copyright mt-5'>
        &copy; Copyright © 2024, Boost4You
      </div>
    </footer>
  );
}

export default Footer;
