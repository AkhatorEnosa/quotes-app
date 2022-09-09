import React from 'react';
import Buttons from './Buttons';

const Quote = (props) => {
  return (
    <div className='w-full h-screen bg-[#BDE4F4] flex flex-col items-center px-6'>
      {/* <div className={props.status ? "hidden" : "block"}> */}
        <div className="max-w-[700px] bg-[#404969] py-10 sm:px-10 px-8 rounded-2xl text-center mt-40 shadow-md">
            <h1 className='text-2xl md:text-3xl mb-5 text-[#BDE4F4] quote'>{props.text}</h1>
          <p className='text-[#FF7F50] author tracking-wider uppercase'>-{props.author}</p>
        {/* </div> */}

        <Buttons buttonClick={props.onClickButton}/>
      </div>
    </div>
  );
};

export default Quote;
