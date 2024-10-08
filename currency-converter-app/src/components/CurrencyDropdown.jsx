import React from 'react'
//passed in the following as props 

const CurrencyDropdown = ({
    currencies,
    currency,
    setCurrency,
    title = "",
}) => {


  return (
    <div>
      {/* Label for the dropdown, using the 'title' prop as the label text */}
      <label className='block text-sm font-medium text-gray-700'
      htmlFor={title}>{title}
      </label>


     {/* Dropdown element where users can select a currency */}
      <div className='mt-1 relative'>
        <select value={currency} onChange={(e)=> setCurrency (e.target.value)}
        className='w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-600'>


        {/* Map through the list of currencies and create an <option> element for each one */}   
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
