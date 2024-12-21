import { Html } from "next/document";
import Link from "next/link";

export default function Navbar() {
  return (
    <div className="flex flex-col bg-[#0D0D0D] items-center w-[full] h-[90px] ">
      {/* Header Section */}
      <nav className="w-[1320px] h-[32px] mt-[29px] flex place-content-end ">
        <ul className="hidden sm:flex gap-6 md:gap-8 lg:gap-12 w-[508px] h-[18px] text-white">
          <Link
            href="/OurCheif"
            className="w-[43px] h-[24px] text-[16px] leading-[24px] text-[#FFFFFF] whitespace-nowrap"
          >
            Our Cheif
          </Link>

          <Link
            href="/SignUp"
            className="w-[43px] h-[24px] text-[16px] leading-[24px] text-[#FFFFFF]"
          >
            SignUp
          </Link>

          <Link
            href="/SignIn"
            className="w-[43px] h-[24px] text-[16px] leading-[24px] text-[#FFFFFF]"
          >
            SignIn
          </Link>
        </ul>
      </nav>
    </div>
  );
}
