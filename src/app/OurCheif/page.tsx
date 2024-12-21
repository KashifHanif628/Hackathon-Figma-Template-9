import React from "react";
import Image from "next/image";

export default function OurCheif() {
  return (
    <div className="">
      {/* "Our Cheif Page */}
      <h1 className="w-[302px] h-[56px] absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-[48px] leading-[56px] font-bold text-white whitespace-nowrap">
        Our Cheif
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
            Cheif
          </li>
        </ul>
      </h1>

      {/* Grid Layout */}
      <div className="grid grid-cols-4 gap-x-6 gap-y-6 mx-auto mt-[500px] max-w-screen-lg">
        {[
          { name: "Tahmina Rumi", img: "picture1.png" },
          { name: "Jorina Begum", img: "picture2.png" },
          { name: "M.Mohammad", img: "picture3.png" },
          { name: "Munna Kathy", img: "picture4.png" },
          { name: "Tahmina Rumi", img: "picture5.png" },
          { name: "Bisnu Devgon", img: "picture6.png" },
          { name: "Motin Molladsf", img: "picture7.png" },
          { name: "William Rumi", img: "picture8.png" },
          { name: "Kets William Roy", img: "picture9.png" },
          { name: "Mahmud Kholil", img: "picture10.png" },
          { name: "Ataur Rahman", img: "picture11.png" },
          { name: "Monalisa Holly", img: "picture12.png" },
        ].map((chief, index) => (
          <div key={index} className="text-center">
            <Image
              src={`/images2/${chief.img}`}
              alt={chief.name}
              width={312}
              height={312}
              className="mx-auto"
            />
            <p className="text-[20px] font-bold text-[#333333] mt-2">
              {chief.name}
            </p>
            <p className="text-[18px] text-[#333333]">Chef</p>
          </div>
        ))}
      </div>
    </div>
  );
}
