import React from 'react'
import { Link, useLocation } from "react-router-dom";

const PersonalInfo = () => {

  const inputclass = 'border-gray-b mt-4 border-[1px] text-xs text-gray2 focus:outline-none focus:border-2 focus:border-primary  placeholder-gray-400 p-3 rounded-md w-full'
  

  return (
        <form action="#">
          <div className="w-full mt-8">
            <label htmlFor="name" className="text-20 font-bold">Name</label>
              <input
                className={inputclass}
                name="name"
                placeholder="Type your name here..."
                type="text"
              />
          </div>
          <div className="w-full mt-8">
            <label htmlFor="email" className="text-20 font-bold after:content-['*'] after:ml-0.5 after:text-red-500 ">Email Address</label>
            <p className="font-normal text-[#817E9E] text-16 mt-4" >The purchase reciept would be sent to this address</p>
              <input
                className={inputclass}
                name="email"
                placeholder="Type your email address here..."
                type="email"
                required
              />
          </div>
          <div className="w-full mt-8">
            <label htmlFor="address1" className="text-20 font-bold">Address 1</label>
              <input
                className={inputclass}
                name="address1"
                placeholder="Type your address here..."
                type="text"
              />
          </div>
          <div className="w-full mt-8">
            <label htmlFor="address2" className="text-20 font-bold">Address 2</label>
              <input
                className={inputclass}
                name="address2"
                placeholder="Type your address here..."
                type="text"
              />
          </div>
          <div className="w-full mt-8 flex justify-between ">
            <div className="w-3/5 ">
              <label htmlFor="localgovernment" className="text-20 font-bold">Local Government</label>
                <input
                  className={inputclass}
                  name="localgovernment"
                  placeholder="Type your address here..."
                  type="text"
                />
            </div>
            <div className="w-1/5 ">
              <label htmlFor="state" className="text-20 font-bold">State</label>
                <select
                  className={inputclass}
                  name="localgovernment"
                  placeholder="Type your address here..."
                  type="text"
                >
                  <option value="" selected="selected">- Select -</option>
							<option value="Abia">Abia</option>
							<option value="Adamawa">Adamawa</option>
							<option value="AkwaIbom">AkwaIbom</option>
							<option value="Anambra">Anambra</option>
							<option value="Bauchi">Bauchi</option>
							<option value="Bayelsa">Bayelsa</option>
							<option value="Benue">Benue</option>
							<option value="Borno">Borno</option>
							<option value="Cross River">Cross River</option>
							<option value="Delta">Delta</option>
							<option value="Ebonyi">Ebonyi</option>
							<option value="Edo">Edo</option>
							<option value="Ekiti">Ekiti</option>
							<option value="Enugu">Enugu</option>
							<option value="FCT">FCT</option>
							<option value="Gombe">Gombe</option>
							<option value="Imo">Imo</option>
							<option value="Jigawa">Jigawa</option>
							<option value="Kaduna">Kaduna</option>
							<option value="Kano">Kano</option>
							<option value="Katsina">Katsina</option>
							<option value="Kebbi">Kebbi</option>
							<option value="Kogi">Kogi</option>
							<option value="Kwara">Kwara</option>
							<option value="Lagos">Lagos</option>
							<option value="Nasarawa">Nasarawa</option>
							<option value="Niger">Niger</option>
							<option value="Ogun">Ogun</option>
							<option value="Ondo">Ondo</option>
							<option value="Osun">Osun</option>
							<option value="Oyo">Oyo</option>
							<option value="Plateau">Plateau</option>
							<option value="Rivers">Rivers</option>
							<option value="Sokoto">Sokoto</option>
							<option value="Taraba">Taraba</option>
							<option value="Yobe">Yobe</option>
							<option value="Zamfara">Zamafara</option>
                </select>
            </div>
          </div>
          <div className="w-full mt-16 flex  mb-28">
            <Link to="/billingInfo">
              <button className='py-3 bg-gradient-to-b px-20 from-[#F2C94C] to-[#F2994A] rounded-md text-white text-20 font-bold'>Next</button>
            </Link>
            <button className='py-3 bg-white rounded-md px-20 text-sec text-20 font-bold'>Cancel Payment</button>
          </div>
        </form>
    
  )
}

export default PersonalInfo
