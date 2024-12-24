import React from "react";
import Image from "next/image";
import Link from "next/link"


export default function Header () {
  return (
    <div className="flex flex-col bg-[#0D0D0D] items-center w-[full] h-[90px] ">
      {/* Header Section */}
      <header className="w-[1320px] h-[32px] mt-[29px] flex ">
        <ul className="hidden sm:flex gap-6 md:gap-8 lg:gap-12 items-center w-[508px] h-[24px]">
          <Image
            src="/images/Foodtuck.png"
            alt="Foodtuck"
            width={109}
            height={32}
            className="mr-52"
          />

          <Link href="/" className="w-[46px] h-[24px] text-[16px] leading-[24px] text-[#ff9f0d]">Home</Link>
        
          <Link href="/Menu" className="w-[43px] h-[24px] text-[16px] leading-[24px] text-[#FFFFFF]">Menu</Link>
        
          <li className="w-[34px] h-[24px] text-[16px] leading-[24px] text-[#FFFFFF]">
            Blog
          </li>
          <li className="w-[47px] h-[24px] text-[16px] leading-[24px] text-[#FFFFFF]">
            Pages
          </li>
          <li className="w-[46px] h-[24px] text-[16px] leading-[24px] text-[#FFFFFF]">
            About
          </li>
          <li className="w-[39px] h-[24px] text-[16px] leading-[24px] text-[#FFFFFF]">
            Shop
          </li>
          <li className="w-[61px] h-[24px] text-[16px] leading-[24px] text-[#FFFFFF]">
            Contact
          </li>

          <div className="flex gap-4 items-center">
            <Image
              src="/images/MagnifyingGlass.png"
              alt="MagnifyingGlass"
              width={24}
              height={24}
              className="ml-60"
            />
            <Image src="/images/User.png" alt="User" width={24} height={24} />
            <Image src="/images/Tote.png" alt="Tote" width={24} height={24} />
          </div>
        </ul>
      </header>

      <div className="relative w-full">
        {/* Unsplash Image */}
        <Image
          src="/images/unsplash.png"
          alt="unsplash"
          layout="responsive"
          width={1920}
          height={410}
          className="mt-5"
        />
      </div>
    </div>
  );
}
