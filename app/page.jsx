'use client';
import React, { useState } from 'react';
import Navigation from './Navigation';

function Home() {
  const [activeText, setActiveText] = useState(1);
  return (
    <div>
      <Navigation active='home' />
      <div className='main-div'>
        <div className='flex'>
          <div className='text-1 w-1/2'>
            <h1>League Of Legends Boosting</h1>
            <h3>
              At vero eos et accusamus et iusto odio dignissimos ducimus qui
              blanditiis praesentium voluptatum deleniti atque corrupti quos
              dolores.
            </h3>
            <button>BOOSTING</button>
          </div>

          <div className='image-1 w-1/2'>
            <div className='image-container'>
              <img
                className='behind-home'
                src='/behind-home.png'
                alt='behing image'
              />
              <img className='main-image' src='/1.jpeg' alt='main image' />
            </div>
          </div>
        </div>
        <div className='flex'>
          <div className='image-2 w-1/2'>
            <div className='image-container'>
              <img
                className='behind-home-2'
                src='/behind.png'
                alt='behing image'
              />
              <img
                className='main-image-2'
                src='/slika2.jpeg'
                alt='main image'
              />
            </div>
          </div>

          <div className='text-2 w-1/2'>
            <button className='button-text-2'>About Us</button>
            <h1>Ipsum Lorem</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, do
              eiusmod tempor incididunt ut labore et Lorem ipsum dolor sit amet,
              consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
              labore et dolore magna aliqua. Ut enim ad minim veniam, quis
              nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
              consequat. Duis aute irure dolor in
            </p>
            <button className='button-text-21'>Boosting options</button>
          </div>
        </div>
      </div>

      <section>
        <div className='div-main' id='scroll-section'>
          <div className='button'>
            <button>Boosting</button>
          </div>
          <div className='text-3'>
            <h1>Lorem Ipsum Lorem</h1>
          </div>
          <div className='text-4'>
            <h2>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, do
              eiusmod tempor incididunt ut labore et.
            </h2>
          </div>
        </div>
      </section>

      <section id='scroll-section'>
        <div className='grid-container1'>
          <div className='grid-item1'>
            <div className='image-container1'>
              <div className='center-image-div'>
                <img className='move' src='/icona 1.png' alt='' />
              </div>
            </div>
            <div className='diffrent-colordiv'>
              <h3>Division Boosting</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
              </p>
            </div>
            <div className='button-for-grid'>
              <button className='buty'>division busting</button>
            </div>
            <div className='h2-for-grid'>
              <h2 className='huty'>01</h2>
            </div>
          </div>

          <div className='grid-item1'>
            <div className='image-container1'>
              <div className='center-image-div'>
                <img src='/diamant.png' alt='' />
              </div>
            </div>
            <div className='diffrent-colordiv'>
              <h3>Net Wins</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
              </p>
            </div>

            <div className='button-for-grid'>
              <button className='buty'>Net Wins</button>
            </div>
            <div className='h2-for-grid'>
              <h2 className='huty'>02</h2>
            </div>
          </div>

          <div className='grid-item1'>
            <div className='image-container1'>
              <div className='center-image-div'>
                <img src='/icon1.png' alt='' />
              </div>
            </div>
            <div className='diffrent-colordiv'>
              <h3>Placement Games</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
              </p>
            </div>

            <div className='button-for-grid'>
              <button className='buty'>Placement Games</button>
            </div>
            <div className='h2-for-grid'>
              <h2 className='huty'>03</h2>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className='div-main1' style={{ marginTop: '330px' }}>
          <div className='button1'>
            <button>loren</button>
          </div>
          <div className='text-3'>
            <h1>
              At vero eos et accusamus <br />
              et iusto
            </h1>
          </div>
          <div className='step-container'>
            <div className='step'>
              <img src='/2.png' alt='Step 1' />
              <h1>Step 1</h1>
              <p>Step 1: Choose Producth</p>
            </div>
            <div className='step'>
              <img src='/3.png' alt='Step 2' />
              <h1>Step 2</h1>
              <p>Step 2: Add to Cart</p>
            </div>
            <div className='step'>
              <img src='/4.png' alt='Step 3' />
              <h1>Step 3</h1>
              <p>Step 3: Enter Details</p>
            </div>
            <div className='step'>
              <img src='/5.png' alt='Step 4' />
              <h1>Step 4</h1>
              <p>Step 4: Confirm Payment</p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className='div-main2'>
          <div className='button1'>
            <button>loren</button>
          </div>
          <div className='text-3'>
            <h1>
              At vero eos et accusamus <br />
              et iusto
            </h1>
          </div>
          <div className='step-container'>
            <div className='paragraph'>
              <p>Below is a list of frequently asked questions</p>
            </div>
            <div className='container1'>
              <button
                className='button2'
                id='button1'
                onClick={() => setActiveText(1)}
              >
                Button 1
              </button>
              <button
                className='button2'
                id='button2'
                onClick={() => setActiveText(2)}
              >
                Button 2
              </button>
              <button
                className='button2'
                id='button3'
                onClick={() => setActiveText(3)}
              >
                Button 3
              </button>
              <button
                className='button2'
                id='button4'
                onClick={() => setActiveText(4)}
              >
                Button 4
              </button>
              <div className='line'></div>
              {activeText === 1 && (
                <div id='displayText'>Click on button to change text</div>
              )}
              {activeText === 2 && <div id='displayText'>Text2</div>}
              {activeText === 3 && <div id='displayText'>Text3</div>}
              {activeText === 4 && <div id='displayText'>Text4</div>}
            </div>
          </div>
        </div>
      </section>

      <div className='contactus1-div'>
        <div className='conleft1-div'>
          <div className='clasica'>
            <h1>Lorem ipsum</h1>
            <h3>At vero eos et accusamus et iusto odio.</h3>
          </div>

          <div className='hahhh21'>
            <button>Send</button>
          </div>
        </div>
        <div className='conright1-div'>
          <div className='second1-half'>
            <div className='hahhh1'></div>
            <div className='imgy'>
              <img src='/yasuo.png' alt='Logo' />
            </div>
          </div>
        </div>
      </div>

      <footer>
        <div className='footer-container'>
          <div className='footer-logo'>
            <img
              src='/b4y.png'
              alt='Logo'
              style={{ maxWidth: '150px', maxHeight: '150px' }}
            />
          </div>
          <div className='footer-links'>
            <a href='#'>Home</a>
            <a href='#'>Division Boosting</a>
            <a href='#'>Net Wins</a>
            <a href='#'>Placement Games</a>
            <a href='#'>Contact</a>
          </div>
          <div className='footer-social'>
            <a href='#' className='fab fa-discord'></a>
          </div>
        </div>
        <div className='footer-copyright'>
          &copy; Copyright © 2024, Boost4You
        </div>
      </footer>
    </div>
  );
}

export default Home;
