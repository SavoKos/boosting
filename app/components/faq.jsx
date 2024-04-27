'use client';

import React, { useState } from 'react';

function Faq() {
  const [questionActive, setQuestionActive] = useState(1);

  return (
    <div class='flex flex-col items-center my-40 max-w-screen-lg w-full m-auto'>
      <button className='getbutton btn'>FAQs</button>
      <h1 class='cfirsth1 text-center text-3xl md:text-[40px]'>
        Frequently Asked <br />
        Questions
      </h1>
      <p className='text-base text-white font-ReadexPro font-light leading-[1.4em] m-10'>
        Below is a list of frequently asked questions
      </p>
      <div className='flex items-center gap-3 flex-col sm:flex-row w-full justify-center'>
        <p
          className='hover:bg-gradient-to-r from-[#703ffe] to-[#b392ff] text-white px-3 py-1 rounded-lg cursor-pointer bg-secondary-blue border-[1px] border-gray-700 w-full sm:w-fit text-center'
          onClick={() => setQuestionActive(1)}
        >
          Question 1
        </p>
        <p
          className='hover:bg-gradient-to-r from-[#703ffe] to-[#b392ff] text-white px-3 py-1 rounded-lg cursor-pointer bg-secondary-blue border-[1px] border-gray-700 w-full sm:w-fit text-center'
          onClick={() => setQuestionActive(2)}
        >
          Question 2
        </p>
        <p
          className='hover:bg-gradient-to-r from-[#703ffe] to-[#b392ff] text-white px-3 py-1 rounded-lg cursor-pointer bg-secondary-blue border-[1px] border-gray-700 w-full sm:w-fit text-center'
          onClick={() => setQuestionActive(3)}
        >
          Question 3
        </p>
        <p
          className='hover:bg-gradient-to-r from-[#703ffe] to-[#b392ff] text-white px-3 py-1 rounded-lg cursor-pointer bg-secondary-blue border-[1px] border-gray-700 w-full sm:w-fit text-center'
          onClick={() => setQuestionActive(4)}
        >
          Question 4
        </p>
      </div>

      <p
        className={`font-ReadexPro text-white font-light border-t-[1px] border-gray-800 mt-7 pt-6  ${
          questionActive === 1 ? 'block' : 'hidden'
        }`}
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi,
        adipisci cumque. Nostrum maiores veritatis molestiae ducimus tempore
        culpa, adipisci molestias alias. Suscipit praesentium hic magni dolorum
        obcaecati sint dolore itaque?
      </p>
      <p
        className={`font-ReadexPro text-white font-light border-t-[1px] border-gray-800 mt-7 pt-6 ${
          questionActive === 2 ? 'block' : 'hidden'
        }`}
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, vero.
        Earum inventore itaque similique dolorum iusto dolorem cum atque,
        expedita, impedit et autem soluta fuga cumque a fugit, aperiam
        veritatis?
      </p>
      <p
        className={`font-ReadexPro text-white font-light border-t-[1px] border-gray-800 mt-7 pt-6 ${
          questionActive === 3 ? 'block' : 'hidden'
        }`}
      >
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit
        reiciendis quam dolorem nesciunt et sed architecto asperiores
        perferendis libero ipsum optio consequuntur debitis, error aut
        inventore! Impedit veniam excepturi temporibus.
      </p>
      <p
        className={`font-ReadexPro text-white font-light border-t-[1px] border-gray-800 mt-7 pt-6 ${
          questionActive === 4 ? 'block' : 'hidden'
        }`}
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, beatae
        sit blanditiis consequatur repellat laborum dolor corporis, impedit
        suscipit ratione amet voluptatem animi labore obcaecati? Facilis dolorem
        eos pariatur voluptas?
      </p>
    </div>
  );
}

export default Faq;
