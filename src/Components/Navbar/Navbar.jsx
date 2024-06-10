import React, { useState } from 'react'
import { Link } from 'react-scroll';
import { AiOutlineMenuFold , AiOutlineHome ,  AiOutlineTeam } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import { HiOutlineXMark } from "react-icons/hi2";
import { IoPricetagsOutline } from "react-icons/io5";
import { MdOutlineContactMail } from "react-icons/md";
function Navbar() {
    const [toggleMenu , setToggleMenu] = useState (false);
    const  closeMenu =() => setToggleMenu (false);

  return (
    <div>
        <div className='flex justify-between px-3 pt-3 lg:px-[50px] lg:pt-2 items-center text-white'>
        <div className='cursor-pointer'>
            <Link to="Home" spy={true} smooth={true} offset={0} duration={800} className='flex gap-1 font-Logo lg:text-2xl'>
                <h1>Core</h1>
                <h1 className='text-orange-500'>Fitness</h1>
            </Link>
        </div>
        <div className='block lg:hidden'>
            <button onClick={()=> setToggleMenu(!toggleMenu)}><AiOutlineMenuFold size={20}/></button>
        </div> 
        <div className='hidden lg:block'>
            <ul className='flex gap-7 font-semibold'>
                <li className='hover:bg-orange-500 px-2 py-1 rounded-[5px] cursor-pointer hover:text-black'><Link to="Home" spy={true} smooth={true} offset={0} duration={800}>Home</Link></li>
                <li className='hover:bg-orange-500 px-2 py-1 rounded-[5px] cursor-pointer hover:text-black'><Link to="About" spy={true} smooth={true} offset={0} duration={800}>About us</Link></li>
                <li className='hover:bg-orange-500 px-2 py-1 rounded-[5px] cursor-pointer hover:text-black'><Link to="Package" spy={true} smooth={true} offset={0} duration={800}>Package</Link></li>
                <li className='hover:bg-orange-500 px-2 py-1 rounded-[5px] cursor-pointer hover:text-black'><Link to="Team" spy={true} smooth={true} offset={0} duration={800}>Our Team</Link></li>
                <li className='hover:bg-orange-500 px-2 py-1 rounded-[5px] cursor-pointer hover:text-black'><Link to="Contact" spy={true} smooth={true} offset={0} duration={800}>Contact</Link></li>
            </ul>
        </div>
        </div>

        { toggleMenu && <div className='block lg:hidden'>
        <div className='flex fixed top-0 bg-black w-9/12 h-full justify-between px-5 pt-5 text-white'>
        <div className=' pl-5'>  
            <a className='flex gap-1 font-Logo text-2xl' href="/">
                <h1>Core</h1>
                <h1 className=' text-orange-500'>Fitness</h1>
            </a>
            <div className=' absolute w-11/12 left-4 md:left-10 pt-5'><hr className='border-t-1 border-t-orange-500'/></div>   
            <ul className=' text-[14px] font-medium uppercase '> 
                <div className='flex items-center gap-4 pt-[50px]'>
                <AiOutlineHome size={20}/>
                <li className='hover:text-orange-500 cursor-pointer'><Link to="Home" spy={true} smooth={true} offset={0} duration={800} onClick={closeMenu}>Home</Link></li>
                </div>
                <div className='flex items-center gap-4 pt-8'>
                <CgProfile size={20}/>
                <li className='hover:text-orange-500 cursor-pointer'><Link to="About" spy={true} smooth={true} offset={0} duration={800} onClick={closeMenu}>About us</Link></li>
                </div>
                <div className='flex items-center gap-4 pt-8'>
                <IoPricetagsOutline size={20}/>
                <li className='hover:text-orange-500 cursor-pointer'><Link to="Package" spy={true} smooth={true} offset={0} duration={800} onClick={closeMenu}>Package</Link></li>
                </div>
                <div className='flex items-center gap-4 pt-8'>
                <AiOutlineTeam size={20}/>
                <li className='hover:text-orange-500 cursor-pointer'><Link to="Team" spy={true} smooth={true} offset={0} duration={800} onClick={closeMenu}>Our Team</Link></li>
                </div>
                <div className='flex items-center gap-4 pt-8'>
                <MdOutlineContactMail size={20}/>
                <li className='hover:text-orange-500 cursor-pointer'><Link to="Contact" spy={true} smooth={true} offset={0} duration={800} onClick={closeMenu}>Contact</Link></li>
                </div>
                <div className='absolute w-11/12 left-4 md:left-10 pt-[40px]'><hr className='border-t-1 border-t-orange-500'/></div>
            </ul>          
        </div>
            <div className=' bg-orange-500 h-5 rounded-[5px] mt-1.5'>
            <button onClick={()=> setToggleMenu(false)}><HiOutlineXMark size={20}/></button>
            </div>
        </div>
        </div>}
    </div>
  )
}
export default Navbar