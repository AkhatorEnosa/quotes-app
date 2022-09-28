import React, {useState, useEffect } from 'react';
import * as htmlToImage from 'html-to-image';
import NavBar from './containers/NavBar'
import Quote from './containers/Quote';

function App() {
const [quote, setQuote] = useState([]);
// const [status, setStatus] = useState(false);
const handleCapture = () => {
  htmlToImage.toJpeg(document.getElementById('node'), { quality: 0.95 })
    .then(function (dataUrl) {
      var link = document.createElement('a');
      link.download = 'screenshot-from-kwota.jpeg';
      link.href = dataUrl;
      link.click();
    });
}

const getQuote = () => {
  fetch("https://api.quotable.io/random")
  .then(response => response.json())
  .then(data => setQuote(data));
};

useEffect(()=> {
  getQuote()
}, []);

const newQuote = () => {
  getQuote();
}

  if (quote.length === 0) {
    return (
      <div className="h-screen">
          <NavBar/>
          <div className="w-full flex flex-col text-center h-screen justify-center items-center bg-[#BDE4F4] ">
            <div className='w-50 h-50 flex flex-col justify-center align-center'>
              <span className='w-3 h-3 rounded-full p-10 bg-[#404969] mx-auto animate-bounce'></span>
            </div>
              <p className='text-2xl uppercase tracking-wider'>Loading</p>
          </div>
      </div>
    )
  } else {
    return (
      <div className="h-screen">
        <div id="node">
          <NavBar/>
            <Quote
              text={quote} 
              author={quote}
              tagName={quote}
              changeQuote={newQuote}
              captureButton={handleCapture}
              />
        </div>
      </div>
    )
  }

}

export default App;
