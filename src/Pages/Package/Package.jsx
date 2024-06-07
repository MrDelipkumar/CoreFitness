import React from 'react'

function Package() {
  return (
    <div id='Package' className='w-full h-full bg-[#0E0E0E] text-white pb-10 lg:pb-0 lg:py-10'>

      <div className='uppercase text-center pt-5'>
        <h1 className='font-font text-orange-500 text-[14px] sm:text-[20px]'>our package plan</h1>
        <h2 className='font-bold sm:text-[28px] text-[18px] pt-5 px-5'>choose your package plan</h2>
      </div>
      <div className='flex flex-col items-center'>
      <div className='lg:flex lg:flex-row lg:justify-center lg:gap-5 py-10 lg:py-[100px]'>
        <div className='sm:flex sm:justify-center sm:gap-5 lg:gap-5 sm:pt-5 lg:pt-0'>
        <div className='mt-5 sm:mt-0 w-[300px] h-[380px] hover:h-[450px] group bg-[#FFFFFF1A] py-5 rounded-[10px] hover:!scale-100 hover:border hover:border-orange-500'>   
          <h1 className='text-center text-orange-500 font-font text-[24px]'>1 Month unlimited</h1>
          <h2 className='text-center font-bold pt-3 text-[20px]'>99 $ / Month</h2>
          <div className='flex flex-col items-center pt-7 font-medium'>
            <span className='pt-3'>Free riding</span>
            <span className='pt-3'>Unlimited equipments</span>
            <span className='pt-3'>Personal trainer</span>
            <span className='pt-3'>Weight losing classes</span>
            <span className='pt-3'>Month to mouth</span>
            <span className='pt-3'>No time restriction</span>
          </div>
          <div className='flex justify-center pt-10'>
          <button className='bg-orange-500 px-5 py-1 hidden group-hover:block rounded-[5px]'>Register</button>
          </div>
        </div>

        <div className='mt-5 sm:mt-0 w-[300px] h-[380px] hover:h-[450px] group hover:transition-all bg-[#FFFFFF1A] py-5 rounded-[10px] hover:!scale-100 hover:border hover:border-orange-500'>   
          <h1 className='text-center text-orange-500 font-font text-[24px]'>12 Month unlimited</h1>
          <h2 className='text-center font-bold pt-3 text-[20px]'>499 $ / Month</h2>
          <div className='flex flex-col items-center pt-7 font-medium'>
            <span className='pt-3'>Free riding</span>
            <span className='pt-3'>Unlimited equipments</span>
            <span className='pt-3'>Personal trainer</span>
            <span className='pt-3'>Weight losing classes</span>
            <span className='pt-3'>Month to mouth</span>
            <span className='pt-3'>No time restriction</span>
          </div>
          <div className='flex justify-center pt-10'>
          <button className='bg-orange-500 px-5 py-1 hidden group-hover:block rounded-[5px]'>Register</button>
          </div>
        </div>
        </div>

        <div className='sm:flex sm:justify-center sm:pt-16 lg:pt-0'>
        <div className='mt-5 sm:mt-0 w-[300px] h-[380px] hover:h-[450px] group hover:transition-all bg-[#FFFFFF1A] py-5 rounded-[10px] hover:!scale-100 hover:border hover:border-orange-500'>   
          <h1 className='text-center text-orange-500 font-font text-[24px]'>3 Month unlimited</h1>
          <h2 className='text-center font-bold pt-3 text-[20px]'>299 $ / Month</h2>
          <div className='flex flex-col items-center pt-7 font-medium'>
            <span className='pt-3'>Free riding</span>
            <span className='pt-3'>Unlimited equipments</span>
            <span className='pt-3'>Personal trainer</span>
            <span className='pt-3'>Weight losing classes</span>
            <span className='pt-3'>Month to mouth</span>
            <span className='pt-3'>No time restriction</span>
          </div>
          <div className='flex justify-center pt-10'>
          <button className='bg-orange-500 px-5 py-1 hidden group-hover:block rounded-[5px]'>Register</button>
          </div>
        </div>
        </div>
        </div>

  


      </div>

    </div>
  )
}

export default Package