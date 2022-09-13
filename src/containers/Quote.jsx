import React from 'react';
import Buttons from './Buttons';

const Quote = (props) => {
  return (
      <div className='w-full bg-[#BDE4F4] flex flex-col items-center px-6 pb-6'>
        <div className='max-h-[650px] fixed text-[#404969] overflow-hidden opacity-5 text-[10rem] backdrop -rotate-12 text-center top-2 mx-auto'>
          <p>{props.text}</p>
        </div>

        <div className='z-20'>
          <div className={props.status ? "animate-my-bounce" : "animate-my-bounce"}>
              <div className='w-[300px] md:w-[700px] flex justify-between top-[10rem] absolute mx-auto'>
                <span className='text-9xl text-[#FF7F50] quote-mark tracking-widest'>&#10077;</span>
                <span className='text-9xl text-[#FF7F50] quote-mark tracking-widest -scale-x-100'>&#10077;</span>
              </div>

              <div className="w-[300px] md:w-[700px] bg-[#404969] py-10 sm:px-10 px-8 rounded-2xl shadow-md mt-28 items-center">
                <h1 className='text-2xl md:text-3xl mb-5 text-[#BDE4F4] quote text-center'>{props.text}</h1>
                <p className='text-[#FF7F50] author tracking-widest uppercase text-center'>-  {props.author}</p>
              </div>

              <div className='flex justify-end my-4 mx-0 text-[0.6rem] uppercase px-2 shadow-sm'>
                <p className='bg-slate-400 w-fit text-[#BDE4F4] p-1 rounded-sm'>{props.tagName}</p>
              </div>
          </div>

            <Buttons changeButton={props.changeQuote} capture={props.captureButton}/>
          </div>
      </div>
  );
};

export default Quote;
