import React from 'react'
import { Link } from 'react-router-dom'
import { CheckIcon } from '@chakra-ui/icons'



const Completed = () => {
  return (
    <div className='w-full h-full flex items-center'>
      <div className="w-[600px] h-[400px] px-28 flex flex-col items-start justify-start bg-white -translate-y-[45px] rounded-lg shadow-lg">
        <div className="w-[84px] h-[84px] p-3 rounded-full shadow-md self-center mt-16">
            <CheckIcon    />
        </div>
        <p className='font-bold text-36 loading-10 mt-4 text-sec'>Purchase Completed</p>
        <p className="text-20 font-medium mt-4 ">Please check your email for details concerning 
this transaction</p>
<Link to="/" className="text-primary mt-4">Return Home</Link>
      </div>
    </div>
  )
}

export default Completed
