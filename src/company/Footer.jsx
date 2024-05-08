import React from 'react'
import foodchow from '../assets/company/footerchow.svg'

const Footer = () => {
  return (
    <div className='bg-red-600 mt-7 flex flex-row h-[45rem] w-full space-x-6 items-center '>
      <div className="">
        <img src={foodchow} alt="" />

      </div>
      <div className=" space-y-4">
<ul>
    <li className='text-3xl text-white'>Blog</li>
    <li className='text-3xl text-white' > 500Chow</li>
    <li className='text-3xl text-white'>Gregg's Grill</li>
</ul>
      </div>
      <div className="space-y-5">
        <ul>
            <li className='text-3xl text-white'>Contact</li>
            <li className='text-3xl text-white'>hello@chowcentral.com</li>
            <li className='text-3xl text-white'>+2349021077210</li>
        </ul>
         
      </div>
    </div>
  )
}

export default Footer
