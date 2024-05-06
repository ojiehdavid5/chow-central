import React from 'react'
import logo from '../assets/company/logo.png'

const Nav = () => {
  return (
    <nav className='w-[87rem] h-[5rem] bg-[#2B2222]  flex items-center justify-center  ml-[1.5rem] absolute top-5 rounded-[2rem]  '>
    <div className="flex items-center justify-between w-full">
      <img src={logo}
      className='w-[35px]'
      alt='logo'/>

      <div className=" flex items-center justify-center space-x-12">
        <p> Company</p>
        <p> Brand</p>
      </div>
      <div className=" flex items-center justify-center space-x-9 mr-[4rem]">
        <p className='text-white text-md'> Contact us</p>
        <p> Faqs</p>
        <p> Blogs</p>
      </div>


    </div>

      
    </nav>
  )
}

export default Nav
