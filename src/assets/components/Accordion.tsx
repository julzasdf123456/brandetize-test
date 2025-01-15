import accordionImg from "../imgs/accordion/mask-group-120.webp";
import { useState } from "react";
import plus from "../imgs/plus-circle-line.svg";
import minus from "../imgs/minus-circle-line.svg";

function Accordion() {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  const items = [
    {
      title: "Let go of limiting beliefs",
      content:
        "If you don’t think you deserve a good man, you’re grappling with accepting that a relationship is not in the cards for you, or you think you have to settle for a less than ideal soul mate, we’ll help you identify and learn to let go of what’s holding you back.",
    },
    {
      title: "Break down barriers",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse lacinia id erat vitae molestie. Donec congue odio libero, sollicitudin ullamcorper nunc consequat sed. Phasellus nec accumsan ipsum. Donec vehicula turpis ut lectus tristique pretium.",
    },
    {
      title: "Fall in love with your true self",
      content:
        "Ut nec augue ac nunc egestas pretium. Phasellus a lectus eget dui laoreet dignissim non non lorem. Nulla vel velit fringilla, rutrum velit nec, rhoncus mauris. Aliquam sagittis lorem ac lacinia eleifend. Praesent euismod pellentesque lectus ut fermentum.",
    },
  ];

  return (
    <>
      <div className="h-full flex lg:flex-row md:flex-row flex-col lg:px-[150px] md:px-[70px] pt-[40px] pb-[110px] lg:gap-x-[20px] md:gap-x-[10px]">
        <div className="px-[3%] block sm:hidden">
          <img src={accordionImg} alt="" />
        </div>

        <div className="lg:w-7/12 md:w-7/12 lg:px-[2%] md:px-[0] px-[2%] h-full flex flex-col items-center pt-[36px]">
          {items.map((item, index) => (
            <div key={index} className="border-b-2 border-[#aa9f89]">
              <button
                onClick={() => toggleAccordion(index)}
                className="w-full flex justify-between items-center py-4 px-6 text-left font-playfair lg:text-[28px] md:text-[24px] text-[20px] font-bold text-[#2c2820]"
              >
                {item.title}
                <span
                  className={`transform transition-transform duration-300 ${
                    activeIndex === index ? "rotate-180" : "rotate-0"
                  }`}
                >
                  <img src={activeIndex === index ? minus : plus} alt="" />
                </span>
              </button>
              <div
                className={`overflow-hidden transition-max-height duration-500 ease-in-out ${
                  activeIndex === index ? "max-h-screen" : "max-h-0"
                }`}
              >
                <p
                  className="py-6 px-6 text-[#7e7666] font-oxygen"
                  style={{ lineHeight: 1.5, letterSpacing: "0.2px" }}
                >
                  {item.content}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="w-5/12 px-[2%] hidden sm:block">
          <img src={accordionImg} alt="" />
        </div>
      </div>
    </>
  );
}

export default Accordion;
