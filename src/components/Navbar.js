import React, { useState } from 'react'
import logo from '../logo.png'
import {DownOutlined,EllipsisOutlined} from '@ant-design/icons'

const Navbar = ({setShowDemo}) => {
    const[active,SetActive] = useState(false)
  return (
    <div className='flex flex-row justify-between sticky px-2 py-5 items-center xl:px-20' >
      <div className='flex flex-row justify-center xl:w-[20%] mr-auto '>
            <span className='capitalize text-2xl text-black/90 font-mono font-bold'>fibery</span><img src={logo} alt="logo" className='h-5 mx-1' /> <span className='capitalize text-base mt-2 permanent-marker text-[#00d2ab]'>+AI Now</span>
      </div>
      <div className='xl:hidden flex flex-col gap-y-2  justify-center transition-all duration-200' onClick={()=>{SetActive(!active);console.log('click',active)}}>
        <div className={`w-[26px] h-[2px] transition-all duration-200 rounded-full bg-black ${active && 'translate-y-2 rotate-45'} `}></div>
        <div className={`w-[26px] h-[2px] transition-all duration-200 rounded-full bg-black ${active && '-translate-y-[0.1rem] -translate-x-[0.1rem] -rotate-45'} `}></div>
      </div>
      <div className={`xl:hidden absolute top-16 left-0 md:flex-row bg-white justify-between gap-y-3 py-8 overflow-hidden  px-4 w-full flex flex-col md:px-9 text-lg md:gap-x-3 min-h-[25vh] ${active ? 'scale-y-100' :'scale-y-0'}`} style={{transformOrigin:'top'}}>
        <div className='w-full md:h-fit md:py-3 font-bold  bg-[#242938] text-white border-2 py-2 text-center border-[#242938]'>Try for free</div>
        <div className='w-full md:h-fit md:py-3  bg-transparent text-[#242938] border-2 py-2 text-center border-[#242938]' onClick={()=>{setShowDemo(true)}}>Get a demo</div>
        <div className='w-full md:h-fit md:py-3 bg-transparent text-[#242938]  py-1 text-center hover:underline' >Log in</div>
      </div>
      <div className='hidden xl:flex flex-row gap-x-6 justify-around w-full ml-4'>
        <div className='capitalize text-[#242938] mr-2 font-[650] flex flex-row items-center gap-x-2'>solutions <DownOutlined className='text-sm text-gray-300 mb-1' /></div>
        <div className='capitalize text-[#242938] mr-2 font-[650] flex flex-row items-center gap-x-2'>products <DownOutlined className='text-sm text-gray-300 mb-1' /></div>
        <div className='capitalize text-[#242938] mr-2 font-[650] flex flex-row items-center gap-x-2'>resourse <DownOutlined className='text-sm text-gray-300 mb-1' /></div>
        <div className='capitalize text-[#242938] mr-2 font-[650] flex flex-row items-center gap-x-2'>pricing <DownOutlined className='text-sm text-gray-300 mb-1' /></div>
        <div className='text-lg mr-auto flex flex-row items-center gap-x-1'>
            <div className='w-[4px] h-[4px] bg-[#242938] rounded-full'></div>
            <div className='w-[4px] h-[4px] bg-[#242938] rounded-full'></div>
            <div className='w-[4px] h-[4px] bg-[#242938] rounded-full'></div>
        </div>
        <div className='w-fit bg-transparent px-2 text-[#242938] py-3 text-center text-lg hover:underline' >Log in</div>
        <div className='w-fit bg-transparent px-8 text-[#242938] border-2 py-3 text-center border-[#242938]' onClick={()=>{setShowDemo(true)}}>Get a demo</div>
        <div className='w-fit font-bold  px-8 bg-[#242938] text-white border-2 py-3 text-center border-[#242938]'>Try for free</div>
       
      </div>
    </div>
  )
}

export default Navbar
