import React from 'react'
import {Input,Checkbox} from 'antd'
const { TextArea } = Input;

const Details = ({setDetails,setConfirmation}) => {
  return (
    <div className='flex flex-col px-4 py-2 w-[70%] '>
      <h2 className='text-xl mb-5 font-bold'>Enter Details</h2>
      <div className='flex flex-col gap-y-2 lg:w-[70%]'>
        <label htmlFor="" className='font-bold'>Name <span className='text-sm'>*</span></label>
        <Input placeholder="John Doe" />
      </div>
      <div className='flex flex-col gap-y-2 mt-4 lg:w-[70%]'>
        <label htmlFor="" className='font-bold'>Email <span className='text-sm'>*</span></label>
        <Input placeholder="account@refro.design" />
      </div>
      <div className='w-fit px-3 capitalize py-1 text-blue-600 bg-transparent border mt-4 rounded-full border-blue-400'>add guests</div>
      <div className='mt-4 lg:w-[70%]'>
        <h3 className='font-bold mt-5 capitalize'>i want fibery to work for <span className='text-sm'>*</span></h3>
        <div className='flex flex-col gap-y-2 pl-1 mt-1'>
        <Checkbox >🥕 Checkbox</Checkbox>
        <Checkbox >👭 Checkbox</Checkbox>
        <Checkbox >🦄 Checkbox</Checkbox>
        <Checkbox >🦅 Checkbox</Checkbox>
        </div>
      </div>
      <div className='mt-4 lg:w-[70%]'>
        <h3 className='font-bold mt-5 capitalize'>you are more about <span className='text-sm'>*</span></h3>
        <div className='flex flex-col gap-y-2 pl-1 mt-1'>
        <Checkbox >🗻 Leadership</Checkbox>
        <Checkbox >🦉 Consultingt</Checkbox>
        <Checkbox >⛅ Product Managemen</Checkbox>
        <Checkbox >🎨 Design</Checkbox>
        <Checkbox >💻 Engineering</Checkbox>
        <Checkbox >🎣 Sales</Checkbox>
        <Checkbox >💣 Marketing</Checkbox>
        <Checkbox >💎 Human Resources</Checkbox>
        <Checkbox >📚 Education</Checkbox>
        <Checkbox >❓ Something else</Checkbox>
        </div>
      </div>
      <div className='flex flex-col gap-y-2 mt-4 lg:w-[70%]'>
        <label htmlFor="" className='font-bold'>Please, share anything that will help prepare for our meeting</label>
        <TextArea rows={4} />
      </div>
      <div className='flex flex-col gap-y-2 mt-4 lg:w-[70%]'>
        <label htmlFor="" className='font-bold'>Please, share with us the name of your Fibery workspace (if any)</label>
        <TextArea rows={4} />
      </div>
      <div className='w-fit px-3 capitalize py-2 bg-blue-600 bg-transparent  mt-4 rounded-full text-white'
      onClick={()=>{setDetails(false);setConfirmation(true)}}>schedule event</div>
    </div>
  )
}

export default Details
