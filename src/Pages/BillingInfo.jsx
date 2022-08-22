import React from 'react'
import { Link } from "react-router-dom";

const BillingInfo = () => {

  const inputclass = 'border-gray-b mt-4 border-[1px] text-xs text-gray2 focus:outline-none focus:border-2 focus:border-primary  placeholder-gray-400 p-3 rounded-md w-full'

  return (
    <form action="#">
   
    <div className="w-full mt-8">
      <label htmlFor="nameOnCard" className="text-20 font-bold after:content-['*'] after:ml-0.5 after:text-red-500 ">Name On Card</label>
        <input
          className={inputclass}
          name="nameOnCaard"
          placeholder="Type your name on card here..."
          type="text"
          required
        />
    </div>
    <div className="w-full mt-8">
    <label htmlFor="cardType" className="text-20 font-bold after:content-['*'] after:ml-0.5 after:text-red-500 " >Card Type</label>
          <select
            className={inputclass}
            name="cardType"
            required
          >
            <option value="" selected="selected">- Select payment type -</option>
                      <option value="mastercard">Mastercard</option>
                      <option value="verve">Verve</option>
                      <option value="visa">Visa</option>
          </select>
    </div>
    
    <div className="w-full mt-8 flex justify-between ">
      <div className="w-3/5 flex-4">
        <label htmlFor="cardDetails" className="text-20 font-bold after:content-['*'] after:ml-0.5 after:text-red-500 ">Card details</label>
          <input
            className={inputclass}
            name="cardDetails"
            id='cardDetails'
            // placeholder="Type your address here..."
            type="tel"
            pattern='\d*'
            maxlength="19" placeholder="Card Number"
          />
      </div>
      <div className="w-1/5 mx-8 flex-3">
      <label htmlFor="cardDetails" className="text-20 font-bold after:content-['*'] after:ml-0.5 after:text-red-500 ">Expire Date</label>
          <input
            className={inputclass}
            name="cardDetails"
            id='cardDetails'
            // placeholder="Type your address here..."
            type="tel"
            pattern='\d*'
            maxlength="5" placeholder="## / ##"
          />
      </div>
      <div className="w-1/5 flex-1">
      <label htmlFor="cardDetails" className="text-20 font-bold after:content-['*'] after:ml-0.5 after:text-red-500 ">CVV</label>
          <input
            className={inputclass}
            name="cardDetails"
            id='cardDetails'
            // placeholder="Type your address here..."
            type="tel"
            pattern='\d*'
            maxlength="19" placeholder="###"
          />
      </div>
    </div>
    <div className="w-full mt-16 flex  mb-28">
      <Link to="/confirmPayment">
        <button className='py-3 bg-gradient-to-b px-20 from-[#F2C94C] to-[#F2994A] rounded-md text-white text-20 font-bold'>Next</button>
      </Link>
      <Link to="/"> 
      <button className='py-3 bg-white rounded-md px-20 text-sec text-20 font-bold'>Cancel Payment</button>
      </Link>
    </div>
  </form>
  )
}

export default BillingInfo
