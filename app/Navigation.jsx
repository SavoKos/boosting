'use client';

import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { IoClose, IoMenuOutline } from 'react-icons/io5';
import NavItems from './components/NavItems';

function Navigation({ active }) {
  const [menuOpened, setMenuOpened] = useState();

  return (
    <nav className='bg-primary-blue text-white py-5 px-7 flex items-center justify-between md:justify-center gap-7 font-ZenDots'>
      <Image
        src='/b4y.png'
        width={200}
        height={100}
        sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
        className='w-[100px] lg:w-[150px]'
      />
      <NavItems className='hidden md:flex' active={active} />
      <IoMenuOutline
        className='md:hidden text-3xl cursor-pointer'
        onClick={() => setMenuOpened(true)}
      />
      <div
        className={`bg-primary-blue h-full w-full fixed top-0 ${
          menuOpened ? 'left-0' : '-left-full'
        } px-10 py-6 transition-all z-10`}
      >
        <IoClose
          className='float-end text-3xl cursor-pointer'
          onClick={() => setMenuOpened(false)}
        />
        <NavItems className='flex md-hidden' active={active} />
      </div>
    </nav>
  );
}

export default Navigation;
