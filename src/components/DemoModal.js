import React, { useState } from "react";
import SelectDate from "./SelectDate";
import Details from "./Details";
import Confirmation from "./Confirmation";
import {
  CloseOutlined,
  ClockCircleOutlined,
  RightOutlined,
  LeftOutlined,
  GlobalOutlined,
  CaretDownOutlined,
  ArrowLeftOutlined,
  CalendarOutlined,
} from "@ant-design/icons";
import logo from "../logo.png";

const DemoModal = ({ setShowDemo, showDemo }) => {

  const month = "november";
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [day, setDay] = useState("");
  const [details, setDetails] = useState(false);
  const [selectTime, setSelectTime] = useState(true);
  const [confirmation, setConfirmation] = useState(false);
  
  const reset = ()=>{
    setShowDemo(false);
    setDetails(false)
    setConfirmation(false)
    setSelectTime(true);
    setDay('')
    setTime('')
    setDate('')
  }
  



  return (
    <div className="">
      
      {showDemo && (
        <div className="bg-black/40 backdrop-blur-sm absolute w-full h-full flex flex-col top-0 z-10">
          <CloseOutlined
            className="text-white w-fit translate-x-[90vw] lg:mt-[5vh] lg:mb-[7vh] mt-[3vh] mb-[3vh] cursor-pointer text-xl text-left z-20"
            onClick={() => reset()}
          />
          <div className="flex flex-col h-[80vh] bg-white rounded-lg w-[100vw] overflow-x-clip mx-auto overflow-y-scroll md:w-[80%]">
            <div className="flex flex-col w-[9rem] font-bold absolute px-10 py-2 translate-y-[0.7rem] translate-x-[68vw]  rotate-[45deg] text-white bg-transparent z-30 bookmark">
              
            </div>
            {confirmation ? 
            <Confirmation month={month} day={day} time={time} date={date} />
            :
            <div className="flex flex-col">
              <div className="border-b-2 border-gray-200 py-7 xl:hidden">
                <img src={logo} alt="" className="h-12 xl:w-20 mx-auto" />
              </div>
              <div className="flex flex-col xl:flex-row ">
                <div className="flex flex-col px-6 xl:px-0 py-5 border-b xl:translate-y-9 2xl:w-[55%] xl:w-[40%] xl:border-b-0 xl:border-r border-gray-300/70">
                <div className="border-b-2 hidden xl:block border-gray-200 py-7 ">
                <img src={logo} alt="" className="h-12 mx-auto" />
              </div>
                  <span className="mt-4 xl:text-3xl text-center text-2xl capitalize font-bold lg:mb-8 lg:text-3xl">
                    Fibery Demo
                  </span>
                  <span className="xl:text-lg text-gray-500 text-lg my-4 lg:text-2xl lg:px-6 lg:my-6">
                    <ClockCircleOutlined /> 45 min
                  </span>
                  {details && <div className="my-3 text-gray-500">
                  <CalendarOutlined /> {time},{day},{month} {date} 2023
                  </div>}
                  <span className="text-gray-600 w-[95%] xl:w-[98%] xl:text-lg lg:w-[80%] lg:text-xl lg:px-6 ">
                    Book a meeting with our Fibery team. Talk to a real person
                    about how to get your processes set up with us &#129412; or
                    not &#128169;
                  </span>
                  <div className="mt-auto hidden px-5 xl:translate-y-9 xl:block mb-3 text-blue-600 text-left">
                    cookie setings
                  </div>
                </div>
                {selectTime && <SelectDate setDate={setDate} date={date} time={time} setTime={setTime} setDay={setDay} day={day} setDetails={setDetails} setSelectTime={setSelectTime} />}
                {details && <Details setDetails={setDetails} setConfirmation={setConfirmation} />}
              </div>
              <div className="mt-9 md:hidden mb-3 text-blue-600 text-center">
                cookie setings
              </div>
              
            </div>
            }
          </div>
        </div>
      )}
    </div>
  );
};

export default DemoModal;
