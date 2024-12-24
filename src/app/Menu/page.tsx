import React from "react";
import Image from "next/image";

export default function Menu() {
  return (
    <div>
      {/* "Our Menu Page */}
      <h1 className="w-[225px] h-[56px] absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-[48px] leading-[56px] font-bold text-[#FFFFFF] whitespace-nowrap">
        Our Menu
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
            Menu
          </li>
        </ul>
      </h1>

      {/* "Start Menu */}
      <div className="w-[1320px] max-auto h-[628px] mt-[531px] lg:ml-[300px] flex flex-col lg:flex-row ">
        <div className="flex justify-center mr-8">
          <Image
            src="/images/Rectangle.png"
            alt="Rectangle"
            width={448}
            height={626}
          />
        </div>

        <div className="mt-8 lg:mt-0">
          {/* Heading */}
          <h1 className="w-[294px] h-[56px] font-bold text-[36px] md:text-[40px] lg:text-[48px] leading-[56px] text-[#333333] m-8 lg:ml-36 whitespace-nowrap">
            Starter Menu
          </h1>

          {/* Menu Items */}
          <div className="w-[760px] h-[111px] lg:ml-36 mb-12">
            <div className="flex justify-between items-center">
              <p className="w-[341px] h-[32px] text-[20px] md:text-[24px] font-bold leading-[32px] text-[#333333]">
                Alder Grilled Chinook Salmon
              </p>
              <p className="text-[20px] md:text-[24px] font-bold leading-[32px] text-[#FF9F0D]">
                32$
              </p>
            </div>

            <p className="w-[368px] h-[24px] text-[14px] md:text-[16px] mt-2 leading-[24px] font-bold text-[#4F4F4F] whitespace-nowrap">
              Toasted French bread topped with romano, cheddar
            </p>

            <p className="w-[63px] h-[24px] text-[14px] md:text-[16px] mt-2 leading-[24px] font-bold text-[#828282]">
              560 CAL
            </p>

            {/* Menu Items 2 */}
            <div>
              <div className="flex justify-between items-center mt-6">
                <p className="w-[256px] h-[32px] text-[20px] md:text-[24px] font-bold leading-[32px] text-[#FF9F0D] ">
                  Berries and creme tart
                </p>
                <p className="W-[41px] h-[32px] text-[20px] md:text-[24px] font-bold leading-[32px] text-[#FF9F0D] ">
                  43$
                </p>
              </div>

              <p className="w-[287px] h-[24px] text-[14px] md:text-[16px] mt-2 leading-[24px] font-bold text-[#4F4F4F] whitespace-nowrap">
                Gorgonzola, ricotta, mozzarella, taleggio
              </p>

              <p className="w-[63px] h-[24px] text-[14px] md:text-[16px] mt-2 leading-[24px] font-bold text-[#828282] whitespace-nowrap">
                7000 CAL
              </p>
            </div>

            {/* Menu Items 3*/}
            <div>
              <div className="flex justify-between items-center mt-6">
                <p className="w-[379px] h-[32px] text-[20px] md:text-[24px] font-bold leading-[32px] text-[#333333] ">
                  Tormentoso Bush Pizza Pintoage
                </p>
                <p className="W-[41px] h-[32px] text-[20px] md:text-[24px] font-bold leading-[32px] text-[#FF9F0D] ">
                  14$
                </p>
              </div>

              <p className="w-[315px] h-[24px] text-[14px] md:text-[16px] mt-2 leading-[24px] font-bold text-[#4F4F4F] whitespace-nowrap">
                Ground cumin, avocados, peeled and cubed
              </p>

              <p className="w-[72px] h-[24px] text-[14px] md:text-[16px] mt-2 leading-[24px] font-bold text-[#828282] whitespace-nowrap">
                1000 CAL
              </p>
            </div>

            {/* Menu Items 4*/}
            <div>
              <div className="flex justify-between items-center mt-6">
                <p className="w-[294px] h-[32px] text-[20px] md:text-[24px] font-bold leading-[32px] text-[#333333] ">
                  Spicy Vegan Potato Curry
                </p>
                <p className="W-[41px] h-[32px] text-[20px] md:text-[24px] font-bold leading-[32px] text-[#FF9F0D] ">
                  35$
                </p>
              </div>

              <p className="w-[353px] h-[24px] text-[14px] md:text-[16px] mt-2 leading-[24px] font-bold text-[#4F4F4F] whitespace-nowrap">
                Spreadable cream cheese, crumbled blue cheese
              </p>

              <p className="w-[63px] h-[24px] text-[14px] md:text-[16px] mt-2 leading-[24px] font-bold text-[#828282] whitespace-nowrap">
                560 CAL
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-[52px] max-auto lg:ml-[300px] flex ">
        <Image
          src="/images/maincourse.png"
          alt="maincourse"
          width={1320}
          height={628}
          className="w-full max-w-[1320px]"
        />
      </div>

      {/* Client & Customers */}
      <div className="w-full">
        <Image
          src="/images/Client&customers.png"
          alt="Client&customers"
          layout="responsive"
          width={1920}
          height={410}
          className="mt-20"
        />
      </div>

      {/* DESERT */}
      <div className="mt-[52px] max-auto lg:ml-[300px] flex ">
        <Image
          src="/images/desert2.png"
          alt="desert2"
          width={1320}
          height={620}
          className="w-full max-w-[1320px] mt-5"
        />
      </div>

      {/* DRINKS */}
      <div className="mt-[52px] max-auto lg:ml-[300px] flex ">
        <Image
          src="/images/drinks.png"
          alt="drinks"
          width={1320}
          height={620}
          className="w-full max-w-[1320px] mt-5"
        />
      </div>

      {/* Clients & Partner */}
      <div className="mt-[52px] max-auto lg:ml-[300px] flex ">
        <Image
          src="/images/ClientsAndPartner.png"
          alt="ClientsAndPartner"
          width={1322}
          height={275}
          className="w-full max-w-[1320px] mt-8"
        />
      </div>
    </div>
  );
}
