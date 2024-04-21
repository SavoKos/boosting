import React from 'react';
import Navigation from '../Navigation';

function Contact() {
  return (
    <>
      <Navigation active='contact' />
      <div class='cfirst'>
        <div class='cinner'>
          <h1>Contact</h1>
        </div>
      </div>

      <div class='cseccond'>
        <button class='getbutton btn'>Get in Touch!</button>
        <h1 class='cfirsth1'>Lorem Ipsum</h1>
      </div>

      <div class='contactus-div'>
        <div class='conleft-div'>
          <div class='div-forh2'>
            <h2>Contact Information</h2>
          </div>
          <div>
            <hr class='devider' />
          </div>
          <div class='div-foremail'>
            <span>&#9993;</span>
            <p>support@gmail.com</p>
          </div>

          <div class='div-forbigimage'>
            <img class='fucku' src='/bogg.png' alt='jaka slika' />
          </div>
        </div>
        <div class='conright-div'>
          <div class='div-forh1'>
            <div class='firsth1'>
              <h1>Your Name</h1>
              <input type='text' placeholder='' />
            </div>
            <div class='secondh1'>
              <h1>Your Email</h1>
              <input type='text' placeholder='' />
            </div>
          </div>

          <div class='second-half'>
            <div class='hahhh'>
              <h1>Message</h1>
            </div>

            <textarea
              class='textarea'
              name=''
              id=''
              cols='30'
              rows='10'
            ></textarea>

            <div class='hahhh2'>
              <button className='btn'>Send</button>
            </div>
          </div>
        </div>
      </div>
      <footer>
        <div class='footer-container'>
          <div class='footer-logo'>
            <img
              src='/b4y.png'
              alt='Logo'
              style={{ maxWidth: '150px', maxHeight: '150px' }}
            />
          </div>
          <div class='footer-links'>
            <a href='#'>Home</a>
            <a href='#'>Division Boosting</a>
            <a href='#'>Net Wins</a>
            <a href='#'>Placement Games</a>
            <a href='#'>Contact</a>
          </div>
          <div class='footer-social'>
            <a href='#' class='fab fa-discord'></a>
          </div>
        </div>
        <div class='footer-copyright'>&copy; Copyright © 2024, Boost4You</div>
      </footer>
    </>
  );
}

export default Contact;
