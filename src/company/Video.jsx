import React from 'react'
import chow from '../assets/company/food.mp4'
import order from '../assets/company/order.svg'

const Video = () => {
  return (
    <div className='w-full min-h-screen flex flex-row bg-red-600 rounded-xl '>
        <div className=" w-[60rem]">
        <video autoPlay loop muted  className='w-full  h-full object-cover rounded-lg  mr-[rem]   p-4'>
                <source src={chow}  className='h-[200rem] w-[40rem]'  type="video/mp4"/>
                Your browser doesnot support this tag


            </video>

        </div>
         <div className="flex flex-col ">
            <img src={order}  className='w-[20rem] flex justify-center  ml-[4rem]'alt=''/>
            <div className="flex flex-col ml-[3rem] mt-[9rem ]">
<h1 className='text-white text-5xl'>Our Mission </h1>
<p className='text-left mt-9  text-white leading-8 text-xl w-[25rem]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas delectus ab, cum mollitia perferendis suscipit? Commodi excepturi magnam magni accusamus facilis! Amet delectus facilis aliquam, animi reiciendis perferendis quia vel, a atque, reprehenderit molestiae recusandae nulla facere fugit nostrum vero?</p>

            </div>


        </div>
        
       
    </div>
  )
}

export default Video
