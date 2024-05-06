import React from 'react'
import logo from '../assets/company/logo.png'

const Nav = () => {
  return (
    <nav className='w-[87rem] h-[5rem] bg-[#2B2222]  flex items-center justify-center  -ml-[2.5rem] absolute top-5 rounded-[2rem]  '>
    <div className="flex items-center justify-between w-full">
      <img src={logo}
      className='w-[35px] ml-[2rem] bg-[#2B2222] rounded-full'
      alt='logo'/>

      <div className=" flex items-center justify-center space-x-12">
        <p className='text-white text-md'> Company</p>
        <p className='text-white text-md'> Brand</p>
      </div>
      <div className=" flex items-center justify-center space-x-9 mr-[4rem]">
        <p className='text-white text-md'> Contact us</p>
        <p className='text-white text-md'> Faqs</p>
        <p className='text-white text-md'> Blogs</p>
      </div>


    </div>

      
    </nav>
  )
}

export default Nav
