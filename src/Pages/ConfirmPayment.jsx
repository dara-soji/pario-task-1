import React from 'react'
import { Link } from "react-router-dom";


const ConfirmPayment = () => {

  const inputclass = 'border-gray-b mt-4 border-[1px] text-xs text-gray2 focus:outline-none focus:border-2 focus:border-primary  placeholder-gray-400 p-3 rounded-md w-full'

  return (
    <form action="#">
   
    <div className="w-full mt-8 rounded-lg flex justify-center overflow-hidden h-[300px] shadow-md bg-white" >
        <div className="w-full flex flex-col justify-between items-center">
            <div className="w-full px-16 flex h-16 text-white font-bold items-center bg-[#2F80ED] justify-between">
                <p>Item</p>
                <p>₦ Price</p>
            </div>
            <div className="w-full px-16 flex h-16 text-sec  items-center  justify-between">
                <p>Data science and usability</p>
                <p>50,000.00</p>
            </div>
            <div className="w-full px-16 flex h-16 text-sec  items-center  justify-between">
                <p>Shipping</p>
                <p>0.00</p>
            </div>
            <div className="w-4/5 mx-16 flex h-1 text-sec bg-[#817E9E] items-center  justify-between">
                
            </div>
            <div className="w-4/5 px-4 border-[1px] my-8 rounded-md border-sec border-solid flex h-10 text-sec  items-center  justify-between">
                <p>Total</p>
                <p>50,000.00</p>
            </div>
        </div>
    </div>
    <div className="w-full mt-16 flex  mb-28">
      <Link to="/completed">
        <button className='py-3 bg-gradient-to-b px-20 from-[#F2C94C] to-[#F2994A] rounded-md text-white text-20 font-bold'>Next</button>
      </Link>
      <Link to="/"> 
      <button className='py-3 bg-white rounded-md px-20 text-sec text-20 font-bold'>Cancel Payment</button>
      </Link>
    </div>
  </form>
  )
}

export default ConfirmPayment
