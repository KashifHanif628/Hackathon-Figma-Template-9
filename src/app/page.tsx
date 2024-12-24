import Image from "next/image";

export default function Home() {
  return (
    <div className="relative w-full h-[980px] bg-white mt-[410PX]">
      {/* Left Section */}
      <div className="absolute top-[25%] left-[10%] text-white max-w-[500px]">
        <p className="italic text-gray-900 mb-2 font-bold">
          It&apos;s Quick & Amazing!
        </p>
        <h1 className="text-[50px] leading-[58px] font-bold text-[#FF9F0D]">
          Welcome <br />
          <span className="text-black"> to food Quality </span>
          <br />
          <span className="text-black">Restaurant</span>
        </h1>
        <p className="mt-4 text-gray-800">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius sed
          pharetra etiam neque massa congue.
        </p>
        <button className="mt-6 px-6 py-2 bg-[#FF9F0D] text-black font-bold rounded-md">
          Join Us.
        </button>

        <div className="mt-8 text-gray-800 ">
          <p>
            More pages are in progress of our Restaurant website.
            <br />
            Till then you can check-out our below listed pages through Navbar.
            {/* <ul>
              <li className="mt-2 font-bold">Menu</li>
              <li className="mt-2 font-bold">Our Cheif</li>
              <li className="mt-2 font-bold">Sing Up</li>
              <li className="mt-2 font-bold">Sign In 404 Error</li>
              <li className="mt-2 font-bold">FAQ (go down in footer on click of Useful LInks)</li>
              <li className="mt-2 font-bold">404 Error Page Not Fount</li>
              </ul> */}
          </p>

          <ul>
            {[
              "Menu",
              "Our Chief",
              "Sign Up",
              "Sign In 404 Error",
              "FAQ",
              "404 Error Page",
            ].map((item, index) => (
              <li key={index} className="mt-2 font-bold">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Right Section (Image) */}
      <div className="absolute top-[15%] right-[5%]">
        <Image
          src="/images/Image.png"
          alt="Delicious Food"
          width={877.8}
          height={670}
        />
      </div>
    </div>
  );
}
