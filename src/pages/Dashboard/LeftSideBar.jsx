import React from "react";

export default function LeftSideBar() {
  return (
    <div className="xl:w-[280px] xl:h-[944px] flex-shrink-0 xl:rounded-[20px] bg-gradient-to-r from-[#4285f4] to-[#3c83f9] xl:ml-[43px] xl:mt-[40px] max-xs:absolute xl:relative max-xs:rounded-none max-xs:ml-0 max-xs:mt-0 max-xs:w-screen">
      <div className="text-white font-montserrat text-[36px] font-bold pt-[60px] pl-[50px]">
        Board.
      </div>
      <div className="flex items-center">
        <img
          className="w-[18px] h-[18px] flex-shrink-0 mt-[62px] ml-[50px]"
          src="./images/dashboard_icon.svg"
          alt=""
        />
        <span className="text-white font-montserrat text-[18px] font-bold mt-[60px] ml-[20px]">
          Dashboard
        </span>
      </div>
      <div className="flex items-center">
        <img
          className="w-[18px] h-[20.777px] flex-shrink-0 mt-[42px] ml-[50px]"
          src="./images/transaction_icon.svg"
          alt=""
        />
        <span className="text-white font-montserrat text-[18px] font-bold mt-[40px] ml-[20px]">
          Transactions
        </span>
      </div>
      <div className="flex items-center">
        <img
          className="w-[18px] h-[18px] flex-shrink-0 mt-[42px] ml-[50px]"
          src="./images/schedule_icon.svg"
          alt=""
        />
        <span className="text-white font-montserrat text-[18px] font-bold mt-[40px] ml-[20px]">
          Schedules
        </span>
      </div>
      <div className="flex items-center">
        <img
          className="w-[18px] h-[18px] flex-shrink-0 mt-[42px] ml-[50px]"
          src="./images/user_icon.svg"
          alt=""
        />
        <span className="text-white font-montserrat text-[18px] font-bold mt-[40px] ml-[20px]">
          Users
        </span>
      </div>
      <div className="flex items-center xl:mb-0 max-xs:mb-10">
        <img
          className="w-[17.041px] h-[18px] flex-shrink-0 mt-[42px] ml-[50px]"
          src="./images/setting_icon.svg"
          alt=""
        />
        <span className="text-white font-montserrat text-[18px] font-bold mt-[40px] ml-[20px]">
          Settings
        </span>
      </div>
      <div className="text-white font-montserrat text-[14px] font-normal xl:mt-[396px] ml-[50px]">
        Help
      </div>
      <div className="text-white font-montserrat text-[14px] font-normal mt-[20px] ml-[50px] xl:mb-0 max-xs:mb-10">
        Contact Us
      </div>
    </div>
  );
}
