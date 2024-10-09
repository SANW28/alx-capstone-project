import React from "react";

const AmountInput = ({amount, setAmount}) =>{
    return (
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
    );
};

export default AmountInput;