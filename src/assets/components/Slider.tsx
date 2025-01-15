import t1 from "../imgs/testimonials/1/testimonial-1-image.webp";
import t2 from "../imgs/testimonials/2/testimonial-2-image.webp";
import { useState } from "react";
import { MdArrowBackIos } from "react-icons/md";
import { MdArrowForwardIos } from "react-icons/md";

function Slider() {
  const slides = [
    {
      id: 1,
      title: `“Once Marni held me accountable, it was easier for me to finally
              recognize when Mr. Right (Mark) came along.”`,
      content: `If I hadn’t followed the guiding hand of Marni, I wouldn’t have
              been ready to accept the moments and opportunities presented to me
              every day.`,
      img: t1,
      name: "Janice",
    },
    {
      id: 2,
      title: `“I am now much more grounded and confident and I feel like I’m
              living the life that I wanted to live now.”`,
      content: `When I first joined the program, the best initial results I got
              were me actually loving who I am. I think I always had an
              appreciation for myself, but I didn’t truly believe that I was
              worthy of great things.`,

      img: t2,
      name: "Jill",
    },
    { id: 3, content: "Slide 3" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  return (
    <>
      {/* SHOW NORMAL VIEW ON LG SCREENS */}
      <div className="h-full lg:flex md:flex flex-row lg:px-[150px] md:px-[90px] py-[70px] bg-[#7e7666] gap-x-[28px] hidden sm:block">
        <div className="w-6/12 flex flex-col">
          <h1
            className="font-playfair text-[40px] font-bold py-[40px]"
            style={{ lineHeight: 1.23 }}
          >
            <span className="text-[#fffaf3]">
              See how women have been impacted by the
            </span>
            <span className="text-[#ddba7c]"> power of love:</span>
          </h1>

          <div className="bg-[#e0d3c2] px-[60px] py-[30px] rounded-br-[150px] flex flex-col drop-shadow-[0_30px_30px_rgba(0,0,0,0.18)]">
            <h1
              className="font-playfair text-[26px] font-bold text-[#4b4334]"
              style={{ lineHeight: 1.33 }}
            >
              “Once Marni held me accountable, it was easier for me to finally
              recognize when Mr. Right (Mark) came along.”
            </h1>
            <p
              className="font-oxygen text-[17px] text-[#7e7666] py-[20px]"
              style={{ lineHeight: 1.53 }}
            >
              If I hadn’t followed the guiding hand of Marni, I wouldn’t have
              been ready to accept the moments and opportunities presented to me
              every day.
            </p>

            <div className="flex flex-row items-center gap-x-[26px]">
              <img src={t1} alt="" className="py-2 h-[70px]" />
              <h1
                className="font-playfair text-[28px] text-[#535353]"
                style={{ fontStyle: "italic" }}
              >
                Janice
              </h1>
            </div>
          </div>
        </div>

        <div className="w-6/12 flex flex-col">
          <div className="bg-[#e0d3c2] pl-[90px] pr-[50px] pt-[50px] pb-[30px] rounded-tl-[150px] flex flex-col drop-shadow-[0_30px_30px_rgba(0,0,0,0.18)]">
            <h1
              className="font-playfair text-[26px] font-bold text-[#4b4334]"
              style={{ lineHeight: 1.33 }}
            >
              “I am now much more grounded and confident and I feel like I’m
              living the life that I wanted to live now.”
            </h1>
            <p
              className="font-oxygen text-[17px] text-[#7e7666] py-[20px]"
              style={{ lineHeight: 1.53 }}
            >
              When I first joined the program, the best initial results I got
              were me actually loving who I am. I think I always had an
              appreciation for myself, but I didn’t truly believe that I was
              worthy of great things.
            </p>

            <div className="flex flex-row items-center gap-x-[26px]">
              <img src={t2} alt="" className="py-2 h-[70px]" />
              <h1
                className="font-playfair text-[28px] text-[#535353]"
                style={{ fontStyle: "italic" }}
              >
                Jill
              </h1>
            </div>
          </div>
        </div>
      </div>

      {/* SHOW SLIDER ON SM (MOBILES) */}
      <div className="h-full mt-10 flex flex-col px-[3%] py-[70px] bg-[#7e7666] gap-x-[28px] block sm:hidden">
        <h1
          className="font-playfair text-[26px] font-bold py-[20px] px-[12%]"
          style={{ lineHeight: 1.23 }}
        >
          <span className="text-[#fffaf3]">
            See how women have been impacted by the{" "}
          </span>
          <span className="text-[#ddba7c]"> power of love:</span>
        </h1>

        {/* sliders */}
        <div className="relative w-full max-w-2xl mx-auto">
          {/* Slides Container */}
          <div className="overflow-hidden drop-shadow-[0_30px_30px_rgba(0,0,0,0.18)]">
            <div
              className="flex transition-transform duration-500 gap-4"
              style={{
                transform: `translateX(-${currentIndex * (100 + 4)}%)`,
              }}
            >
              {slides.map((slide) => (
                <div
                  key={slide.id}
                  className={`w-full flex-shrink-0 h-auto bg-[#e0d3c2] ${
                    slide.id % 2
                      ? "rounded-br-[150px] px-[20px] py-[30px]"
                      : "rounded-tl-[150px] pl-[50px] pr-[20px] pt-[50px] pb-[20px]"
                  } flex flex-col`}
                >
                  <h1
                    className="font-playfair text-[24px] font-bold text-[#4b4334]"
                    style={{ lineHeight: 1.33 }}
                  >
                    {slide.title}
                  </h1>
                  <p
                    className="font-oxygen text-[20px] text-[#7e7666] py-[20px]"
                    style={{ lineHeight: 1.53 }}
                  >
                    {slide.content}
                  </p>
                  <div className="flex flex-row items-center gap-x-[26px]">
                    <img src={slide.img} alt="" className="py-2 h-[70px]" />
                    <h1
                      className="font-playfair text-[22px] text-[#535353]"
                      style={{ fontStyle: "italic" }}
                    >
                      {slide.name}
                    </h1>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="flex flex-row justify-center space-x-4 mt-4">
            <div className="basis-1/4">
              <button
                onClick={prevSlide}
                className="text-white px-4 py-2 rounded-lg hover:bg-[#484339]"
              >
                <MdArrowBackIos />
              </button>
            </div>
            <div className="basis-2/4">
              <div className="flex justify-center space-x-5 mt-4">
                {slides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-[10px] h-[10px] rounded-full ${
                      currentIndex === index ? "bg-white" : "bg-[#948b7b]"
                    }`}
                  ></button>
                ))}
              </div>
            </div>
            <div className="basis-1/4">
              <button
                onClick={nextSlide}
                className="text-white float-right px-4 py-2 rounded-lg hover:bg-[#484339]"
              >
                <MdArrowForwardIos />
              </button>
            </div>
          </div>

          {/* Indicators */}
        </div>
      </div>
    </>
  );
}

export default Slider;
