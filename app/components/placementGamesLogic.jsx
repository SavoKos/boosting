'use client';

import { IoOptionsOutline } from 'react-icons/io5';
import Switch from '../components/switch';
import { FaSackDollar } from 'react-icons/fa6';
import { useEffect, useState } from 'react';

export default function PlacementGamesLogic() {
  const [numOfGames, setNumOfGames] = useState(1);
  const [rank, setRank] = useState('5');
  const [division, setDivision] = useState('0');
  const [additionalPercent, setAdditionalPercent] = useState(1);
  const [total, setTotal] = useState(0);
  const prices = [
    2.09, 1.04, 1.12, 1.79, 2.24, 2.99, 3.74, 3.89, 4.19, 4.34, 4.49, 5.84,
    7.49, 8.62,
  ];

  useEffect(() => {
    if (rank > 7)
      return setTotal(
        prices[rank * 1 + 3 + division * 1] * numOfGames * additionalPercent
      );

    setTotal(prices[rank * 1 + division * 1] * numOfGames * additionalPercent);
  }, [rank, division, numOfGames, additionalPercent]);

  return (
    <div className='flex flex-col md:flex-row max-w-screen-xl m-auto'>
      <div className='flex md:w-1/2 flex-col lg:flex-row'>
        <div className='bg-pink rounded-2xl p-5 border-primary-blue border-[10px] h-fit w-full'>
          <div className='flex items-center gap-3 mb-5'>
            <div className='bg-primary-blue rounded-lg w-8 h-8'></div>
            <h3 className='text-white text-lg lg:text-[19px] font-medium leading-[1em] '>
              Last known rank
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
                Unranked
              </option>
              <option className='font-light' value='1'>
                Iron
              </option>
              <option className='font-light' value='2'>
                Bronze
              </option>
              <option className='font-light' value='3'>
                Silver
              </option>
              <option className='font-light' value='4'>
                Gold
              </option>
              <option className='font-light' value='5'>
                Platinum
              </option>
              <option className='font-light' value='6' selected>
                Emerald
              </option>
              <option className='font-light' value='7'>
                Diamond
              </option>
              <option className='font-light' value='8'>
                Master
              </option>
              <option className='font-light' value='9'>
                Grandmaster
              </option>
              <option className='font-light' value='10'>
                Challenger
              </option>
            </select>
          </div>
          {rank == 7 && (
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
                </select>
              </div>
            </div>
          )}
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
              <option className='font-light' value='4'>
                4
              </option>
              <option className='font-light' value='5'>
                5
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
          <div className='flex items-center justify-between '>
            <p>Role selection: FREE</p>
            <Switch changeTotal={() => {}} additionalPercent={() => {}} />
          </div>
          <div className='flex items-center justify-between '>
            <p>Summoner spells: FREE</p>
            <Switch changeTotal={() => {}} additionalPercent={() => {}} />
          </div>
          <div className='flex items-center justify-between '>
            <p>Offline mode: FREE</p>
            <Switch changeTotal={() => {}} additionalPercent={() => {}} />
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
          DISCLAIMER: Up to Emerald, we guarantee an 80% win ratio, and for
          Diamond and above, a 70% win ratio. Should we not meet these targets,
          we&apos;ll provide win boosts equivalent to the number of losses
          occurred. You won&apos;t experience any losses.
        </p>
      </div>
    </div>
  );
}
