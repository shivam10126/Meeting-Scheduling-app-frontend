import React from 'react'

const Hero = () => {
  return (
    <div className='flex flex-col container mx-auto px-8  lg:mt-7 xl:w-[70%] xl:h-[80vh] justify-center align-middle '>
      <span className='text-4xl mt-6 sm:text-7xl font-bold '>Build your own</span>
      <span className='text-4xl mb-3 sm:text-7xl font-bold'>work & knowledge hub</span>
      <span className='text-xl mt-7 sm:text-3xl'>If you've outgrown Jira, Notion, Airtable, and ClickUp</span>
      <span className='text-xl mb-7 sm:text-3xl'>— and are ready to replace them</span>
      <div>
        <div className='flex flex-col w-full gap-y-3 sm:flex-row sm:gap-x-5 lg:mt-14'>
          <input type="text" placeholder='Enter your work Email' className='bg-transparent xl:w-[18rem] w-full border-0 border-b-2 border-black outline-none text-lg px-3 pb-[0.2rem]' />
          <div className='px-8 xl:w-fit bg-[#00d2ab] text-lg font-bold text-white w-full py-2 text-center rounded-md'>Start your free trial</div>
        </div>
        <span className='mt-1 text-sm text-gray-400 permanent-marker'>Keep work and life separate by using your work email</span>
      </div>
    </div>
  )
}

export default Hero

