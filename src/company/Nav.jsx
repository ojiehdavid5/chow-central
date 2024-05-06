import React from 'react'
import logo from '../assets/company/logo.png'

const Nav = () => {
  return (
    <nav className='w-[87rem] h-[5rem] bg-[#2B2222]  flex items-center justify-center  ml-[1.5rem] absolute top-5 rounded-[2rem]'>
    <div className="flex items-center justify-center">
      <img src={logo}
      className='w-[35px]'
      alt='logo'/>
      

    </div>

      
    </nav>
  )
}

export default Nav
