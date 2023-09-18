import React, { useState } from "react";
import AddProfile from "./AddProfile";
import TopProducts from "./TopProducts";
import BarChart from "./BarChart";
import Cards from "./Cards";
import { useNavigate } from "react-router-dom";
import { database } from "../../FirebaseConfig";
import { signOut } from "firebase/auth";

export default function RightSection() {
  const [profileOptionsOpen, setProfileOptionsOpen] = useState(false);
  const history = useNavigate();
  const handleLogout = () => {
    signOut(database).then((val) => {
      history("/");
    });
  };
  return (
    <div className="lg:pl-[67px] pt-[71px] pb-[69px] max-xs:flex max-xs:flex-col max-xs:items-center z-50">
      <div className="flex lg:flex-row max-xs:flex-col max-xs:items-center">
        <div className="text-black font-montserrat text-[24px] font-bold">
          Dashboard
        </div>
        <div className="flex lg:mt-0 max-xs:mt-10 ">
          <div className="xl:ml-[575px] lg:ml-[475px] w-[197.596px] lg:h-[32.933px] max-xs:h-[35px] flex-shrink-0 rounded-[10px] bg-white overflow-hidden">
            <input
              type="text"
              placeholder="Search..."
              className="text-lightgray font-lato lg:text-[14px] max-xs:text-[15px] font-normal placeholder-lightgray pt-[6px] pl-[15px] pb-[9.93px] outline-none lg:w-[52px] max-xs:w-[130px] h-[17px]"
            />
            <img
              src="./images/Searchicon.svg"
              className="w-[12px] h-[12px] flex-shrink-0 pt-[9px] lg:pl-[86px] max-xs:pl-[20px]"
              alt=""
            />
          </div>
          <div className="mt-[6.56px] ml-[13.79px]">
            <img
              className="w-[18px] h-[20.888px] flex-shrink-0"
              src="./images/bell.svg"
              alt=""
            />
          </div>
          <div
            className="w-[30px] h-[30px] rounded-full overflow-hidden ml-[27.61px]"
            onClick={() => setProfileOptionsOpen(!profileOptionsOpen)}
          >
            <img className="w-[30px] h-[30px]" src="./images/pp.png" alt="" />
          </div>

          {profileOptionsOpen ? (
            <div className="absolute xl:text-sm lg:right-14 max-xs:right-20 lg:top-28 max-xs:top-40">
              <div className="xl:font-montserrat xl:bg-bg2">
                <div className="xl:flex ring-2 xl:ring-bg3 xl:py-2 xl:px-6">
                  Profile
                  <div className="xl:w-[20px] xl:h-[20px] xl:rounded-full xl:overflow-hidden xl:ml-4 xl:relative">
                    <img
                      className="w-[20px]  h-[20px]"
                      src="./images/pp.png"
                      alt=""
                    />
                  </div>
                </div>
                <div
                  className="xl:flex xl:items-center xl:justify-between xl:ring-2 xl:ring-bg3 xl:py-2 xl:px-6"
                  onClick={handleLogout}
                >
                  Logout
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75"
                    />
                  </svg>
                </div>
              </div>
            </div>
          ) : (
            <></>
          )}
        </div>
      </div>

      <Cards />

      <BarChart />

      <div className="lg:mt-[38.67px] flex lg:flex-row max-xs:flex-col max-xs:items-center">
        <TopProducts />

        <AddProfile />
      </div>
    </div>
  );
}
