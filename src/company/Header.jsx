import React from 'react'
import demand from '../assets/company/demand.svg'
import spin from '../assets/company/spin.svg'
import suya from "../assets/company/suya.png"
import chicken from "../assets/company/chicken.png"
import rice from '../assets/company/rice.png'

const Header = () => {
  return (
    <div className='min-h-screen mt-[7rem]'>
      <div className="flex flex-row min-w-screen h-full space-x-3">
        <div className="flex flex-col  bg-[#EDE5DC] w-[40rem] h-[45rem]">

          <div className="flex space-x-0 ml-9">
          <img src={spin} 
          className='animate-spin ml-6'
          alt="" />

            <img src={demand} className='mr-6'  alt="" />
          </div>
          <div className="">
            <h1>About Us</h1>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. In natus enim repellat. Officia maxime autem ipsam sint impedit reiciendis architecto fugit repellendus quia? Harum nostrum libero esse tempora? Dolorum ipsa assumenda velit autem quibusdam voluptatem obcaecati aperiam earum temporibus fugiat.</p>
          </div>


        </div>
        <div className=" flex">
          <div className="flex flex-col space-x-3">
            <img src={suya}  className='w-[30rem]' alt="" />
            <img src={chicken} className='w-[30rem]' alt="" />
          </div>

<img src={rice}  className='w-[30rem] space-x-6' alt="" />
        </div>


      </div>

    </div>
  )
}

export default Header
