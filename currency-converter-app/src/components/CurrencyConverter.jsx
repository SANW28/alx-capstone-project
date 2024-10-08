import React, { useEffect, useState } from 'react'
import CurrencyDropdown from './CurrencyDropdown';
import ConversionResult from './ConversionResult';
import AmountInput from './AmountInput';
{/*import { HiOutlineArrowsRightLeft } from "react-icons/hi2";*/}


//environment variables
const apiKey = import.meta.env.VITE_API_KEY;
const apiUrl = import.meta.env.VITE_API_URL;

/*API endpoints */
//https://v6.exchangerate-api.com/v6/b973d55c9b9d75856363a0a2/latest/USD
//https://v6.exchangerate-api.com/v6/b973d55c9b9d75856363a0a2/pair/${fromCurrency}/${toCurrency}/${amount}`        

const CurrencyConverter = () => {
  const [currencies, setCurrencies]=  useState([]);
  const [amount, setAmount] = useState (1);
  const [fromCurrency, setFromCurrency] = useState ("USD");
  const [toCurrency, setToCurrency] = useState ("GHS");
  const [convertedAmount, setConvertedAmount] = useState (null);
  const [conversionRate, setConversionRate] = useState(1);


  //fetching currencies from Api
  const fetchCurrencies = async () => {
    try {
      const response = await fetch (`${apiUrl}/${apiKey}/latest/USD`);

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


  //fetching conversiom rate
  const fetchConversionRate = async () => {
    try {
      const response = await fetch (`${apiUrl}/${apiKey}/pair/${fromCurrency}/${toCurrency}/${amount}`)
    const data = await response.json();
    const currentRate = data.conversion_rate
    setConversionRate(currentRate);
    } catch (error) {
      console.error ("Error during conversion", error);
      
    }
}


  useEffect (() =>{
    fetchCurrencies()
  },[]);

  useEffect(() => {
  fetchConversionRate();
  }, [fromCurrency, toCurrency]);


    console.log ("Currencies :", currencies);
    console.log ("Conversion Rate :", conversionRate)


    


    


  //Currency conversion
  const convertCurrency = async() => {
    try {
      const response = await fetch (`${apiUrl}/${apiKey}/pair/${fromCurrency}/${toCurrency}/${amount}`)
    const data = await response.json();
    const rate = data.conversion_result;
    setConvertedAmount (rate);
    
    } catch (error) {
      console.error ( error);
    } 
  };

useEffect (() => {
      setConversionRate();
},[fromCurrency, toCurrency]);


//swap currencies
const swapCurrencies = () => {
  setFromCurrency(toCurrency);
  setToCurrency(fromCurrency);
}


    

  return (
    <div className='max-w-xl mx-auto my-10 p-5 bg-white rounded-md shadow-md'> 
        <h2 className='mb-5 text-2xl font-semibold text-gray-700'>
            Currency Converter
        </h2>
        

        {/*from currency dropdown */}
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
            className='p-2 bg-gray-200 border-x-4 rounded-full cursor-pointer hover:bg-gray-300 hover:border-blue-600 transition duration-300 ease-in-out' >
              &#8646;
            </button>
          </div>

          {/*to currency dropdown */}
          <CurrencyDropdown 
          currencies={currencies} 
          title='To:'
          currency={toCurrency}
          setCurrency={setToCurrency}
          />
        </div> 


      {/*amount section */}
      <AmountInput amount= {amount} setAmount= {setAmount} />


        {/*convert button */}
        <div className='mt-6 flex justify-end'>
          <button onClick={convertCurrency}
          className='px-5 py-2 bg-blue-700 text-white rounded-md hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2'>
            Convert
            </button>
        </div>

        <div className='text'>
          Converion Rate : 1 {fromCurrency} = {conversionRate} {toCurrency}
        </div>


        {/*converted amount */}
           < ConversionResult  
           amount={amount}
           convertedAmount= {convertedAmount}
           fromCurrency={fromCurrency}
           toCurrency={toCurrency}
           /> 
            
      

        </div>
  );
};

export default CurrencyConverter;

