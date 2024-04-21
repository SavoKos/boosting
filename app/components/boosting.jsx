'use client';

import { useEffect, useState } from 'react';
import { IoOptionsOutline } from 'react-icons/io5';
import Switch from '../components/switch';
import { FaSackDollar } from 'react-icons/fa6';

export default function Home() {
  const lpGain1Prices = [
    4.04, 4.04, 4.04, 4.04, 4.56, 4.56, 4.56, 5.17, 5.42, 5.77, 6.03, 8.36,
    9.05, 9.74, 11.63, 12.5, 13.36, 15.35, 17.24, 21.98, 23.11, 24.4, 26.73,
    27.85, 37.34, 48.72, 66.66, 80.63,
  ];
  const lpGain2Prices = [
    3.52, 3.52, 3.52, 3.52, 3.97, 3.97, 4.04, 4.49, 4.72, 5.02, 5.24, 7.27,
    7.87, 8.47, 10.12, 10.87, 11.62, 13.34, 14.99, 19.12, 20.09, 21.22, 23.24,
    24.22, 32.47, 42.37, 57.97, 70.12,
  ];
  const lpGain3Prices = [
    3.52, 3.52, 3.52, 3.52, 3.97, 3.97, 4.04, 4.49, 4.72, 5.02, 5.24, 7.27,
    7.87, 8.47, 10.12, 10.87, 11.62, 13.34, 14.99, 19.12, 20.09, 21.22, 23.24,
    24.22, 32.47, 42.37, 57.97, 70.12,
  ];

  const [total, setTotal] = useState(0);
  const [slicedPrices, setSlicedPrices] = useState(lpGain1Prices);
  const [currentLeague, setCurrentLeague] = useState('0');
  const [desiredLeague, setDesiredLeague] = useState('6');
  const [currentDivision, setCurrentDivision] = useState('0');
  const [desiredDivision, setDesiredDivision] = useState('0');
  const [discount, setDiscount] = useState(1);
  const [prices, setPrices] = useState(lpGain1Prices);
  const [additionalPercent, setAdditionalPercent] = useState(1);

  console.log(additionalPercent);

  useEffect(() => {
    setSlicedPrices(
      [...prices].slice(
        currentLeague * 4 + currentDivision * 1,
        (desiredLeague * 1 + 1) * 4 - desiredDivision * 1 - 1
      )
    );
  }, [currentLeague, currentDivision, desiredDivision, desiredLeague, prices]);
  useEffect(() => {
    if (slicedPrices.length < 1) return;

    setTotal(
      slicedPrices.reduce(
        (accumulator, currentValue) => accumulator + currentValue
      ) *
        discount *
        additionalPercent
    );
  }, [slicedPrices, discount, additionalPercent]);

  return (
    <div className='flex flex-col md:flex-row max-w-screen-xl m-auto'>
      <div className='flex lg:flex-wrap md:w-1/2 flex-col lg:flex-row'>
        <div className='bg-pink rounded-2xl p-5 lg:flex-[0_0_50%] border-primary-blue border-4'>
          <div className='flex items-center gap-3 mb-5'>
            <div className='bg-primary-blue rounded-lg w-8 h-8'></div>
            <h3 className='text-white text-lg lg:text-[19px] font-medium leading-[1em] '>
              Current League
            </h3>
          </div>
          <div>
            <select
              className='block w-full max-w-64 m-auto p-3 text-base font-ReadexPro font-light'
              name=''
              id=''
              onChange={(e) => {
                setCurrentLeague(e.target.value);
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
              <option className='font-light' value='5'>
                Emerald
              </option>
              <option className='font-light' value='6'>
                Diamond
              </option>
            </select>
            <select
              className='block w-full max-w-64 m-auto mt-3 p-3 text-base font-ReadexPro font-light'
              name=''
              id=''
              onChange={(e) => setCurrentDivision(e.target.value)}
            >
              <option className='font-light' name='' id='' value='0'>
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
          <div>
            <div className='flex items-center gap-3 my-5'>
              <div className='bg-primary-blue rounded-lg w-8 h-8'></div>
              <h3 className='text-white text-lg lg:text-[19px] font-medium leading-[1em] '>
                Current LP
              </h3>
            </div>
            <div>
              <select
                className='block w-full max-w-64 m-auto mt-3 p-3 text-base font-ReadexPro font-light'
                name=''
                id=''
                onChange={(e) => setDiscount(1 - e.target.value)}
              >
                <option className='font-light' value='0'>
                  0-20
                </option>
                <option className='font-light' value='0.1699'>
                  21-40
                </option>
                <option className='font-light' value='0.1868'>
                  41-60
                </option>
                <option className='font-light' value='0.2369'>
                  61-80
                </option>
                <option className='font-light' value='0.3107'>
                  81-100
                </option>
              </select>
            </div>
          </div>
        </div>
        <div className='bg-pink rounded-2xl p-5 lg:flex-[0_0_50%] border-primary-blue border-4'>
          <div className='flex items-center gap-3 mb-5'>
            <div className='bg-primary-blue rounded-lg w-8 h-8'></div>
            <h3 className='text-white text-lg lg:text-[19px] font-medium leading-[1em] '>
              Desired League
            </h3>
          </div>
          <div>
            <select
              className='block w-full max-w-64 m-auto mt-3 p-3 text-base font-ReadexPro font-light'
              name=''
              id=''
              onChange={(e) => {
                setDesiredLeague(e.target.value);
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
              <option className='font-light' value='5'>
                Emerald
              </option>
              <option className='font-light' value='6' selected>
                Diamond
              </option>
            </select>
            <select
              className='block w-full max-w-64 m-auto mt-3 p-3 text-base font-ReadexPro font-light'
              name=''
              id=''
              onChange={(e) => setDesiredDivision(e.target.value)}
            >
              <option className='font-light' name='' id='' value='3'>
                Division IV
              </option>
              <option className='font-light' name='' id='' value='2'>
                Division III
              </option>
              <option className='font-light' name='' id='' value='1'>
                Division II
              </option>
              <option className='font-light' name='' id='' value='0' selected>
                Division I
              </option>
            </select>
          </div>
          <div>
            <div className='flex items-center gap-3 my-5'>
              <div className='bg-primary-blue rounded-lg w-8 h-8'></div>
              <h3 className='text-white text-lg lg:text-[19px] font-medium leading-[1em] '>
                LP GAIN
              </h3>
            </div>
            <select
              className='block w-full max-w-64 m-auto mt-3 p-3 text-base font-ReadexPro font-light'
              name=''
              id=''
              onChange={(e) => {
                const { value } = e.target;
                if (value == 1) setPrices(lpGain1Prices);
                if (value == 2) setPrices(lpGain2Prices);
                if (value == 3) setPrices(lpGain3Prices);
              }}
            >
              <option className='font-light' value='1'>
                10-19
              </option>
              <option className='font-light' value='2'>
                20-24
              </option>
              <option className='font-light' value='3'>
                25+
              </option>
            </select>
          </div>
        </div>
        <div className='bg-pink rounded-2xl p-5 lg:flex-[0_0_100%] flex-col lg:flex-row flex border-primary-blue border-4 h-fit'>
          <div className='w-full lg:w-1/2'>
            <div className='flex items-center gap-3 mb-5'>
              <div className='bg-primary-blue rounded-lg w-8 h-8'></div>
              <h3 className='text-white text-lg lg:text-[19px] font-medium leading-[1em] '>
                SERVER
              </h3>
            </div>
            <select
              className='block w-full max-w-64 m-auto mt-3 p-3 text-base font-ReadexPro font-light'
              name=''
              id=''
              onChange={(e) => {
                const { value } = e.target;
                if (value == 1) setPrices(lpGain1Prices);
                if (value == 2) setPrices(lpGain2Prices);
                if (value == 3) setPrices(lpGain3Prices);
              }}
            >
              <option className='font-light' value='1'>
                10-19
              </option>
              <option className='font-light' value='2'>
                20-24
              </option>
              <option className='font-light' value='3'>
                25+
              </option>
            </select>
          </div>
          <div className='w-full lg:w-1/2'>
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
              onChange={(e) => {
                const { value } = e.target;
                if (value == 1) setPrices(lpGain1Prices);
                if (value == 2) setPrices(lpGain2Prices);
                if (value == 3) setPrices(lpGain3Prices);
              }}
            >
              <option className='font-light' value='1'>
                10-19
              </option>
              <option className='font-light' value='2'>
                20-24
              </option>
              <option className='font-light' value='3'>
                25+
              </option>
            </select>
          </div>
        </div>
      </div>
      <div className='bg-pink rounded-2xl md:w-1/2 border-primary-blue border-4 p-5 h-fit'>
        <div className='flex items-center text-white w-fit mx-auto'>
          <IoOptionsOutline className='text-4xl text-black' />
          <h3>Boost customization</h3>
        </div>
        <div className='max-w-md mx-auto font-ReadexPro text-white text-[17px] lg:text-lg font-medium leading-[1em] flex flex-col gap-10 my-10'>
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
        {slicedPrices.length >= 1 && (
          <>
            <div className='flex items-center text-white gap-3'>
              <FaSackDollar className='text-3xl text-black' />
              <h2 className='text-lg leading-[1em] font-medium text-[19px]'>
                Total price
              </h2>
            </div>
            <h2 className='text-lg leading-[1em] font-medium text-[19px] text-white m-5'>
              {total.toFixed(2)}€
            </h2>
            <div className='bg-gradient-to-r from-[#703ffe] to-[#b392ff] px-6 py-4 rounded-md text-white w-fit'>
              PURCHASE
            </div>
            <p className='font-ReadexPro font-medium text-base mt-5'>
              DISCLAIMER: If the mmr doesn&apos;t match displayed rank, price
              has to be adjusted
            </p>
          </>
        )}
        {slicedPrices.length < 1 && (
          <p className='font-ReadexPro font-medium text-2xl text-red-600'>
            Error, Desired League must be greater than Current League
          </p>
        )}
      </div>
    </div>
  );
}

/*  */
