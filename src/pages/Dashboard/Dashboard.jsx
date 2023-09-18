import React, { useState } from "react";
import LeftSideBar from "./LeftSideBar";
import RightSection from "./RightSection";

export default function Dashboard() {
  const [showLeftBar, setShowLeftBar] = useState(false);
  console.log(showLeftBar);
  return (
    <div className="xl:w-screen w-screen xl:h-[1024px] h-auto flex bg-bg1">
      <div className="">
        <LeftSideBar />
      </div>
      <div className={`${showLeftBar ? '' : 'z-0'} bg-bg1 w-screen`}>
        <RightSection />
      </div>
      <div className="absolute top-[70px] right-16 lg:hidden" onClick={()=>setShowLeftBar(!showLeftBar)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="w-8 h-8"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </div>
    </div>
  );
}
