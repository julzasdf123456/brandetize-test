import pdfImg from "../imgs/pdf-image.webp";
import ct from "../imgs/circletext/circle-text-image.webp";

function MainLanding() {
  return (
    <>
      <div className="flex lg:flex-row md:flex-row flex-col lg:min-h-screen">
        <div className="flex-1 flex flex-col lg:pt-[41px] lg:pl-[145px] md:px-[70px] md:pt-[30px] hidden sm:block">
          <h1 className="font-playfair font-bold lg:text-[50px] md:text-[40px] text-[20px] text-[#4b4334]">
            Logo
          </h1>

          <div className="h-full flex flex-col justify-center inline-block">
            <h1 className="text-left font-playfair font-bold lg:text-[63px] md:text-[36px] text-[#4b4334] title-line-height">
              How to attract your dream partner
            </h1>
            <p className="font-oxygen text-[#7e7666] title-sub-design mt-[30px] text-[22px]">
              Overcome the beliefs that block your ability to connect with high
              quality men and learn the real reason why smart, successful women
              are still single after 30.
            </p>
            <div className="block pt-[48px]">
              <a
                className="bg-[#cb6f56] lg:px-[43px] md:px-[36px] py-[15px] font-oxygen lg:text-[20px] md:text-[16px] font-bold text-white rounded-[30px] transition-all duration-600 ease-in-out hover:drop-shadow-lg"
                href="#"
              >
                Download Your Guide Now
              </a>
            </div>
          </div>
        </div>

        <div className="flex-none lg:flex-1 md:flex-1 w-full lg:pr-[145px] md:pr-[5%px] px-[5%]">
          <div className="w-full h-full relative bg-[#cb6f56] lg:bg-opacity-[.13] md:bg-opacity-[.13] bg-opacity-[.1] lg:rounded-b-[337px] md:rounded-b-[337px] rounded-b-[350px]">
            <h1 className="font-playfair font-bold text-center text-[32px] pt-[20px] text-[#4b4334] block sm:hidden">
              Logo
            </h1>

            <img
              src={ct}
              alt=""
              className="absolute top-[62px] right-[0px] lg:h-[180px] md:h-[90px] animate-spin hidden sm:block"
            />
            <img
              src={pdfImg}
              alt=""
              className="lg:pt-[130px] md:pt-[80px] pt-[20px] lg:pr-[50px] lg:pl-[20px] px-[8%]"
            />
            {/* <img
              src={pdfImg}
              alt=""
              className="lg:pt-[130px] md:pt-[80px] pt-[20px] lg:pr-[50px] lg:pl-[20px] px-[8%] block sm:hidden"
            /> */}
          </div>
        </div>

        {/* show on mobile */}
        <div className="flex-none flex block sm:hidden w-full px-[7%] pt-[30px]">
          <div className="h-full flex flex-col justify-center inline-block">
            <h1 className="text-left font-playfair font-bold text-[34px] text-[#4b4334] title-line-height">
              How to attract your dream partner
            </h1>
            <p className="font-oxygen text-[#7e7666] title-sub-design mt-[26px] text-xl">
              Overcome the beliefs that block your ability to connect with high
              quality men and learn the real reason why smart, successful women
              are still single after 30.
            </p>
            <a
              className="bg-[#cb6f56] mt-5 px-[43px] py-[15px] font-oxygen text-[20px] text-center font-bold text-white rounded-[30px] transition-all duration-600 ease-in-out hover:drop-shadow-lg"
              href="#"
            >
              Download Your Guide
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default MainLanding;
