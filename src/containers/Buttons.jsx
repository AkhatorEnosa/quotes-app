import React from 'react';

const Buttons = (props) => {
  return (
    <div className='w-full flex mx-auto justify-center mt-10'>
      <button className="bg-[#FF7F50] px-4 py-3 rounded-md text-white shadow-md hover:text-white hover:bg-[#e24309] duration-300" onClick={props.changeButton}>
        New quote
      </button>
      {/* <button
        className="bg-[#FF7F50] px-4 py-3 rounded-md text-white shadow-md hover:text-white hover:bg-[#e24309] duration-300"
        onClick={props.copyText}>
        Copy
      </button> */}
    </div>
  );
};

export default Buttons;
