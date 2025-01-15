import "./App.css";
import Accordion from "./assets/components/Accordion";
import Clients from "./assets/components/Clients";
import Founder from "./assets/components/Founder";
import MainLanding from "./assets/components/MainLanding";
import PageTwo from "./assets/components/PageTwo";
import Slider from "./assets/components/Slider";
import Timeline from "./assets/components/Timeline";
// import bg from "./assets/imgs/full-page-gradient.svg";

function App() {
  return (
    <>
      <div className="w-full min:h-screen flex flex-col bg-[url('./assets/imgs/full-page-gradient.svg')] bg-cover bg-center bg-no-repeat">
        <MainLanding />
        <PageTwo />
        <Founder />
        <Clients />
        <Accordion />
        <Slider />
        <Timeline />

        <div className="w-full py-2 flex lg:flex-row md:flex-row flex-col items-center justify-center gap-x-[20px]">
          <p className="font-oxygen text-[16px] text-[#7e7666] lg:py-[20px] md:py-[20px] py-[2px] lg:px-0 md:px-0 px-[12%] text-center">
            Copyright © 2022 Dating with Dignity. All Rights Reserved.
          </p>

          <p className="font-oxygen text-[16px] text-[#7e7666] lg:py-[20px] md:py-[20px] py-[2px] hidden sm:block">
            |
          </p>

          <a
            href="#"
            className="font-oxygen text-[16px] underline text-[#7e7666] lg:py-[20px] md:py-[20px] py-[2px]"
          >
            Terms of Service
          </a>

          <a
            href="#"
            className="font-oxygen text-[16px] underline text-[#7e7666] lg:py-[20px] md:py-[20px] py-[2px]"
          >
            Privacy Policy
          </a>
        </div>
      </div>
    </>
  );
}

export default App;
