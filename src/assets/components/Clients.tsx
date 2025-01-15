import oprah from "../imgs/clients/oprah-logo.svg";
import drphil from "../imgs/clients/dr-phil-logo.svg";
import cosmopolitan from "../imgs/clients/cosmopolitan-logo.svg";
import glamour from "../imgs/clients/glamour-logo.svg";
import abc from "../imgs/clients/abc-logo.svg";

function Clients() {
  return (
    <>
      <div className="h-full w-full lg:flex lg:flex-wrap md:flex md:flex-wrap flex-row lg:px-[150px] md:px-[90px] px-[7%] py-[80px] gap-x-[60px] hidden sm:block">
        <div className="flex-1 px-4 flex items-center justify-center">
          <img src={oprah} alt="" />
        </div>

        <div className="flex-1 px-4 flex items-center justify-center">
          <img src={drphil} alt="" />
        </div>

        <div className="flex-1 px-4 flex items-center justify-center">
          <img src={cosmopolitan} alt="" />
        </div>

        <div className="flex-1 px-4 flex items-center justify-center">
          <img src={glamour} alt="" />
        </div>

        <div className="flex-1 px-4 flex items-center justify-center">
          <img src={abc} alt="" />
        </div>
      </div>

      <div className="flex flex-row flex-wrap px-[3%] py-[80px] block sm:hidden">
        <div className="basis-1/4 flex items-center p-5">
          <img className="" src={oprah} alt="" />
        </div>

        <div className="basis-2/4 flex items-center p-5">
          <img className="" src={drphil} alt="" />
        </div>

        <div className="basis-1/4 flex items-center p-5">
          <img className="" src={abc} alt="" />
        </div>

        <div className="basis-2/4 flex items-center p-5">
          <img className="" src={cosmopolitan} alt="" />
        </div>

        <div className="basis-2/4 flex items-center p-5">
          <img className="" src={glamour} alt="" />
        </div>
      </div>
    </>
  );
}

export default Clients;
