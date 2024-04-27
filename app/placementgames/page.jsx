import React from 'react';
import Navigation from '../Navigation';
import bg from './../../public/bg.png';
import PlacementGamesLogic from '../components/placementGamesLogic';
import Faq from '../components/faq';
import Footer from '../components/footer';

function PlacementGames() {
  return (
    <div
      className='px-3.5 pb-20 bg-primary-blue relative overflow-x-hidden'
      style={{
        backgroundImage: `url(${bg.src})`,
        width: '100%',
        height: '100%',
      }}
    >
      <Navigation active='placementgames' />
      <div className='bg-transparent bg-opacity-20 p-3 border-gray-700 border-[1px] rounded-[30px] m-auto block bg-white outline-none border-none max-w-screen-lg w-full my-32'>
        <div className='bg-gradient-to-r from-[#703ffe] to-[#b392ff] px-4 rounded-[30px] text-white text-[35px] md:text-[45px] lg:text-5xl lg:font-medium lg:leading-[1.4em] w-full text-center py-16'>
          Boosting
        </div>
      </div>
      <div className='flex max-w-screen-lg w-full justify-between m-auto mb-32 flex-col gap-20 md:flex-row md:gap-0'>
        <div className='flex flex-col items-center'>
          <div className='image-container1'>
            <div className='center-image-div'>
              <img className='move' src='/icona 1.png' alt='' />
            </div>
          </div>
          <p className='text-white text-lg lg:text-xl leading-[1em] font-medium mt-14'>
            Division boosting
          </p>
        </div>
        <div className='flex flex-col items-center'>
          <div className='image-container1'>
            <div className='center-image-div'>
              <img className='move' src='/diamant.png' alt='' />
            </div>
          </div>
          <p className='text-white text-lg lg:text-xl leading-[1em] font-medium mt-14'>
            Net Wins
          </p>
        </div>
        <div className='flex flex-col items-center'>
          <div className='image-container1'>
            <div className='center-image-div'>
              <img className='move' src='/icon1.png' alt='' />
            </div>
          </div>
          <p className='text-white text-lg lg:text-xl leading-[1em] font-medium mt-14'>
            Placement Games
          </p>
        </div>
      </div>
      <PlacementGamesLogic />
      <Faq />
      <Footer />
    </div>
  );
}

export default PlacementGames;
