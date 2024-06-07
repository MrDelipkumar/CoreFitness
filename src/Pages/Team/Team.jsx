import React from 'react'
import { AiOutlineTwitter , AiOutlineInstagram , AiOutlineWhatsApp } from "react-icons/ai";
import crossfit from '../../assets/img-1.jpg'
import weightlifting from '../../assets/img-2.webp'
import Fitness from '../../assets/img-3.webp'
import bodybuilding from '../../assets/img-4.webp'
function Team() {
  return (
    <div id='Team' className='w-full h-full bg-[#0E0E0E] text-white'>
        <div className='uppercase text-center pt-5'>
            <h1 className='text-orange-500 font-font text-[14px] sm:text-[20px]'>Our Trainers</h1>
            <h2 className='font-bold sm:text-[28px] text-[18px] pt-5 px-5'>Train with experts</h2>
        </div>
        <div className='flex justify-center py-10 sm:pt-[50px] sm:pb-[100px]'>
            <div className='flex flex-col xl:flex xl:flex-row sm:gap-10 group'>
            <div className='sm:flex sm:flex-row sm:gap-10'>
            <div className='mt-5 flex flex-col items-center w-[280px] bg-[#FFFFFF1A] pt-5 rounded-[10px] cursor-pointer group-hover:blur-sm hover:!blur-none group-hover:scale-[0.85] hover:!scale-100 hover:border hover:border-orange-500'>
                <img className='h-[300px] rounded-[10px]' src={crossfit} alt="crossfit trainer" title='crossfit trainer' />
                <h1 className='uppercase font-font pt-2 text-orange-500'>Elizabeth olivia</h1>
                <h2 className='uppercase pt-2 font-semibold text-[12px]'>crossfit trainer</h2>
                <div className='flex gap-[20px] my-5'>      
                <div className='bg-black w-[30px] h-[30px] flex items-center justify-center rounded-full'><button><AiOutlineTwitter size={18}/></button></div>
                <div className='bg-black w-[30px] h-[30px] flex items-center justify-center rounded-full'><button><AiOutlineInstagram size={18}/></button></div>
                <div className='bg-black w-[30px] h-[30px] flex items-center justify-center rounded-full'><button><AiOutlineWhatsApp size={18}/></button></div>
                </div>
            </div>
            <div className='mt-5 flex flex-col items-center w-[280px] bg-[#FFFFFF1A] pt-5 rounded-[10px] cursor-pointer group-hover:blur-sm hover:!blur-none group-hover:scale-[0.85] hover:!scale-100 hover:border hover:border-orange-500'>
                <img className='h-[300px] rounded-[10px]' src={weightlifting} alt="weight lifting trainer" title='weight lifting trainer' />
                <h1 className='uppercase font-font pt-2 text-orange-500'>Alexander</h1>
                <h2 className='uppercase pt-2 font-semibold text-[12px]'>weight lifting trainer</h2>
                <div className='flex gap-[20px] my-5'>      
                <div className='bg-black w-[30px] h-[30px] flex items-center justify-center rounded-full'><button><AiOutlineTwitter size={18}/></button></div>
                <div className='bg-black w-[30px] h-[30px] flex items-center justify-center rounded-full'><button><AiOutlineInstagram size={18}/></button></div>
                <div className='bg-black w-[30px] h-[30px] flex items-center justify-center rounded-full'><button><AiOutlineWhatsApp size={18}/></button></div>
                </div>
            </div>
            </div>
            <div className='sm:flex sm:flex-row sm:gap-10'>
            <div className='mt-5 flex flex-col items-center w-[280px] bg-[#FFFFFF1A] pt-5 rounded-[10px] cursor-pointer group-hover:blur-sm hover:!blur-none group-hover:scale-[0.85] hover:!scale-100 hover:border hover:border-orange-500'>
                <img className='h-[300px] rounded-[10px]' src={Fitness} alt="Fitness trainer" title='Fitness trainer' />
                <h1 className='uppercase font-font pt-2 text-orange-500'>emma watson</h1>
                <h2 className='uppercase pt-2 font-semibold text-[12px]'>Fitness trainer</h2>
                <div className='flex gap-[20px] my-5'>      
                <div className='bg-black w-[30px] h-[30px] flex items-center justify-center rounded-full'><button><AiOutlineTwitter size={18}/></button></div>
                <div className='bg-black w-[30px] h-[30px] flex items-center justify-center rounded-full'><button><AiOutlineInstagram size={18}/></button></div>
                <div className='bg-black w-[30px] h-[30px] flex items-center justify-center rounded-full'><button><AiOutlineWhatsApp size={18}/></button></div>
                </div>
            </div> 
            <div className='mt-5 flex flex-col items-center w-[280px] bg-[#FFFFFF1A] pt-5 rounded-[10px] cursor-pointer group-hover:blur-sm hover:!blur-none group-hover:scale-[0.85] hover:!scale-100 hover:border hover:border-orange-500'>
                <img className='h-[300px] rounded-[10px]' src={bodybuilding} alt="bodybuilding trainer" title='bodybuilding trainer' />
                <h1 className='uppercase font-font pt-2 text-orange-500'>Michael Daniel</h1>
                <h2 className='uppercase pt-2 font-semibold text-[12px]'>body building trainer</h2>
                <div className='flex gap-[20px] my-5'>      
                <div className='bg-black w-[30px] h-[30px] flex items-center justify-center rounded-full'><button><AiOutlineTwitter size={18}/></button></div>
                <div className='bg-black w-[30px] h-[30px] flex items-center justify-center rounded-full'><button><AiOutlineInstagram size={18}/></button></div>
                <div className='bg-black w-[30px] h-[30px] flex items-center justify-center rounded-full'><button><AiOutlineWhatsApp size={18}/></button></div>
                </div>
            </div>
            </div>
            </div>
        </div>
    </div>
  )
}

export default Team