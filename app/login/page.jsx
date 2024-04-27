import React from 'react';
import Navigation from '../Navigation';
import bg from './../../public/bg.png';

function Login() {
  return (
    <div
      className='px-3.5 pb-20 bg-primary-blue relative overflow-x-hidden '
      style={{
        backgroundImage: `url(${bg.src})`,
        width: '100%',
        height: '100%',
      }}
    >
      <Navigation active='placementgames' />
      <form
        action='#'
        className='m-auto flex flex-col bg-gray-800 p-10 gap-2 rounded-md mt-22 bg-opacity-20 mt-20 max-w-screen-sm w-full'
      >
        <input
          type='email'
          placeholder='Email'
          className='border-gray-400 border-[1px] rounded-md p-2 w-full outline-none font-light font-ReadexPro'
        />
        <input
          type='password'
          placeholder='Password'
          className='border-gray-400 border-[1px] rounded-md p-2 w-full outline-none font-light font-ReadexPro'
        />
        <button className='rounded-md p-2 bg-primary-blue text-white w-full'>
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;
