import React from 'react'
import demand from '../assets/company/demand.svg'
import spin from '../assets/company/spin.svg'
import suya from "../assets/company/suya.png"
import chicken from "../assets/company/chicken.png"
import rice from '../assets/company/rice.png'

const Header = () => {
  return (
    <div className='min-h-screen mt-[7rem] '>
      <div className="flex flex-row  gap-6 ">
        <div className="flex flex-col  bg-[#EDE5DC] p-[2rem] rounded-lg ">

          <div className="flex space-x-0 ml-9  items-center">
          <img src={spin} 
          className='animate-spin ml-6  w-[8rem]'
          alt="" />

            <img src={demand} className='mr-6 absolute left-[15rem]  w-[12rem]'  alt="" />
          </div>
          <div className=" text-center mt-[7rem]">
            <h1 className='text-black text-[3rem]  '>About Us</h1>
            <p className='text-black text-xl font-bold text-left   '>We are an online food delivery platform <br/>committed to offering a convenient and dependable way for customers to order food from our diverse range of restaurants. With us, you can have your meals delivered straight to your doorstep in minutes!</p>
          </div>


        </div>
        <div className=" flex">
          <div className="flex flex-col  space-y-5">
            <img src={suya}  className='  w-[90rem]' alt="" />
            <img src={chicken} className='w-[80rem]' alt="" />
          </div>

        </div>
        <img src={rice}  className=' space-x-6 h-[42rem]' alt="" />



      </div>

    </div>
  )
}

export default Header
