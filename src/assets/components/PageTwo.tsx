import a1 from "../imgs/achieve-1/shape-cluster-1.webp";
import a2 from "../imgs/achieve-2/shape-cluster-2.webp";
import a3 from "../imgs/achieve-3/shape-cluster-3.webp";

function PageTwo() {
  return (
    <>
      <div className="h-full lg:min-h-screen flex flex-col lg:px-[150px] md:px-[70px] px-[7%] pt-[90px] pb-[40px]">
        <div className="flex-none">
          <h1 className="font-playfair text-center font-bold lg:text-[44px] md:text-[36px] text-[30px] text-[#4b4334]">
            What you'll achieve:
          </h1>
        </div>

        <div className="flex-1 flex lg:flex-row md:flex-row flex-col lg:px-[40px] md:px-[40px] px-[30px] gap-[80px] lg:pt-[0px] md:pt-[0px] pt-[50px]">
          <div className="flex-1 flex flex-col items-center justify-center">
            <img
              src={a1}
              alt=""
              className="lg:px-[58px] md:px-[20px] px-[0px] lg:pt-[0px] md:pt-[0px] pt-[25px] lg:pb-[18px] md:pb-[18px] pb-[30px]"
            />
            <p className="font-oxygen text-center text-[#7e7666] lg:text-[22px] md:text-[22px] text-[21px]">
              Why you don’t need to settle for unhappiness in this ONE area of
              your life
            </p>
          </div>
          <div className="flex-1 lg:pt-[160px] md:pt-[120px] pt-[0px] flex flex-col items-center justify-center">
            <img
              src={a2}
              alt=""
              className="lg:px-[58px] md:px-[20px] px-[0px] lg:pt-[0px] md:pt-[0px] pt-[25px] lg:pb-[18px] md:pb-[18px] pb-[30px]"
            />
            <p className="font-oxygen text-center text-[#7e7666] lg:text-[22px] md:text-[22px] text-[21px]">
              Why you CAN have it all (and how to stop attracting the wrong guys
              who are intimidated by your success)
            </p>
          </div>
          <div className="flex-1 flex flex-col items-center justify-center">
            <img
              src={a3}
              alt=""
              className="lg:px-[58px] md:px-[20px] px-[0px] lg:pt-[0px] md:pt-[0px] pt-[25px] lg:pb-[18px] md:pb-[18px] pb-[30px]"
            />
            <p className="font-oxygen text-center text-[#7e7666] lg:text-[22px] md:text-[22px] text-[21px]">
              How to break down the walls that keep your authentic self hidden
              from your forever partner
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default PageTwo;
