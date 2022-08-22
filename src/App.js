import './App.css';
import PersonalInfo from './Pages/PersonalInfo';
import BillingInfo from './Pages/BillingInfo';
import ConfirmPayment from './Pages/ConfirmPayment';
import { Route, Routes, Navigate, useLocation  } from 'react-router';
import Completed from './Pages/Completed';
import { useEffect, useState } from 'react';



function App() {

  let location = useLocation().pathname;

const [isPaying, setIsPaying] = useState(true)

useEffect(() => {
  if(location === "/completed"){
    setIsPaying(false)
  }else{
    setIsPaying(true)

  }

  
}, [location])


  return (
    <div className="relative flex justify-center min-h-screen w-screen border-spacing-1 border-cyan-900">
      <div id='background' className="absolute w-full h-screen overflow-hidden">
        <div className="h-4/5 bg-white -skew-y-12 w-full translate-y-[90%]"></div>
      </div>

      <div className="z-10 max-w-[600px] mt-[45px]">
     {isPaying  &&  <div>

        <p className=' font-bold text-36 loading-10 text-sec pt-20'>Complete your Purchase</p>
        <div className="w-full">
          <div className="w-full text-gray4 text-24 font-bold flex justify-between pt-10">
            <p className={location === "/personalInfo"? "text-primary" : "text-gray4"}>Personal Info</p>
            <p className={location === "/billingInfo"? "text-primary" : "text-gray4"}>Billing Info</p>
            <p className={location === "/confirmPayment"? "text-primary" : "text-gray4"}>Confirm Payment</p>
          </div>
          <div className="relative w-full flex mt-4 justify-between  ">
            <div className="z-10 w-full flex justify-between">
            <div className={`${location === "/personalInfo"? "bg-primary" : "bg-none"} w-[30%] h-3  rounded-md `}></div>
            <div className={`${location === "/billingInfo"? "bg-primary" : "bg-none"} w-[30%] h-3  rounded-md `}></div>
            <div className={`${location === "/confirmPayment"? "bg-primary" : "bg-none"} w-[30%] h-3  rounded-md `}></div>
            </div>
            <div className="-z-1 absolute top-0 bottom-0 right-0 left-0 w-full before:content-[''] before:absolute before:left-0 before:right-0 before:bottom-[40%] before:bg-black before:top-[50%] ">
            </div>
          </div>
        </div>
     </div>
     }
          
      <Routes>
          <Route path="/personalInfo" element={<PersonalInfo />}></Route>
        <Route path="/billingInfo" element={<BillingInfo />}></Route>
         <Route path="/confirmPayment" element={<ConfirmPayment />}></Route>
         <Route path="/completed" element={<Completed />}></Route>
          <Route path="/" element={<Navigate replace to="/personalInfo" />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
