import React, { useState } from "react";
import {
  CloseOutlined,
  ClockCircleOutlined,
  RightOutlined,
  LeftOutlined,
  GlobalOutlined,
  CaretDownOutlined,
  ArrowLeftOutlined,
} from "@ant-design/icons";
import logo from "../logo.png";

const SelectDate = ({setDate,date,setTime,time,day,setDay,setSelectTime,setDetails}) => {

  const numbers = Array.from({ length: 30 }, (_, index) => index + 1);
  const timebar = Array.from({ length: 10 }, (_, index) => index + 1);
  const month = "november";
  const [sidebar, setSidebar] = useState(false);
  const Selectdate = (index) => {
    if (index >= 27) {
      setDate(index);
      setSidebar(true);
      const daynum = (index + 2) % 7;
      switch (daynum) {
        case 1:
          setDay("monday");
          break;
        case 2:
          setDay("tuesday");
          break;
        case 3:
          setDay("wednesday");
          break;
        case 4:
          setDay("thursday");
          break;
        case 5:
          setDay("friday");
          break;
        case 6:
          setDay("saturday");
          break;
        case 0:
          setDay("sunday");
          break;

        default:
          break;
      }
    }
  };
  return (
    <div className="w-full">
      <div className="px-4 py-6 ">
                  <h4 className="text-center font-bold text-xl">
                    Select a Sate & Time
                  </h4>
                  <div className="flex flex-col items-center">
                    <div className="mt-4 md:hidden mb-4">
                      <LeftOutlined className="text-[#757575] p-3 rounded-full" />
                      <span className="capitalize tab:mx-5 mx-3 text-[#131313] md:text-xl text-lg">
                        november 2023
                      </span>
                      <RightOutlined className="text-[#2b66d0] bg-[#eff5ff] p-3 rounded-full " />
                    </div>
                    <div className=" hidden md:flex flex-row xl:gap-x-3 xl:px-9 justify-center gap-x-10 w-full xl:h-[58vh] mt-8 h-[70vh] ">
                      <div className="w-[50%] 2xl:w-[60%]">
                      <div className="mb-3 w-fit mx-auto">
                      <LeftOutlined className="text-[#757575] p-2 rounded-full" />
                      <span className="capitalize mx-7 text-[#131313] text-base">
                        november 2023
                      </span>
                      <RightOutlined className="text-[#2b66d0] bg-[#eff5ff] p-2 rounded-full " />
                    </div>
                    <div
                        className={` ${sidebar ? 'gap-5':'gap-x-4 gap-y-3' }  -translate-x-5 grid grid-cols-7 h-fit text-base text-[#2f2f2f]`}
                      >
                        <div className="text-center">MON</div>
                        <div className="text-center">TUE</div>
                        <div className="text-center">WED</div>
                        <div className="text-center">THU</div>
                        <div className="text-center">FRI</div>
                        <div className="text-center">SAT</div>
                        <div className="text-center">SUN</div>
                        <div></div>
                        <div></div>
                        {numbers.map((number) => (
                          <div
                            key={number}
                            className={`text-center rounded-full p-2 ${
                              number >= 27
                                ? "text-blue-600 font-bold bg-blue-100"
                                : "text-gray-400"
                            }`}
                            onClick={() => Selectdate(number)}
                          >
                            {number}
                          </div>
                        ))}
                      </div>
                      <div className="mr-auto md:mt-8 mt-4 py-5 md:text-left">
                      <h3 className="capitalize w-full md:text-sm md:mb-0  text-lg font-bold mb-3 ">
                        time zone
                      </h3>
                      <GlobalOutlined className="text-[#0d0d0d] mr-2 " />
                      <span>
                        UK, Ireland, Lisbon Time (16:54) <CaretDownOutlined />{" "}
                      </span>
                    </div>
                    <div className="mt-9 pb-5 mb-3 xl:hidden text-blue-600 text-left">
                cookie setings
              </div>
                      </div>
                      {sidebar && 
                      <div className=" hidden md:block 2xl:w-[15vw] xl:w-[20vw] translate-x-4 overflow-y-scroll">
                        
                        <div className="capitalize text-base w-fit mx-auto text-[#131313] mb-6 mt-2">
                          {day},{month} {date}{" "}
                        </div>
                        <div className="flex flex-col gap-y-3">
                          {timebar.map((number) => (
                            <>
                              {time === `${number}:00` ? (
                                 <div
                                 key={number + 2}
                                 className="flex flex-row gap-x-2 w-[90%] mx-auto"
                               >
                                  <div className="bg-[#666] text-center rounded-md py-2 w-full text-white font-bold text-lg">
                                    {number}:00
                                  </div>
                                  <div className="bg-[#0069ff] text-center rounded-md py-2 w-full text-white font-bold text-lg" onClick={()=>{
                                    setDetails(true);
                                    setSelectTime(false)
                                    }}>
                                    Next
                                  </div>
                                </div>
                              ) : (
                                <div
                                  key={number}
                                  className={`w-[90%] mx-auto py-2 text-lg border-2 border-blue-300 hover:border-blue-600 text-blue-700 rounded-md text-center`}
                                  onClick={() => setTime(`${number}:00`)}
                                >
                                  {number} : 00
                                </div>
                              )}
                              {time === `${number}:30` ? (
                                <div
                                  key={number + 3}
                                  className="flex flex-row gap-x-2 w-[90%] mx-auto"
                                >
                                  <div className="bg-[#666] text-center rounded-md py-2 w-full text-white font-bold text-lg">
                                    {number}:30
                                  </div>
                                  <div className="bg-[#0069ff] text-center py-2 w-full rounded-md text-white font-bold text-lg"  onClick={()=>{
                                    setDetails(true);
                                    setSelectTime(false)
                                    }}>
                                    Next
                                  </div>
                                </div>
                              ) : (
                                <div
                                  key={number + 1}
                                  className={`w-[90%] mx-auto py-2 text-lg border-2 border-blue-300 hover:border-blue-600 text-blue-700 rounded-md text-center`}
                                  onClick={() => setTime(`${number}:30`)}
                                >
                                  {number} : 30
                                </div>
                              )}
                            </>
                          ))}
                        </div>
                      </div>}
                    </div>
                    
                    {sidebar ? (
                      <div className=" md:hidden w-full h-full">
                        <ArrowLeftOutlined
                          className="text-lg text-blue-600 p-2 rounded-full bg-blue-100"
                          onClick={() => setSidebar(false)}
                        />
                        <div className="capitalize text-lg mt-2 w-fit mx-auto text-[#131313] mb-6">
                          {day},{month} {date}{" "}
                        </div>
                        <div className="flex flex-col gap-y-3">
                          {timebar.map((number) => (
                            <>
                              {time === `${number}:00` ? (
                                <div
                                  key={number + 2}
                                  className="flex flex-row gap-x-2 w-[90%]  mx-auto"
                                >
                                  <div className="bg-[#666] text-center rounded-md py-4 w-full text-white font-bold text-lg">
                                    {number}:00
                                  </div>
                                  <div className="bg-[#0069ff] text-center rounded-md py-4 w-full text-white font-bold text-lg" onClick={()=>{
                                    setDetails(true);
                                    setSelectTime(false)
                                    }}>
                                    Next
                                  </div>
                                </div>
                              ) : (
                                <div
                                  key={number}
                                  className={`w-[90%] mx-auto py-4 text-lg border-2 border-blue-300 hover:border-blue-600 text-blue-700 rounded-md text-center`}
                                  onClick={() => setTime(`${number}:00`)}
                                >
                                  {number} : 00
                                </div>
                              )}
                              {time === `${number}:30` ? (
                                <div
                                  key={number + 3}
                                  className="flex flex-row gap-x-2 w-[90%] mx-auto"
                                >
                                  <div className="bg-[#666] text-center rounded-md py-4 w-full text-white font-bold text-lg">
                                    {number}:30
                                  </div>
                                  <div className="bg-[#0069ff] text-center py-4 w-full rounded-md text-white font-bold text-lg"  onClick={()=>{
                                    setDetails(true);
                                    setSelectTime(false)
                                    }}>
                                    Next
                                  </div>
                                </div>
                              ) : (
                                <div
                                  key={number + 1}
                                  className={`w-[90%] mx-auto py-4 text-lg border-2 border-blue-300 hover:border-blue-600 text-blue-700 rounded-md text-center`}
                                  onClick={() => setTime(`${number}:30`)}
                                >
                                  {number} : 30
                                </div>
                              )}
                            </>
                          ))}
                        </div>
                      </div>
                    ) : (
                      <div
                        className={` md:hidden grid grid-cols-7 md:text-lg xl:gap-x-3 md:gap-x-6 md:gap-y-2 tab:gap-x-4 tab:gap-y-2 gap-1 text-[#2f2f2f] my-6`}
                      >
                        <div className="text-center">MON</div>
                        <div className="text-center">TUE</div>
                        <div className="text-center">WED</div>
                        <div className="text-center">THU</div>
                        <div className="text-center">FRI</div>
                        <div className="text-center">SAT</div>
                        <div className="text-center">SUN</div>
                        <div></div>
                        <div></div>
                        {numbers.map((number) => (
                          <div
                            key={number}
                            className={`text-center rounded-full p-2 ${
                              number >= 27
                                ? "text-blue-600 font-bold bg-blue-100"
                                : "text-gray-400"
                            }`}
                            onClick={() => Selectdate(number)}
                          >
                            {number}
                          </div>
                        ))}
                      </div>
                    )}

                    <div className="mr-auto md:mt-8 mt-4 md:text-left md:hidden">
                      <h3 className="capitalize w-full md:text-sm md:mb-0  text-lg font-bold mb-3 ">
                        time zone
                      </h3>
                      <GlobalOutlined className="text-[#0d0d0d] mr-2 " />
                      <span>
                        UK, Ireland, Lisbon Time (16:54) <CaretDownOutlined />{" "}
                      </span>
                    </div>
                  </div>
                </div>
    </div>
  )
}

export default SelectDate
