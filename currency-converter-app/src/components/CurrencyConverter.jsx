import React from 'react'
/* */
//https://v6.exchangerate-api.com/v6/3cebfc61502c1b34ab0fa6ae/latest/USD
//https://v6.exchangerate-api.com/v6/3cebfc61502c1b34ab0fa6ae/pair/${fromCurrency}/${toCurrency}/${amount}`        

const CurrencyConverter = () => {
  return (
    <div className='max-w-xl mx-auto my-10 p-5 bg-white rounded-md shadow-md'> 
      <h2 className='mb-5 text-2xl font-semibold text-gray-700'>
        Currency Converter</h2>
        
        <div>Dropdowns </div>

      <div className='mt-4'>
          <label htmlFor="amount"
          className=' text-sm font-medium text-gray-700'
          >Amount:
          </label>
          <input 
          type="number" 
          className='w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-600'
          />
        </div> 
        
        <div className='mt-6 flex justify-end'>
          <button className='px-5 py-2 bg-blue-700 text-white rounded-md hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2'>
            Convert</button>
        </div>
        
        <div className='mt-4 text-lg font-medium text-red-700' >
        amount from CurrencyConverter
        </div>
        </div>
  )
}

export default CurrencyConverter

