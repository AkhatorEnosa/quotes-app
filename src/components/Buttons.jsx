import React from 'react';

const Buttons = (props) => {
  return (
    <div className='w-full flex mx-auto justify-center mt-10'>
      <button className="bg-[#FF7F50] text-sm md:text-base px-4 py-3 rounded-md text-white shadow-md hover:text-white hover:bg-[#fc571c] duration-300 mx-5" onClick={props.changeButton}>
        New quote
      </button>
      <button
        className="bg-[#24cb2f] text-xs md:text-base px-4 py-3 rounded-md text-white shadow-md hover:text-white hover:bg-[#18ae47] duration-300 mx-5"
        onClick={props.capture}>
        Download
      </button>
    </div>
  );
};

export default Buttons;
