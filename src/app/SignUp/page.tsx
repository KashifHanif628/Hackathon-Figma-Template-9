import React from "react";
import Image from "next/image";

export default function SignUp() {
  return (
    <div className="">
      {/* "Sign Up Page */}
      <h1 className="w-[302px] h-[56px] absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-[48px] leading-[56px] font-bold text-white whitespace-nowrap">
        Sign Up Page
        <br />
        <ul className="flex items-center w-[56px] h-[28px] text-[20px] leading-[28px] text-[#FFFFFF] font-normal mt-6 ml-10">
          Home
          <li className="flex items-center gap-2 text-[#FF9F0D] font-normal w-[69px] h-[28px] ">
            <Image
              src="/images/Vector.png"
              alt="Vector"
              width={5}
              height={10}
              className="ml-2 mt-1"
            />
            sign up
          </li>
        </ul>
      </h1>

      <div className="w-[424px] h-[624px] mt-[530px] ml-[743px] flex flex-col  ">
        <div className="flex ml-[60px]">
          <h1 className="w-[76px] h-[28px] text-[20px] leading-[28px] text-[#333333] font-bold  ">
            Sign Up
          </h1>
        </div>

        {/* User Picture */}
        <div className="mt-[32px] ml-[52px] flex items-center w-[360px] h-[44px] border border-gray-300 rounded-md">
          <Image
            src="/images/User2.png"
            alt="User2"
            width={24} height={24}
            className="rounded-full ml-2 border-1.5 border-[#4F4F4F]"
          />
          {/* Input Field */}
          <input
            type="text"
            placeholder="Name"
            className="flex-1 h-full text-[16px] leading-[24px] text-[#4F4F4F] pl-2 border-none focus:outline-none"
          />
        </div>

        {/* envelop/email */}
        <div className="mt-[32px] ml-[52px] flex items-center w-[360px] h-[44px] border border-gray-300 rounded-md">
          <Image
            src="/images/email.png"
            alt="email"
            width={24} height={24}
            className="rounded-full ml-2 border-1.5 border-[#4F4F4F]"
          />
          {/* Input Field */}
          <input
            type="text"
            placeholder="Email"
            className="flex-1 h-full text-[16px] leading-[24px] text-[#4F4F4F] pl-2 border-none focus:outline-none"
          />
        </div>

        {/* Password */}
        <div className="mt-[32px] ml-[52px] flex items-center w-[360px] h-[44px] border border-gray-300 rounded-md">
          <Image
            src="/images/Lock.png"
            alt="Lock"
            width={24} height={24}
            className="rounded-full ml-2 border-1.5 border-[#4F4F4F]"
          />
          {/* Input Field */}
          <input
            type="text"
            placeholder="Password"
            className="flex-1 h-full text-[16px] leading-[24px] text-[#4F4F4F] pl-2 border-none focus:outline-none"
          />
        </div>

        <div className="flex w-[129px] h-[22px] mt-4 ml-10">
          <Image src="/images/Cheek.png" alt="Cheek" width={20} height={20} />
          <p className="w-[101px] h-[22px] text-[14px] leading-[22px] text-[#333333] ml-2">
            Remember me?
          </p>
        </div>

        <div>
          <button className="w-[360px] h-[44px] bg-[#FF9F0D] mt-8 ml-10 text-[16px] leading-[24px] text-[#FFFFFF]">
            Sign Up
          </button>
          <p className="w-[113px] h-[22px] text-[14px] leading-[22px] text-[#828282] ml-72 mt-2">
            Forget password?
          </p>
        </div>

        <div className="w-[360px] h-[152px] mt-8">
          <div className="w-[360px] h-[32px] ">
            <p className="w-[22px] h-[22px] text-[14px] leading-[22px] text-[#4F4F4F] ml-52">
              OR
            </p>
          </div>

          <div className="flex items-center w-[360px] h-[32px] whitespace-nowrap ml-10 mt-4">
            <Image src="/images/Google.png" alt="Google" width={20} height={20} />
            <p className="w-[22px] h-[22px] text-[14px] leading-[22px] text-[#4F4F4F] ml-24 ">
              Sign Up With Google
            </p>
          </div>

          <div className="flex items-center w-[360px] h-[32px] whitespace-nowrap ml-10 mt-4">
            <Image src="/images/Apple.png" alt="Apple" width={20} height={20} />
            <p className="w-[22px] h-[22px] text-[14px] leading-[22px] text-[#4F4F4F] ml-24 ">
              Sign Up With Apple
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
