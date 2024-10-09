import React from "react";

const ConversionResult = ({ amount, convertedAmount, fromCurrency, toCurrency}) => {
    return (
        <>
        {convertedAmount && (
          <div className='mt-4 text-lg font-medium text-red-700' >
            <h2> 
                {amount} {fromCurrency} = {convertedAmount} {toCurrency} 
            </h2>
           </div> 
        )}
        
        </>
    );
};

export default ConversionResult;