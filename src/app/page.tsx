  export default function Home () {
  return (
    <div className="bg-[#252B42] w-[fit] h-[1132px] top-[-590px] left-[-720px] items-center flex flex-col">
      <nav className="w-full h-[91px] flex items-center ml-[59px]">
        <div className="container w-full max-w-[1322px] flex justify-between items-center px-4 ml-8">
          {/* Brand Name */}
        <div className="w-auto flex items-center">
          <h3 className="font-Montserrat font-bold text-[24px] text-[#ffffff] ml-64">BrandName</h3>
        </div>

          {/* Nav Links Centered */}
        <div className="flex gap-4 mr-[350px]">
          <span className="text-[#ffffff] font-Montserrat text-[14px] p-2">Home</span>
          <span className="text-[#ffffff] font-Montserrat text-[14px] p-2">Product</span>
          <span className="text-[#ffffff] font-Montserrat text-[14px] p-2">Pricing</span>
          <span className="text-[#ffffff] font-Montserrat text-[14px] p-2">Contact</span>
        </div>

          {/* Login & Join Us Buttons Aligned with Third Box */}
        <div className="flex items-center space-x-8">
          <span className="font-Montserrat text-[14px] text-[#ffffff] hover:text-[#cccccc]">Login</span>
          <button className="bg-[#23A6F0] text-[#ffffff] text-[14px] rounded-l-md px-6 py-2 hover:bg-blue-400">JOIN US</button>
        </div>
      </div>
    </nav>


      <div className="flex flex-col gap-[40px] mt-[104px]">
        <div className="text-center">
          <h5 className="font-Montserrat text-[16px] text-[#23A6F0] pb-8">Welcome</h5>
          <h1 className="font-Montserrat text-[#FFFFFF] text-center text-[58px] font-bold">
            Selling on the <br/> internet like a pro
          </h1>
          <h4 className="font-Montserrat text-center text-[#FFFFFF] text-[20px]">We know how large objects will act, but things on a 
            <br/>small scale just do not act that way.
          </h4>
          <div className="flex space-x-4 justify-center items-center mt-[80px] mb-[80px]">
            <button className="bg-[#23A6F0] text-[#ffffff] text-[14px] rounded px-6 py-2 hover:bg-blue-400">
            Get Quote Now</button>
            <button className="text-[#23A6F0] bg-[#252B42] text-[14px] rounded border-2 border-[#23A6f0] px-6 py-2 ">
            Learn More</button>
          </div>
        </div>

        <div className="flex flex-row gap-4">
         {/* Card Portion 1 */}
          <div className="flex flex-col w-[328px] h-[292px] bg-[#FFFFFF] shadow-xl p-6 ml-4">
            <div className="w-[70px] h-[76px] bg-[#FFDCD1] rounded mb-4"></div>
              <h5 className="font-Montserrat font-bold text-[#252B42] text-16 mb-4">Training Courses</h5>
              <div className="h-[2px] w-[50px] bg-[#E74040] mb-4"></div>
              <p className="font-Montserrat text-14 text-[#737373] text-justify">
              The gradual accumulation of <br /> information about atomic and <br /> small-scale behaviour...</p>
            </div>

         {/* Card Portion 2 */}
          <div className="flex flex-col w-[328px] h-[292px] bg-[#FFFFFF] shadow-xl p-6 ml-4">
            <div className="w-[70px] h-[76px] bg-[#B9EAAB] rounded mb-4"></div>
            <h5 className="font-Montserrat font-bold text-[#252B42] text-16 mb-4">2,769 Online Courses</h5>
            <div className="h-[2px] w-[50px] bg-[#E74040] mb-4"></div>
            <p className="font-Montserrat text-14 text-[#737373] text-justify">
            The gradual accumulation of <br /> information about atomic and <br /> small-scale behaviour...</p>
          </div>

         {/* Card Portion 3 */}
          <div className="flex flex-col w-[328px] h-[292px] bg-[#23A6F0] shadow-xl p-6 ml-4">
            <div className="w-[70px] h-[76px] bg-[#FFFFFF] rounded mb-4"></div>
              <h5 className="font-Montserrat font-bold text-[#FFFFFF] text-16 mb-4">Training Courses</h5>
              <div className="h-[2px] w-[50px] bg-[#FFFFFF] mb-4"></div>
              <p className="font-Montserrat text-14 text-[#FFFFFF] text-justify">
              The gradual accumulation of <br /> information about atomic and <br /> small-scale behaviour...</p>
          </div>
        </div>

    </div>
  </div>
  )
}