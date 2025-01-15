import founder from "../imgs/founder/marni-image-cluster.webp";

function Founder() {
  return (
    <>
      <div className="h-full lg:min-h-screen flex lg:flex-row md:flex-row flex-col lg:px-[150px] md:px-[90px] px-[7%] pt-[90px] gap-[30px]">
        <div className="lg:flex-1 md:flex-1 hidden sm:block">
          <img src={founder} alt="" className="lg:px-[50px] md:px-[10px]" />
        </div>

        <div className="flex-1">
          <h1
            className="font-playfair lg:text-[80px] md:text-[60px] text-[40px] font-bold lg:text-left md:text-left text-center"
            style={{ lineHeight: 1.07 }}
          >
            <span className="text-[#4b4334]">Meet our founder, </span>
            <span className="text-[#d88d78]">Marni</span>
          </h1>

          <div className="flex-none block sm:hidden w-full">
            <img src={founder} alt="" className="pt-[56px] px-[2%]" />
          </div>

          <p className="font-oxygen text-[#7e7666] lg:text-[22px] md:text-[18px] text-[20px] lg:pt-[30px] md:pt-[30px] pt-[60px] lg:px-[0px] md:px-[0px] px-[6%]">
            Having been married for 17 years, divorced, and successfully dated
            again in today’s complex social environment, and now happily
            married, Marni understands what it feels like to be lonely and sick
            of wasting time going on dates and having relationships with
            unavailable men that go nowhere. <br />
            <br />
            Through her own journey to find love, Marni discovered that creating
            a process to shorten the journey for other women suffering from the
            inability to create emotionally safe and fulfilling life
            relationships was truly the mission of her soul and purpose.
          </p>
          <div className="block pt-[55px] hidden sm:block">
            <a
              className="bg-[#cb6f56] px-[43px] py-[15px] font-oxygen lg:text-[20px] md:text-[16px] font-bold text-white rounded-[30px] transition-all duration-600 ease-in-out hover:drop-shadow-lg"
              href="#"
            >
              Discover Marni’s Proven Process
            </a>
          </div>

          <a
            className="mt-14 block sm:hidden text-center bg-[#cb6f56] px-[43px] py-[15px] font-oxygen text-[20px] font-bold text-white rounded-[30px] transition-all duration-600 ease-in-out hover:drop-shadow-lg"
            href="#"
          >
            Learn More
          </a>
        </div>
      </div>
    </>
  );
}

export default Founder;
