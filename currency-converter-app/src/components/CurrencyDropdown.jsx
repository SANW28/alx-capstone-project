import React from 'react'


const CurrencyDropdown = ({
    currencies,
    currency,
    setCurrency,
    title = "",
}) => {


  return (
    <div>
      <label className='block text-sm font-medium text-gray-700'
      htmlFor={title}>{title}
      </label>

      <div className='mt-1 relative'>
        <select value={currency} onChange={(e)=> setCurrency (e.target.value)}
        className='w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-600'>

           
        {currencies.map((currency) => {
          return (
            <option value={currency} key={currency}>{currency}</option>
          );
          })}
        
        </select>
        

        </div>




    </div>
  )
}

export default CurrencyDropdown
