"use client";
import React, { useRef } from "react";
import Image from "next/image";
const Infos = ({ color, icon, title, time, history }) => {
  const hoverRef = useRef();
  return (
    <div className=" h-full w-full xl:my-0 my-5 rounded-3xl">
      <div className={`h-full w-full ${color} rounded-3xl`}>
        <div className={`h-1/5 w-full rounded-2xl m flex justify-end `}>
          <Image className="mx-5 " src={icon} width={90} height={90}></Image>
        </div>
        <div
          className={`h-4/5 w-full dark:bg-DarkBlue dark:hover:bg-DesaturatedBlue rounded-2xl grid  grid-rows-2`}
        >
          <div className="flex w-full justify-center items-center ">
            <div className="font-normal  w-1/2 text-3xl flex justify-start ml-10 ">
              {title}
            </div>
            <div
              onMouseEnter={() => (hoverRef.current.style.fill = "#ffffff")}
              onMouseLeave={() => (hoverRef.current.style.fill = "#BBC0FF")}
              className="font-medium text-2xl  my-auto flex justify-end w-1/2 mr-10"
            >
              <svg width="21" height="5" xmlns="http://www.w3.org/2000/svg">
                <path
                  ref={hoverRef}
                  d="M2.5 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm8 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm8 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Z"
                  fill="#BBC0FF"
                  fill-rule="evenodd"
                />
              </svg>
            </div>
          </div>
          <div className="xl:block flex">
            <div className="my-5 mx-4 w-full ">
              <span className="mx-auto  text-7xl font-light">{time}</span>
            </div>
            <div className=" flex items-center w-full my-5">
              <span className="mx-10  text-xl   font-light dark:text-PaleBlue ">
                Last Week-{history}
              </span>{" "}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Infos;
