'use client';
import React, { useState } from 'react';
import Faq from './components/faq';
import Footer from './components/footer';
import Navigation from './Navigation';

function Home() {
  const [activeText, setActiveText] = useState(1);
  return (
    <div>
      <Navigation active='home' />
      <div className='main-div max-w-screen-xl w-full m-auto px-7'>
        <div className='flex items-center my-10'>
          <div className='text-1 w-full md:w-1/2 text-center md:text-left'>
            <h1 className='text-[42px] md:text-[50px]'>
              League Of Legends Boosting
            </h1>
            <h3 className='font-light font-ReadexPro mt-5'>
              At vero eos et accusamus et iusto odio dignissimos ducimus qui
              blanditiis praesentium voluptatum deleniti atque corrupti quos
              dolores.
            </h3>
            <div className='mt-16 bg-opacity-20 p-[5px] border-gray-700 border-[1px] rounded-xl block bg-gray-600 outline-none border-none w-fit m-auto md:mx-0'>
              <button className='bg-gradient-to-r from-[#703ffe] to-[#b392ff] rounded-xl text-white text-[15px] lg:font-medium lg:leading-[1.4em] text-center py-3 px-10'>
                Button
              </button>
            </div>
          </div>

          <div className='image-1 w-1/2 hidden md:block'>
            <div className='image-container relative'>
              <img
                className='behind-home'
                src='/behind-home.png'
                alt='behing image'
              />
              <img
                className='main-image absolute'
                src='/1.jpeg'
                alt='main image'
              />
            </div>
          </div>
        </div>
        <div className='flex'>
          <div className='image-2 w-1/2 hidden md:block'>
            <div className='image-container relative h-full'>
              <img
                className='behind-home-2 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'
                src='/behind.png'
                alt='behing image'
              />
              <img
                className='main-image-2 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 max-w-[500px] w-[89%]'
                src='/slika2.jpeg'
                alt='main image'
              />
            </div>
          </div>

          <div className='text-2 w-full md:w-1/2 text-center md:text-left my-10'>
            <button className='getbutton btn'>About Us</button>
            <h1>Ipsum Lorem</h1>
            <p className='font-light font-ReadexPro'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, do
              eiusmod tempor incididunt ut labore et Lorem ipsum dolor sit amet,
              consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
              labore et dolore magna aliqua. Ut enim ad minim veniam, quis
              nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
              consequat. Duis aute irure dolor in
            </p>

            <div className='mt-16 bg-opacity-20 p-[5px] border-gray-700 border-[1px] rounded-xl block bg-gray-600 outline-none border-none w-fit m-auto md:mx-0'>
              <button className='bg-gradient-to-r from-[#703ffe] to-[#b392ff] rounded-xl text-white text-[15px] lg:font-medium lg:leading-[1.4em] text-center py-3 px-10 '>
                Boosting options
              </button>
            </div>
          </div>
        </div>

        <section className='mt-20'>
          <div className='div-main' id='scroll-section'>
            <div className='button'>
              <button className='btn getbutton'>Boosting</button>
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

        <section id='scroll-section' className='mb-20'>
          <div className='flex flex-col md:flex-row'>
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
                <div className='mt-5 bg-opacity-20 p-[5px] border-gray-700 border-[1px] rounded-xl block bg-gray-600 outline-none border-none w-fit'>
                  <button className='bg-gradient-to-r from-[#703ffe] to-[#b392ff] rounded-xl text-white text-[15px] lg:font-medium lg:leading-[1.4em] text-center py-3 px-10'>
                    Division boosting
                  </button>
                </div>
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
                <div className='mt-5 bg-opacity-20 p-[5px] border-gray-700 border-[1px] rounded-xl block bg-gray-600 outline-none border-none w-fit'>
                  <button className='bg-gradient-to-r from-[#703ffe] to-[#b392ff] rounded-xl text-white text-[15px] lg:font-medium lg:leading-[1.4em] text-center py-3 px-10'>
                    Net wins
                  </button>
                </div>
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
                <div className='mt-5 bg-opacity-20 p-[5px] border-gray-700 border-[1px] rounded-xl block bg-gray-600 outline-none border-none w-fit'>
                  <button className='bg-gradient-to-r from-[#703ffe] to-[#b392ff] rounded-xl text-white text-[15px] lg:font-medium lg:leading-[1.4em] text-center py-3 px-10'>
                    Placement games
                  </button>
                </div>
              </div>
              <div className='h2-for-grid'>
                <h2 className='huty'>03</h2>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className='div-main1'>
            <div className='button1'>
              <button className='btn getbutton'>loren</button>
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
                <div className='flex flex-col text-left '>
                  <h1 className='hidden sm:block'>Step 1</h1>
                  <p>Step 1: Choose Product</p>
                </div>
              </div>
              <div className='step'>
                <img src='/3.png' alt='Step 2' />
                <div className='flex flex-col text-left '>
                  <h1 className='hidden sm:block'>Step 2</h1>
                  <p>Step 2: Add to Cart</p>
                </div>
              </div>
              <div className='step'>
                <img src='/4.png' alt='Step 3' />
                <div className='flex flex-col text-left '>
                  <h1 className='hidden sm:block'>Step 3</h1>
                  <p>Step 3: Enter Details</p>
                </div>
              </div>
              <div className='step'>
                <img src='/5.png' alt='Step 4' />
                <div className='flex flex-col text-left '>
                  <h1 className='hidden sm:block'>Step 4</h1>
                  <p>Step 4: Confirm Payment</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <Faq />

      <div className='contactus1-div'>
        <div className='conleft1-div text-center md:text-left rounded-2xl md:rounded-tr-none md:rounded-br-none'>
          <div className='clasica md:ml-[30px]'>
            <h1>Lorem ipsum</h1>
            <h3>At vero eos et accusamus et iusto odio.</h3>
          </div>

          <div className='hahhh21 md:ml-[30px]'>
            <button className='btn m-auto md:mx-0'>Send</button>
          </div>
        </div>
        <div className='conright1-div  hidden md:block'>
          <div className='second1-half'>
            <div className='hahhh1'></div>
            <div className='imgy'>
              <img src='/yasuo.png' alt='Logo' className='max-w-[400px]' />
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Home;
