import React from 'react';

const Buttons = (props) => {
  return (
    <div className='w-full flex mx-auto justify-center mt-10'>
      <button className="bg-[#FF7F50] text-sm md:text-base px-4 py-3 rounded-md text-white shadow-md hover:text-white hover:bg-[#fc571c] duration-300 mx-5" onClick={props.changeButton}>
        New quote
      </button>
      <button
        className="bg-[#f75656] text-xs md:text-base px-4 py-3 rounded-md text-white shadow-md hover:text-white hover:bg-[#ce1a1a] duration-300 mx-5"
        onClick={props.capture}>
        Take Screenshot
      </button>
    </div>
  );
};

export default Buttons;
