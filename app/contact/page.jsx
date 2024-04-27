import React from 'react';
import Faq from '../components/faq';
import Footer from '../components/footer';
import Navigation from '../Navigation';
import bg from './../../public/bg.png';

function Contact() {
  return (
    <div
      className='px-3.5 pb-20 bg-primary-blue relative overflow-x-hidden'
      style={{
        backgroundImage: `url(${bg.src})`,
        width: '100%',
        height: '100%',
      }}
    >
      <Navigation active='contact' />
      <div className='bg-transparent bg-opacity-20 p-3 border-gray-700 border-[1px] rounded-[30px] m-auto block bg-white outline-none border-none max-w-screen-lg w-full my-32'>
        <div className='bg-gradient-to-r from-[#703ffe] to-[#b392ff] px-4 rounded-[30px] text-white text-[35px] md:text-[45px] lg:text-5xl lg:font-medium lg:leading-[1.4em] w-full text-center py-16'>
          Contact
        </div>
      </div>

      <div class='cseccond'>
        <button class='getbutton btn'>Get in Touch!</button>
        <h1 class='cfirsth1'>Lorem Ipsum</h1>
      </div>

      <div class='contactus-div flex-col md:flex-row bg-[#191E4F] max-w-screen-lg w-full m-auto rounded-3xl'>
        <div class='conleft-div w-full md:w-1/2 border-gray-700 md:border-r-[1px] p-5'>
          <div class='div-forh2 '>
            <h2>Contact Information</h2>
          </div>
          <div>
            <hr class='devider' />
          </div>
          <div class='div-foremail'>
            <span>&#9993;</span>
            <p className='font-ReadexPro'>support@gmail.com</p>
          </div>

          <div class='div-forbigimage'>
            <img class='fucku' src='/bogg.png' alt='jaka slika' />
          </div>
        </div>
        <div class='conright-div w-full'>
          <div class='div-forh1 flex-col md:flex-row md:gap-5 px-7'>
            <div class='firsth1'>
              <h1>Your Name</h1>
              <input type='text' placeholder='' className='inp w-full' />
            </div>
            <div class='secondh1'>
              <h1>Your Email</h1>
              <input type='text' placeholder='' className='inp w-full' />
            </div>
          </div>

          <div class='second-half pb-10 md:pb-0 px-7'>
            <div class='hahhh'>
              <h1 className='text-base'>Message</h1>
            </div>

            <textarea
              class='textarea mt-[10px] w-full'
              name=''
              id=''
              cols='30'
              rows='10'
            ></textarea>

            <div class='hahhh2'>
              <div className='mt-16 bg-opacity-20 p-1 border-gray-700 border-[1px] rounded-md block bg-gray-600 outline-none border-none w-fit m-auto md:mx-0'>
                <button className='bg-gradient-to-r from-[#703ffe] to-[#b392ff] rounded-md text-white text-[15px] lg:font-medium lg:leading-[1.4em] text-center py-3 px-10'>
                  Button
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Faq />
      <Footer />
    </div>
  );
}

export default Contact;
