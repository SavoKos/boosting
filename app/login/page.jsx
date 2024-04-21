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
        className='m-auto flex flex-col bg-white w-fit p-10 gap-2 rounded-md mt-22 bg-opacity-20'
      >
        <input
          type='email'
          placeholder='Email'
          className='border-gray-400 border-[1px] rounded-md p-2 w-full outline-none'
        />
        <input
          type='password'
          placeholder='Password'
          className='border-gray-400 border-[1px] rounded-md p-2 w-full outline-none'
        />
        <button className='rounded-md p-2 bg-primary-blue text-white w-full'>
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;
