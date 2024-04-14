'use client';

import { useEffect, useState } from 'react';

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

  console.log(slicedPrices);

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
      )
    );
    setTotal(
      slicedPrices.reduce(
        (accumulator, currentValue) => accumulator + currentValue
      ) * discount
    );
  }, [slicedPrices, discount]);

  return (
    <div>
      <div>
        <h3>LP GAIN</h3>
        <select
          name=''
          id=''
          onChange={(e) => {
            const { value } = e.target;
            if (value == 1) setPrices(lpGain1Prices);
            if (value == 2) setPrices(lpGain2Prices);
            if (value == 3) setPrices(lpGain3Prices);
          }}
        >
          <option value='1'>10-19</option>
          <option value='2'>20-24</option>
          <option value='3'>25+</option>
        </select>
      </div>
      <div>
        <h3>CURRENT LP</h3>
        <select name='' id='' onChange={(e) => setDiscount(1 - e.target.value)}>
          <option value='0'>0-20</option>
          <option value='0.1699'>21-40</option>
          <option value='0.1868'>41-60</option>
          <option value='0.2369'>61-80</option>
          <option value='0.3107'>81-100</option>
        </select>
      </div>
      <div>
        <h3>Current league</h3>
        <select
          name=''
          id=''
          onChange={(e) => {
            setCurrentLeague(e.target.value);
          }}
        >
          <option value='0'>Iron</option>
          <option value='1'>Bronze</option>
          <option value='2'>Silver</option>
          <option value='3'>Gold</option>
          <option value='4'>Platinum</option>
          <option value='5'>Emerald</option>
          <option value='6'>Diamond</option>
        </select>
        <select
          name=''
          id=''
          onChange={(e) => setCurrentDivision(e.target.value)}
        >
          <option name='' id='' value='0'>
            Division IV
          </option>
          <option name='' id='' value='1'>
            Division III
          </option>
          <option name='' id='' value='2'>
            Division II
          </option>
          <option name='' id='' value='3'>
            Division I
          </option>
        </select>
      </div>
      <div>
        <h3>Desired league</h3>
        <select
          name=''
          id=''
          onChange={(e) => {
            setDesiredLeague(e.target.value);
          }}
        >
          <option value='0'>Iron</option>
          <option value='1'>Bronze</option>
          <option value='2'>Silver</option>
          <option value='3'>Gold</option>
          <option value='4'>Platinum</option>
          <option value='5'>Emerald</option>
          <option value='6' selected>
            Diamond
          </option>
        </select>
        <select
          name=''
          id=''
          onChange={(e) => setDesiredDivision(e.target.value)}
        >
          <option name='' id='' value='3'>
            Division IV
          </option>
          <option name='' id='' value='2'>
            Division III
          </option>
          <option name='' id='' value='1'>
            Division II
          </option>
          <option name='' id='' value='0' selected>
            Division I
          </option>
        </select>
      </div>
      {slicedPrices.length < 1 && (
        <p>GREŠKA, DESIRED MORA BITI VEĆI OD CURRENT</p>
      )}
      {slicedPrices.length >= 1 && <h1>Total: ${total.toFixed(2)}</h1>}
    </div>
  );
}
