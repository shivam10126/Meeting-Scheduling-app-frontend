import React from 'react'
import {CheckOutlined,UserOutlined,CalendarOutlined,GlobalOutlined,VideoCameraOutlined} from '@ant-design/icons'

const Confirmation = ({time,day,month,date}) => {
  return (
    <div className='flex flex-col px-4 pt-5 mb-2'>
      <img src='https://images.unsplash.com/photo-1557862921-37829c790f19?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt="" className='w-20 h-20 object-cover mx-auto rounded-full ' />
      <div className='mt-7 w-fit text-black font-bold  mx-auto flex flex-row items-center'>
      <span className='p-1 px-[0.40rem] rounded-full bg-green-700 mr-2 text-[0.7rem] scale-75'><CheckOutlined className='text-white' /></span><span className='text-2xl'> You are scheduled</span>
      </div>
      <div className='mt-3 text-sm text-gray-400 text-center w-[80%] mx-auto'>A calendar invitation has been sent to your email address.</div>
      <div className='border border-gray-300 rounded-lg p-4 xl:w-[40%] flex flex-col gap-y-3 md:w-[60%] mx-auto mt-2 lg:w-[50%]'>
      <div>Fibery Demo</div>
      <div><UserOutlined />Polina Zenevich</div>
      <div className=""><CalendarOutlined /> {time},{day},{month} {date} 2023</div>
      <div className="">
         <GlobalOutlined className="text-[#0d0d0d] mr-2 " />
          <span>UK, Ireland, Lisbon Time (16:54)</span>
      </div>
      <div><VideoCameraOutlined /> Web conferencing details to follow.</div>
      </div>
      
      <div className='text-lg font-bold md:w-fit border-t border-gray-300 mt-6 pt-4 mx-auto'>Schedule your own meetings with Calendly for free</div>
      <div className='w-fit  mx-auto pr-16 text'>Eliminate the back-and-forth emails for finding time.</div>
      <div className='flex  md:w-fit mx-auto mt-3 lg:gap-x-5 flex-col justify-center md:flex-row gap-y-4 gap-x-2 px-1 py-2'>
        <div className='flex flex-row md:px-4  gap-x-3 text-nowrap  py-2 px-6 w-fit mx-auto justify-center rounded-full border border-black'><img src="https://assets.calendly.com/assets/booking/media/google-a1417560f643c2131124.svg" alt="" />Sign up with Google</div>
        <div className='flex flex-row text-nowrap md:px-4  gap-x-3 py-2 px-6 w-fit mx-auto justify-center rounded-full border border-black'><img src="https://assets.calendly.com/assets/booking/media/microsoft-42b61fa109e1e5d566ff.svg" alt="" />Sign up with Google</div>
      </div>
      <div className='capitalize text-blue-600 text-center text-sm mt-4'>
        sign up with work email
      </div>
      <div className="mt-auto pt-3 mb-3 text-sm text-blue-600 text-left">
                cookie setings
              </div>
    </div>
  )
}

export default Confirmation
