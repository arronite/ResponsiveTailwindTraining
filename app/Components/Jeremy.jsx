import React from "react";
import Image from "next/image";
const Jeremy = () => {
  return (
    <div className="dark:bg-DarkBlue rounded-3xl  w-full my-2 h-full ">
      <div className="xl:h-4/6 h-1/3 rounded-3xl dark:bg-Blue items-center justify-center flex item-center  ">
        <div className="w-full h-full  items-start justify-start flex xl:flex-col">
          <div className=" xl:mx-5 mx-6 my-14 h-1/3">
            <Image
              id="jeremy-logo"
              src="/image-jeremy.png"
              width={150}
              height={100}
            />
          </div>
          <div className="my-auto w-2/3 xl:w-1/2 xl:h-2/3 h-1/2">
            <div className="xl:my-2 dark:text-PaleBlue text-lg xl:mx-5 w-full my-auto">
              Report for
            </div>
            <div className="font-light w-full flex 2xl:mx-5 xl:mx-2   text-6xl xl:h-full ">
              Jeremy Robson
            </div>
          </div>
        </div>
      </div>
      <div className=" xl:h-2/6 h-32 w-full flex  dark:text-PaleBlue items-center justify-center">
        <div className="w-3/4 h-full flex xl:flex-col items-center text-2xl ">
          <div className="h-20 items-center w-full  justify-center  flex xl:justify-normal  ">
            <span className="hover:text-white transition flex duration-100 cursor-pointer ">
              Daily
            </span>
          </div>
          <div className="h-20 items-center justify-center  xl:justify-normal w-full flex ">
            <span className="hover:text-white transition flex duration-100 cursor-pointer">
              Weekly
            </span>
          </div>
          <div className="h-20 items-center justify-center xl:justify-normal w-full flex ">
            <span className="hover:text-white transition flex duration-100 mx-3 cursor-pointer">
              Monthly
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Jeremy;
