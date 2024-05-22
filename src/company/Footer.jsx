import React from 'react'
import foodchow from '../assets/company/footerchow.svg'

const Footer = () => {
  return (
    <div className=" flex flex-col">
    <div className='bg-red-600 mt-7 flex flex-row h-[40rem] w-full  rounded-xl'>
      <div className=" flex flex-row items-center ml-[4rem] space-x-[8rem]  mb-[5rem] ">
      <div className=" mb-[8rem]">
        <img src={foodchow} alt="" />

      </div>
      <div className=" ">
<ul className='space-y-5 '>
    <li className='text-2xl text-white'>Blog</li>
    <li className='text-2xl text-white' > 500Chow</li>
    <li className='text-2xl text-white'>Gregg's Grill</li>
</ul>
      </div>
      <div className="space-y-5">
        <ul className='space-y-5'>
            <li className='text-2xl text-white'>Contact</li>
            <li className='text-2xl text-white'>hello@chowcentral.com</li>
            <li className='text-2xl text-white'>+2349021077210</li>
        </ul>
         
      </div>
      </div>
<div className="w-[80rem] h-[1px] bg-white absolute -bottom-[115rem] ml-[5rem]"></div>
<div className=" text-white absolute -bottom-[120rem] flex flex-row justify-between items-center space-x-[30rem]">
      <p className='text-white ml-9'>© 2023 ChowCentral All rights reserved.</p>

      <span className='flex space-x-5'>
      <p>Privacy

</p>
<p>Terms & Conditions</p>





      </span>
    </div>


     
    </div>

    </div>
  )
}

export default Footer
