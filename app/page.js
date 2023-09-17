"use client";

import Infos from "./Components/Infos";
import Jeremy from "./Components/Jeremy";
export default function Home() {
  return (
    <div className=" dark:text-white dark:bg-VeryDarkBlue w-full xl:h-screen h-full flex items-center justify-center">
      <div
        id="grid-box"
        className="xl:mx-15  w-full mx-20   xl:grid xl:grid-cols-4 xl:gap-10"
      >
        <Jeremy />
        <div className="xl:grid xl:grid-rows-2  xl:gap-10 my flex flex-col w-full">
          <Infos
            color="dark:bg-LightOrange"
            icon="icon-work.svg"
            title="Work"
            time="32hrs"
            history="36hrs"
          />
          <Infos
            color="dark:bg-LimeGreen"
            icon="icon-exercise.svg"
            title="Exercise"
            time="4hrs"
            history="5hrs"
          />
        </div>
        <div className="xl:grid xl:grid-rows-2  xl:gap-10 my flex flex-col w-full">
          {" "}
          <Infos
            color="dark:bg-SoftBlue"
            icon="icon-play.svg"
            title="Play"
            time="10hrs"
            history="8hrs"
          />
          <Infos
            color="dark:bg-Violet"
            icon="icon-social.svg"
            title="Social"
            time="5hrs"
            history="10hrs"
          />
        </div>
        <div className="xl:grid xl:grid-rows-2  xl:gap-10 my flex flex-col w-full">
          {" "}
          <Infos
            color="dark:bg-LightRed"
            icon="icon-study.svg"
            title="Study"
            time="4hrs"
            history="7hrs"
          />
          <Infos
            color="dark:bg-SoftOrange"
            icon="icon-self-care.svg"
            title="Self Care"
            time="2hrs"
            history="2hrs"
          />
        </div>
      </div>
    </div>
  );
}
