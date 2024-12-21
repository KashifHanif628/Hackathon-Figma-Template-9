import React from "react";

export default function NotFound() {
  return (
    <div >
    <h1 className="w-[225px] h-[56px] absolute top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-[48px] font-bold text-white whitespace-nowrap">
          404 Error
          <br />
          <ul className="flex items-center w-[56px] h-[28px] text-[20px] leading-[28px] text-[#FFFFFF] font-normal">
            Home
            <li className="flex items-center gap-2 text-[#FF9F0D] font-normal">
              <img
                src="/images/Vector.png"
                alt="Vector"
                width={5}
                height={10}
                className="ml-2 mt-1"
              />
              404
            </li>
          </ul>
        </h1>
        
    <div className="w-[630px] h-[342px] mt-[530px] ml-[645px]  ">
      <div className="flex justify-center">
        <h1 className="w-[161px] h-[104px] text-[96px] leading-[104px] text-[#FF9F0D] font-bold ml-[52px] ">
          404
        </h1>
      </div>

      <div className="mt-[32px] ml-[52px]">
        <p className="w-[630px] h-[40px] text-[32px] leading-[40px] text-[#333333]  flex items-center">
          Oops! Look likes something going wrong
        </p>
      </div>

      <div className="flex items-center justify-center mt-[10px] ml-[56px]">
        <div className="text-center">
          <p className="w-[490px] h-[52px] text-[18px] leading-[26px] text-[#4F4F4F]">
            Page Cannot be found! we’ll have it figured out in no time.
            Meanwhile, check out these fresh ideas:
          </p>

          <div className="py-10">
          <button className="w-[197px] h-[58px] px-6 py-2 rounded-lg hover:bg-gray-900 bg-[#FF9F0D] items-center  ">
            <p className="font-bold text-[#FFFFFF] text-[18px] leading-[26px] text-center ">Go to home</p>
          </button>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}
