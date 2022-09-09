import React from 'react';
import Buttons from './Buttons';

const Quote = (props) => {
  return (
    <div className='w-full h-screen bg-[#BDE4F4] flex flex-col items-center px-6'>
      <div className={props.status ? "animate-my-bounce" : "animate-my-bounce"}>
        <div className="w-[300px] md:w-[700px] bg-[#404969] py-10 sm:px-10 px-8 rounded-2xl mt-40 shadow-md">
          <span className='text-9xl absolute text-[#FF7F50] quote-mark left-[4rem] top-[14rem] tracking-widest'>&#10077;</span>
          <h1 className='text-2xl md:text-3xl mb-5 text-[#BDE4F4] quote text-center'>{props.text}</h1>
          <p className='text-[#FF7F50] author tracking-widest uppercase text-center'>-  {props.author}</p>
          <span className='text-9xl absolute text-[#FF7F50] quote-mark right-[4rem] top-[14rem] tracking-widest -scale-x-100'>&#10077;</span>
        </div>
      </div>

        <Buttons changeButton={props.changeQuote} copyButton={props.copyText}/>
        {/* <span>{props.copyStatus}</span>
        <input className="copy opacity-0 absolute" type="text" name="copy" value={props.getText}/> */}
    </div>
  );
};

export default Quote;
