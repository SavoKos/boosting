'use client';

import { IoOptionsOutline } from 'react-icons/io5';
import Switch from '../components/switch';
import { FaSackDollar } from 'react-icons/fa6';
import { useEffect, useState } from 'react';

export default function Netwins() {
  const [numOfGames, setNumOfGames] = useState(1);
  const [rank, setRank] = useState('5');
  const [division, setDivision] = useState('0');
  const [additionalPercent, setAdditionalPercent] = useState(1);
  const [total, setTotal] = useState(0);
  const prices = [
    0.89, 0.89, 0.89, 0.89, 0.92, 0.92, 0.92, 0.92, 1.04, 1.12, 1.57, 1.94,
    2.32, 2.32, 2.62, 3.07, 3.74, 3.74, 4.04, 4.49, 4.57, 4.64, 4.79, 4.87,
    5.24, 7.72, 9.44, 10.87, 21.65, 27.79, 33.07,
  ];

  useEffect(() => {
    if (rank > 6)
      return setTotal(
        prices[7 * 4 + division * 1 + (rank * 1 - 7)] *
          numOfGames *
          additionalPercent
      );
    setTotal(prices[rank * 4 + division * 1] * numOfGames * additionalPercent);
  }, [rank, division, numOfGames, additionalPercent]);

  return (
    <div className='flex flex-col md:flex-row max-w-screen-xl m-auto'>
      <div className='flex md:w-1/2 flex-col lg:flex-row'>
        <div className='bg-pink rounded-2xl p-5 border-primary-blue border-[10px] h-fit w-full'>
          <div className='flex items-center gap-3 mb-5'>
            <div className='bg-primary-blue rounded-lg w-8 h-8'></div>
            <h3 className='text-white text-lg lg:text-[19px] font-medium leading-[1em] '>
              Rank
            </h3>
          </div>
          <div>
            <select
              className='block w-full max-w-64 m-auto p-3 text-base font-ReadexPro font-light'
              name=''
              id=''
              onChange={(e) => {
                if (e.target.value > 6) setDivision(0);
                setRank(e.target.value);
              }}
            >
              <option className='font-light' value='0'>
                Iron
              </option>
              <option className='font-light' value='1'>
                Bronze
              </option>
              <option className='font-light' value='2'>
                Silver
              </option>
              <option className='font-light' value='3'>
                Gold
              </option>
              <option className='font-light' value='4'>
                Platinum
              </option>
              <option className='font-light' value='5' selected>
                Emerald
              </option>
              <option className='font-light' value='6'>
                Diamond
              </option>
              <option className='font-light' value='7'>
                Master
              </option>
              <option className='font-light' value='8'>
                Grandmaster
              </option>
              <option className='font-light' value='9'>
                Challenger
              </option>
            </select>
          </div>
          <div>
            <div className='flex items-center gap-3 my-5'>
              <div className='bg-primary-blue rounded-lg w-8 h-8'></div>
              <h3 className='text-white text-lg lg:text-[19px] font-medium leading-[1em] '>
                Division
              </h3>
            </div>
            <div>
              <select
                className='block w-full max-w-64 m-auto mt-3 p-3 text-base font-ReadexPro font-light'
                name=''
                id=''
                onChange={(e) => {
                  setDivision(e.target.value);
                }}
              >
                {Number(rank) <= 6 && (
                  <>
                    <option
                      className='font-light'
                      name=''
                      id=''
                      value='0'
                      selected
                    >
                      Division IV
                    </option>
                    <option className='font-light' name='' id='' value='1'>
                      Division III
                    </option>
                    <option className='font-light' name='' id='' value='2'>
                      Division II
                    </option>
                    <option className='font-light' name='' id='' value='3'>
                      Division I
                    </option>
                  </>
                )}
                {Number(rank) > 6 && (
                  <option
                    className='font-light'
                    name=''
                    id=''
                    value='0'
                    selected
                  >
                    Division I
                  </option>
                )}
              </select>
            </div>
          </div>
        </div>

        <div className='bg-pink rounded-2xl p-5 flex-col flex border-primary-blue border-[10px] h-fit w-full gap-5'>
          <div className='w-full '>
            <div className='flex items-center gap-3 mb-5 '>
              <div className='bg-primary-blue rounded-lg w-8 h-8'></div>
              <h3 className='text-white text-lg lg:text-[19px] font-medium leading-[1em] '>
                SERVER
              </h3>
            </div>
            <select
              className='block w-full max-w-64 m-auto mt-3 p-3 text-base font-ReadexPro font-light'
              name=''
              id=''
            >
              <option className='font-light' value='1'>
                Europe
              </option>
              <option className='font-light' value='2'>
                North America
              </option>
            </select>
          </div>
          <div className='w-full'>
            <div className='flex items-center gap-3 mb-5'>
              <div className='bg-primary-blue rounded-lg w-8 h-8'></div>
              <h3 className='text-white text-lg lg:text-[19px] font-medium leading-[1em] '>
                QUEUE TYPE
              </h3>
            </div>
            <select
              className='block w-full max-w-64 m-auto mt-3 p-3 text-base font-ReadexPro font-light'
              name=''
              id=''
              onChange={(e) => {}}
            >
              <option className='font-light' value='1'>
                Solo/Duo
              </option>
              <option className='font-light' value='2'>
                Flex
              </option>
            </select>
          </div>
          <div className='w-full'>
            <div className='flex items-center gap-3 mb-5'>
              <div className='bg-primary-blue rounded-lg w-8 h-8'></div>
              <h3 className='text-white text-lg lg:text-[19px] font-medium leading-[1em] '>
                NUMBER OF GAMES
              </h3>
            </div>
            <select
              className='block w-full max-w-64 m-auto mt-3 p-3 text-base font-ReadexPro font-light'
              name=''
              id=''
              onChange={(e) => {
                setNumOfGames(e.target.value * 1);
              }}
            >
              <option className='font-light' value='1'>
                1
              </option>
              <option className='font-light' value='2'>
                2
              </option>
              <option className='font-light' value='3'>
                3
              </option>
            </select>
          </div>
        </div>
      </div>
      <div className='bg-pink rounded-2xl md:w-1/2 border-primary-blue border-[10px] p-5 h-fit'>
        <div className='flex items-center text-white w-fit mx-auto'>
          <IoOptionsOutline className='text-4xl text-black' />
          <h3>Boost customization</h3>
        </div>
        <div className='max-w-lg mx-auto font-ReadexPro text-white text-[17px] lg:text-lg font-medium leading-[1em] flex flex-col gap-10 my-10'>
          <div className='flex items-center justify-between'>
            <p>Express order: +20%</p>
            <Switch
              changeTotal={setAdditionalPercent}
              additionalPercent={additionalPercent}
            />
          </div>
          <div className='flex items-center justify-between'>
            <p>Solo ace: +20%</p>
            <Switch
              changeTotal={setAdditionalPercent}
              additionalPercent={additionalPercent}
            />
          </div>
          <div className='flex items-center justify-between'>
            <p>Duo: +20%</p>
            <Switch
              changeTotal={setAdditionalPercent}
              additionalPercent={additionalPercent}
            />
          </div>
          <div className='flex items-center justify-between '>
            <p>Ghost duo: +20%</p>
            <Switch
              changeTotal={setAdditionalPercent}
              additionalPercent={additionalPercent}
            />
          </div>
          <div className='flex items-center justify-between '>
            <p>Stream: +20%</p>
            <Switch
              changeTotal={setAdditionalPercent}
              additionalPercent={additionalPercent}
            />
          </div>
        </div>

        <div className='flex items-center text-white gap-3'>
          <FaSackDollar className='text-3xl text-black' />
          <h2 className='text-lg leading-[1em] font-medium text-[19px]'>
            Total price
          </h2>
        </div>
        <h2 className='text-lg leading-[1em] font-medium text-[19px] text-white m-5'>
          {total.toFixed(2)}€
        </h2>
        <div className='bg-gradient-to-r from-[#703ffe] to-[#b392ff] px-6 py-4 rounded-md text-white w-fit cursor-pointer'>
          PURCHASE
        </div>
        <p className='font-ReadexPro font-medium text-base mt-5 text-red-600'>
          DISCLAIMER: Payment is made for each victory. For every loss, we add
          an additional win at no extra cost. Upon reaching Platinum rank or
          higher, the value of your progress may be subtracted, with the
          remaining balance credited to your account.
        </p>
      </div>
    </div>
  );
}
