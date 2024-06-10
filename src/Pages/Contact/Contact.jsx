import React from 'react'
import { Link } from 'react-scroll';
import { MdOutlinePhonelinkRing , MdOutlineLocationOn , MdKeyboardDoubleArrowUp   } from "react-icons/md";
import { AiOutlineMail } from "react-icons/ai";
function Contact() {
  return (
    <div id='Contact' className='w-full h-full bg-[#0E0E0E] text-white'>
        <div className='md:flex md:flex-row md:justify-center md:items-center lg:gap-10 md:gap-5 gap-[50px] sm:pt-[100px] py-[50px] flex flex-col items-center'>
        <div className='bg-[#FFFFFF1A] sm:w-[400px] h-[500px] rounded-[10px]'>
            <div className='text-center pt-11'>
                <h1 className='text-orange-500 font-font text-[18px]'>Contact Me</h1>
                <p className='pt-3 font-semibold text-[18px] px-4'>Let's talk on something great together</p>
            </div>
            <div className='w-full h-full flex flex-col pt-10 items-center gap-3 text-black'>
            <div className='space-x-5'>
                <input className='outline-none w-[148px] py-1 rounded-[4px] pl-2' type="text" name='FirstName' placeholder='FirstName'/>
                <input className='outline-none w-[148px] py-1 rounded-[4px] pl-2' type="text" name='FirstName' placeholder='LastName'/> 
            </div>  
            <input className='outline-none w-[315px] py-1 pl-2 rounded-[4px]' type="Email" name='Email' placeholder='Email'/>
            <textarea className='outline-none w-[315px] h-[150px] py-1 pl-2 rounded-[4px]' type="text" name='Message' placeholder='Message' />
            <div className=' pt-4'><button className='bg-orange-500 text-white px-4 py-1 rounded-[5px] font-semibold'>Sumbit</button></div>
            </div>
        </div>
        <div className='space-y-5 flex flex-col justify-center items-center'>
             <div className='bg-[#FFFFFF1A] h-[150px] md:w-[300px] w-[340px] rounded-[5px] flex flex-col justify-center items-center space-y-2'>
                <div className='text-orange-500 flex items-center gap-2'><MdOutlinePhonelinkRing size={30}/>
                <h1>Phone</h1>
                </div>
                <span className='pt-2 font-semibold'>+65 6325476012</span>
             </div>
             <div className='bg-[#FFFFFF1A] md:w-[300px] w-[340px] h-[150px] rounded-[5px] flex flex-col justify-center items-center space-y-4'>
             <div className='text-orange-500 flex items-center gap-2'><AiOutlineMail size={30}/>
             <h1>Email</h1>
             </div>   
                <span className='font-semibold'>CoreFitness@gmail.com</span>
             </div>
             <div className='bg-[#FFFFFF1A] md:w-[300px] w-[340px] h-[150px] rounded-[5px] flex flex-col justify-center items-center space-y-4'>
             <div className='text-orange-500 flex items-center gap-1'><MdOutlineLocationOn size={30}/>
             <h1>Location</h1>
             </div>  
                <span className='font-semibold text-center'>6391 Elgin St. Celina,Delaware <br/> Pincode : 10299</span>
             </div>
            </div>
        </div>
        <div className='hidden sm:block'>
        <div className='flex cursor-pointer justify-end px-10 py-10'>
             <Link to="Home" spy={true} smooth={true} offset={0} duration={800} className='bg-slate-100 flex items-end justify-center w-[30px] h-[30px] rounded-[5px] text-black'><MdKeyboardDoubleArrowUp size={30}/></Link>
            </div>
        </div>    
    </div>
  )
}

export default Contact