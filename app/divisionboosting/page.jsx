import React from 'react';
import Navigation from '../Navigation';
import Boosting from '../../app/components/boosting';
import bg from './../../public/bg.png';

function page() {
  return (
    <div
      className='px-3.5 pb-20 bg-primary-blue relative overflow-x-hidden'
      style={{
        backgroundImage: `url(${bg.src})`,
        width: '100%',
        height: '100%',
      }}
    >
      <Navigation active='divisionboosting' />
      <div className='bg-transparent bg-opacity-20 p-3 border-gray-700 border-[1px] rounded-md m-auto block bg-white outline-none border-none max-w-screen-lg w-full my-32'>
        <div className='bg-gradient-to-r from-[#703ffe] to-[#b392ff] px-4 rounded-md text-white text-[35px] md:text-[45px] lg:text-5xl lg:font-medium lg:leading-[1.4em] w-full text-center py-10'>
          Boosting
        </div>
      </div>
      <div className='flex max-w-screen-lg w-full justify-between m-auto mb-32 flex-col gap-20 md:flex-row md:gap-0'>
        <div className='flex flex-col items-center'>
          <div className='w-28 h-28 bg-pink rounded-full'></div>
          <p className='text-white text-lg lg:text-xl leading-[1em] font-medium mt-5'>
            Division boosting
          </p>
        </div>
        <div className='flex flex-col items-center'>
          <div className='w-28 h-28 bg-pink rounded-full'></div>
          <p className='text-white text-lg lg:text-xl leading-[1em] font-medium mt-5'>
            Net Wins
          </p>
        </div>
        <div className='flex flex-col items-center'>
          <div className='w-28 h-28 bg-pink rounded-full'></div>
          <p className='text-white text-lg lg:text-xl leading-[1em] font-medium mt-5'>
            Placement Games
          </p>
        </div>
      </div>
      <Boosting />
    </div>
  );
}

export default page;
