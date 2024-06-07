import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import CoreFitnessMoblie from '../../assets/video-16.mp4'
import CoreFitnessDesktop from '../../assets/video-17.mp4'

function Home() {
  return (
    <div id='Home' className='h-full w-full bg-[#0E0E0E] text-white'>
      <div>
          <video className='w-full h-screen block lg:hidden object-cover object-center' src={CoreFitnessMoblie} autoPlay loop muted title='Core Fitness Moblie' alt='Core Fitness Moblie'></video>
          <video className='w-full h-screen hidden lg:block object-cover object-center' src={CoreFitnessDesktop} autoPlay loop muted title='Core Fitness Desktop' alt='Core Fitness Moblie'></video>
      <div className='absolute top-0 w-full'>
      <Navbar/>
      <div className='flex space-x-2 w-full h-screen justify-center items-center uppercase font-font text-[20px] sm:text-[40px]'>
          <h1>Bulid</h1>
          <h2 className='text-orange-500'>Your</h2>
          <h3>Body</h3>
          <h4 className='text-orange-500'>Strong</h4>
        </div>
      </div>
      </div>
    </div>
  )
}

export default Home