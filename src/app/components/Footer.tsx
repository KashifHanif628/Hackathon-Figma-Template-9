import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-[full] h-[774px] bg-[#0D0D0D] mt-24 flex flex-col items-center">
      <div className="w-[1169px] h-[112px] flex items-center justify-center mt-20">
        <h2 className="w-[439px] h-[39.9px] text-[32px] leading-[40px] text-[#FF9F0D] text-center">
          St<span className="text-white ">ill You Need Our Support ?</span>
          <p className="w-[457px] h-[23.94px] text-[16px] leading-[24px] text-[#FFFFFF] mt-2">
            Don’t wait make a smart & logical quote here. Its pretty easy.
          </p>
        </h2>

        <div className="ml-24">
          <input
            type="text"
            placeholder="Enter Your Email"
            className="w-[459px] h-[59.86px] bg-[#FF9F0D] text-white text-[16px] leading-[24px] pl-3"
          />
          <button className="w-[163px] h-[59px] bg-white text-[#FF9F0D] text-[16px] leading-[24px]">
            Subscribe Now
          </button>
        </div>
      </div>
      <div className="bg-[#FF9F0D] h-[1px] w-[1169px] mt-6"></div>

      {/* About Us section */}
      <div className="w-[1320px] h-[331px] mt-14 grid grid-cols-4">
        <div className="w-[395.2px] h-[261.21px] ">
          <h3 className="w-[95.29px] h-[27.92px] text-[20px] leading-[28px] text-[#FFFFFF] font-bold">
            About Us.
          </h3>
          <p className="w-[395.2px] h-[103.69px] text-[18px] leading-[26px] text-[#FFFFFF] mt-8">
            orporate clients and leisure travelers hasbeen relying on Groundlink
            for dependablesafe, and professional chauffeured carservice in major
            cities across World.
          </p>
          <div className="flex">
            <Image
              src="/images/Watch.png"
              alt="Watch"
              width={77.23}
              height={70.79}
              className="pt-4"
            />
            <div className="w-[149.45px] h-[73.78px] text-[#FFFFFF]">
              <p className="w-[138.19px] h-[25.81px] text-[18px] leading-[26px] pt-4 pl-4 whitespace-nowrap">
                Opening Houres
              </p>
              <p className="w-[149.2px] h-[21.84px] text-[14px] leading-[22px] pt-4 pl-4 whitespace-nowrap">
                Mon - Sat (8.00 - 6.00)
              </p>
              <p className="w-[110.15px] h-[21.84px] text-[14px] leading-[22px] pt-4 pl-4 whitespace-nowrap">
                Sunday - Closed
              </p>
            </div>
          </div>
        </div>

        {/* UseFul Links Section */}
        <div className="w-[120.36px] h-[275.17px] ml-52 whitespace-nowrap ">
          <h3 className="w-[95.29px] h-[27.92px] text-[20px] leading-[28px] text-[#FFFFFF] font-bold">
            Useful Links.
          </h3>

          <button className="w-[42.13px] h-[23.93px] text-[16px] leading-[24px] text-[#FFFFFF] mt-8">
            About
          </button>
          <br />
          <button className="w-[41.12px] h-[23.93px] text-[16px] leading-[24px] text-[#FFFFFF] mt-4">
            News
          </button>
          <br />
          <button className="w-[56.17px] h-[23.93px] text-[16px] leading-[24px] text-[#FFFFFF] mt-4">
            Partners
          </button>
          <br />
          <button className="w-[40.12px] h-[23.93px] text-[16px] leading-[24px] text-[#FFFFFF] mt-4">
            Team
          </button>
          <br />
          <button className="w-[41.17px] h-[23.93px] text-[16px] leading-[24px] text-[#FFFFFF] mt-4">
            Menu
          </button>
          <br />
          <button className="w-[56.17px] h-[23.93px] text-[16px] leading-[24px] text-[#FFFFFF] mt-4">
            Contact
          </button>
        </div>

        {/* Help Section */}
        <div className="w-[120.36px] h-[275.17px] ml-52 whitespace-nowrap ">
          <h3 className="w-[95.29px] h-[27.92px] text-[20px] leading-[28px] text-[#FFFFFF] font-bold">
            Help ?
          </h3>

          <button className="w-[33.1px] h-[23.93px] text-[16px] leading-[24px] text-[#FFFFFF] mt-10">
            <Link href="/Faq">FAQ</Link>
          </button>
          <br />
          <button className="w-[123.37px] h-[23.93px] text-[16px] leading-[24px] text-[#FFFFFF] mt-4">
            Term & Condition
          </button>
          <br />
          <button className="w-[70.21px] h-[23.93px] text-[16px] leading-[24px] text-[#FFFFFF] mt-4">
            Reporting
          </button>
          <br />
          <button className="w-[108.33px] h-[23.93px] text-[16px] leading-[24px] text-[#FFFFFF] mt-4">
            Documentation
          </button>
          <br />
          <button className="w-[104.32px] h-[23.93px] text-[16px] leading-[24px] text-[#FFFFFF] mt-4">
            Support Policy
          </button>
          <br />
          <button className="w-[53.16px] h-[23.93px] text-[16px] leading-[24px] text-[#FFFFFF] mt-4">
            Privacy
          </button>
        </div>

        {/* Recent Post Section */}
        <div className="w-[273.83px] h-[331px] text-[#FFFFFF] ml-52">
          <h3 className="w-[95.29px] h-[27.92px] text-[20px] leading-[28px] text-[#FFFFFF] font-bold whitespace-nowrap">
            Recent Post
          </h3>
          {/* post 1 */}
          <div className="w-[273.83px] flex">
            <Image
              src="/images/unsplash1.png"
              alt="unsplash1"
              width={80.24}
              height={79.76}
              className="pt-6"
            />
            <div className="">
              <p className="w-[177.54px] h-[47.86px] text-[16px] leading-[24px] pt-6 pl-4 ">
                Is fastfood good for your body?
              </p>
              <p className="w-[177.54px] h-[21.93px] text-[14px] leading-[22px] pt-8 pl-4 whitespace-nowrap text-gray-600">
                February 28,2022
              </p>
            </div>
          </div>

          {/* post 2 */}
          <div className="w-[273.83px] flex">
            <Image
              src="/images/unsplash2.png"
              alt="unsplash1"
              width={80.24}
              height={79.76}
              className="pt-6"
            />
            <div className="">
              <p className="h-[47.86px] text-[16px] leading-[24px] pt-6 pl-4 ">
                Change your food habit With organic food
              </p>
              <p className="w-[177.54px] h-[21.93px] text-[14px] leading-[22px] pt-8 pl-4 whitespace-nowrap text-gray-600">
                February 28,2022
              </p>
            </div>
          </div>

          {/* post 3 */}
          <div className="w-[273.83px] flex">
            <Image
              src="/images/unsplash3.png"
              alt="unsplash1"
              width={80.24}
              height={79.76}
              className="pt-6"
            />
            <div className="">
              <p className="h-[47.86px] text-[16px] leading-[24px] pt-6 pl-4 ">
                Do you like fastfood for your life?
              </p>
              <p className="w-[177.54px] h-[21.93px] text-[14px] leading-[22px] pt-8 pl-4 whitespace-nowrap text-gray-600">
                February 28,2022
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full h-[99px] bg-[#4F4F4F] mt-20">
        <Image
          src="/images/Group1000002252.png"
          alt="Group1000002252"
          width={1318}
          height={33}
          className="mt-8 ml-80"
        />
      </div>
    </footer>
  );
}
