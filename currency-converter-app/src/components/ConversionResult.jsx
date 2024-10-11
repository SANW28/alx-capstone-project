import React from "react";

const ConversionResult = ({ amount, convertedAmount, fromCurrency, toCurrency}) => {
    return (
        <>
        {convertedAmount && (
          <div className='mt-4 text-lg font-extrabold' >
            <h2> 
                {amount} {fromCurrency} = {convertedAmount} {toCurrency} 
            </h2>
           </div> 
        )}
        
        </>
    );
};

export default ConversionResult;