import React, {useState, useEffect} from 'react';
import NavBar from './containers/NavBar'
import Quote from './containers/Quote';

function App() {
const [quote, setQuote] = useState([]);
const [status, setStatus] = useState(false);

const getQuote = () => {
  fetch("https://goquotes-api.herokuapp.com/api/v1/random?count=1")
  .then(response => response.json())
  .then(data => setQuote(data.quotes[0]));
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
          <NavBar/>
          <Quote
            text={quote.text} 
            author={quote.author}
            onClickButton={newQuote}
            // status={status}
            />
      </div>
    )
  }

}

export default App;
