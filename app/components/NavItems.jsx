import Link from 'next/link';
import React from 'react';

function NavItems({ className, active }) {
  return (
    <div className='flex items-center h-full md:block'>
      <div
        className={`items-center justify-center gap-7 flex-col md:flex-row m-auto + ${className}`}
      >
        <Link href='/' className={`${active === 'home' && 'text-pink'}`}>
          Home
        </Link>
        <Link
          href='/divisionboosting'
          className={`${active === 'divisionboosting' && 'text-pink'}`}
        >
          Division Boosting
        </Link>
        <Link
          href='/netwins'
          className={`${active === 'netwins' && 'text-pink'}`}
        >
          Net Wins
        </Link>
        <Link
          href='/placementgames'
          className={`${active === 'placementgames' && 'text-pink'}`}
        >
          Placement games
        </Link>
        <Link
          href='/contact'
          className={`${active === 'contact' && 'text-pink'}`}
        >
          Contact
        </Link>
        <Link href='/login'>
          <div className='p-1 bg-transparent border-solid border-gray-700 border-[1px] rounded-md cursor-pointer'>
            <div className='bg-gradient-to-r from-[#703ffe] to-[#b392ff] px-4 py-2 rounded-md'>
              Login
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default NavItems;
