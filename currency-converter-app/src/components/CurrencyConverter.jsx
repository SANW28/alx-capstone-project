import React, { useEffect, useState } from 'react'
import CurrencyDropdown from './CurrencyDropdown';
import { HiArrowsRightLeft } from 'react-icons/hi2';

/*API endpoints */
//https://v6.exchangerate-api.com/v6/b973d55c9b9d75856363a0a2/latest/USD
//https://v6.exchangerate-api.com/v6/b973d55c9b9d75856363a0a2/pair/${fromCurrency}/${toCurrency}/${amount}`        

const CurrencyConverter = () => {
  const [currencies, setCurrencies]=  useState([]);
  const [amount, setAmount] = useState (1);
  const [fromCurrency, setFromCurrency] = useState ("USD");
  const [toCurrency, setToCurrency] = useState ("GHS");
  const [convertedAmount, setConvertedAmount] = useState (null);

  //fetching Api
  const fetchCurrencies = async () => {
    try {
      const response = await fetch ("https://v6.exchangerate-api.com/v6/b973d55c9b9d75856363a0a2/latest/USD");
      //to check if the response is successfull
      if (!response.ok){
        throw new Error (`Oops! Something went wrong: ${response.statusText}`)
      }
      const data = await response.json();

      if (data && data.conversion_rates) {
        setCurrencies (Object.keys (data.conversion_rates));
      } else {
        throw new Error ("Hmm, the data we received isn't what we expected. Please try again later.")
      }
      

    } catch (error) {
      console.error("Error Fetching Data", error);
    }
  };

  useEffect (() =>{
    fetchCurrencies()
  },[]);
    console.log (currencies);

  //Currency conversion
  const convertCurrency = async() => {
    try {
      const response = await fetch (`https://v6.exchangerate-api.com/v6/b973d55c9b9d75856363a0a2/pair/${fromCurrency}/${toCurrency}/${amount}`)
    const data = await response.json();
    const rate = data.conversion_rate.toFixed(2);
    setConvertedAmount (rate);
    } catch (error) {
      console.error (error);
    } 
  };







const swapCurrencies = () => {
  setFromCurrency(toCurrency);
  setToCurrency(fromCurrency);
}
    

  return (
    <div className='max-w-xl mx-auto my-10 p-5 bg-white rounded-md shadow-md'> 
      <h2 className='mb-5 text-2xl font-semibold text-gray-700'>
        Currency Converter</h2>
        
        <div className='grid grid-cols-1 sm:grid-cols-3 gap-4 items-end'> 
          <CurrencyDropdown  
          currencies={currencies} 
          title='From:'
          currency={fromCurrency}
          setCurrency={setFromCurrency}
          

          />
          {/*swap currency button*/}
          <div className='flex justify-center -mb-5 sm:mb-0'>
            <button onClick={swapCurrencies}
            className='p-2 bg-gray-200 rounded-lg cursor-pointer hover:bg-blue-600' >
              < HiArrowsRightLeft className ="text-xl text-gray-700"/>
            </button>
          </div>

          <CurrencyDropdown 
          currencies={currencies} 
          title='To:'
          currency={toCurrency}
          setCurrency={setToCurrency}
          
          />
        </div>

      <div className='mt-4'>
          <label htmlFor="amount"
          className=' text-sm font-medium text-gray-700'
          >Amount:
          </label>
          <input value={amount}
           onChange={(e) => setAmount(e.target.value)}
          type="number" 
          className='w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-600'
          />
        </div> 
        
        <div className='mt-6 flex justify-end'>
          <button onClick={convertCurrency}
          className='px-5 py-2 bg-blue-700 text-white rounded-md hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2'>
            Convert</button>
        </div>

        {convertedAmount && (
          <div className='mt-4 text-lg font-medium text-red-700' >
            <h2> {amount} {fromCurrency} = {convertedAmount} {toCurrency} </h2>
            
           </div> 
        )}
       
        
        
        



        </div>
  )
}

export default CurrencyConverter

