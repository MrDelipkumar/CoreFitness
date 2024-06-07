import React from 'react'
import { LuDumbbell , LuHeartPulse } from "react-icons/lu";
import { TbTreadmill } from "react-icons/tb";
import { MdNoFood } from "react-icons/md";
function About() {
  return (
    <div id='About' className='bg-[#0E0E0E] w-full h-full text-white'>
        <div className='text-center pt-10'>
            <h1 className='text-orange-500 uppercase font-font text-[14px] sm:text-[20px] animate-flash'>why choose us ?</h1>
            <h2 className='pt-5 px-5 font-bold sm:text-[28px] text-[18px]'>PUSH YOUR LIMITS FORWARD</h2>
        </div>
        <div className='lg:flex justify-center py-[50px] 2xl:mx-[200px] md:gap-10 2xl:gap-[80px]'>
            <div className='sm:flex sm:flex-row flex flex-col justify-center sm:gap-10 2xl:gap-[80px]'>
            <div className='flex flex-col justify-center items-center py-10'> 
            <div> 
            <div className='bg-[#FFFFFF1A] flex items-center justify-center hover:bg-orange-500 h-[80px] w-[80px] text-orange-500 hover:text-white rounded-full'>
                <div><TbTreadmill size={40}/></div>
            </div>
            </div>
            <div>
            <h1 className='text-center pt-5 text-[18px] font-medium'>Modern equipment</h1>
            <p className='text-center text-gray-400 pt-5 text-[12px]'>Lorem ipsum dolor sit amet, consectetur <br/> adipiscing elit, sed do eiusmod tempor <br/> incididunt ut dolore facilisis.</p>
            </div>
            </div>

            <div className='flex flex-col justify-center items-center py-10'> 
            <div> 
            <div className='bg-[#FFFFFF1A] flex items-center justify-center hover:bg-orange-500 h-[80px] w-[80px] text-orange-500 hover:text-white rounded-full'>
                <div><MdNoFood size={40}/></div>
            </div>
            </div>
            <div>
            <h1 className='text-center pt-5 text-[18px] font-medium'>Healthy nutrition plan</h1>
            <p className='text-center text-gray-400 pt-5 text-[12px]'>Lorem ipsum dolor sit amet, consectetur <br/> adipiscing elit, sed do eiusmod tempor <br/> incididunt ut dolore facilisis.</p>
            </div>
            </div>
            </div>

            <div className='sm:flex sm:flex-row flex flex-col justify-center sm:gap-10 2xl:gap-[80px]'>
            <div className='flex flex-col justify-center items-center py-10'> 
            <div> 
            <div className='bg-[#FFFFFF1A] flex items-center justify-center hover:bg-orange-500 h-[80px] w-[80px] text-orange-500 hover:text-white rounded-full'>
                <div><LuDumbbell size={40}/></div>
            </div>
            </div>
            <div>
            <h1 className='text-center pt-5 text-[18px] font-medium'>Professional training plan</h1>
            <p className='text-center text-gray-400 pt-5 text-[12px]'>Lorem ipsum dolor sit amet, consectetur <br/> adipiscing elit, sed do eiusmod tempor <br/> incididunt ut dolore facilisis.</p>
            </div>
            </div>

            <div className='flex flex-col justify-center items-center py-10'> 
            <div> 
            <div className='bg-[#FFFFFF1A] flex items-center justify-center hover:bg-orange-500 h-[80px] w-[80px] text-orange-500 hover:text-white rounded-full'>
                <div><LuHeartPulse size={40}/></div>
            </div>
            </div>
            <div>
            <h1 className='text-center pt-5 text-[18px] font-medium'>Unique to your needs</h1>
            <p className='text-center text-gray-400 pt-5 text-[12px]'>Lorem ipsum dolor sit amet, consectetur <br/> adipiscing elit, sed do eiusmod tempor <br/> incididunt ut dolore facilisis.</p>
            </div>
            </div>
            </div>
        </div>
        </div>
  )
}
export default About