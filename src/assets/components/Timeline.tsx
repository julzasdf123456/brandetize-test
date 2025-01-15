import { useState } from "react";

interface TimelineEvent {
  number: number;
  title: string;
  description: string;
}

function Timeline() {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    {
      label: "Day 1",
      title: "Your REVEAL Day! (aka The Silver Bullet)",
      content: (
        <p>
          Identify your personal 10% blindspot (everyone has one) that sends
          quality men running for the hills and clear limiting beliefs that keep
          you stuck in the scarcity mindset (so you can attract a quality man
          who’s words and actions actually match).
          <br />
          <br /> By the end of the day, you’ll know EXACTLY why you’re single
          and what next steps are required to get you closer to magnetizing
          high-caliber men and creating the life you love.
        </p>
      ),
    },
    {
      label: "Day 2",
      title: "Lorem ipsum dolor sit amet",
      content: (
        <p>
          Vivamus viverra diam justo, non malesuada enim convallis dignissim.
          Mauris et cursus orci. Suspendisse potenti. Nunc aliquet magna sed
          justo egestas dignissim. Nunc auctor egestas tellus, in pellentesque
          tellus malesuada at. In tempor commodo egestas. Integer feugiat urna
          in nisl elementum consequat. Duis a tellus lorem.
        </p>
      ),
    },
    {
      label: "Day 3",
      title: "Neque porro quisquam est qui dolorem",
      content: (
        <p>
          Quisque auctor mi quis elementum fringilla. Aliquam non tincidunt
          neque. Sed sed facilisis arcu. Curabitur rhoncus nisl vitae ligula
          bibendum auctor et scelerisque diam. Nam efficitur odio ac blandit
          placerat. Quisque tempus dictum turpis, nec varius lectus pretium
          sollicitudin. Proin auctor odio vel magna interdum, nec aliquam ligula
          dignissim.
        </p>
      ),
    },
  ];

  const timelineEvents: TimelineEvent[] = [
    {
      number: 1,
      title: "Understand Why",
      description:
        "Even though you’ve read all the self-help books and followed all the rules — you’re still single and how to make our secret technology work for you so that you attract the hot, high-quality man your heart desires.",
    },
    {
      number: 2,
      title: "Learn 4 Characteristics that Attract Men",
      description:
        "Not just any men, but men who are open, vulnerable, and committed, so that no man will ever disappear on you again.",
    },
    {
      number: 3,
      title: "Reprogram Your Dating GPS",
      description:
        "Understand why now matter HOW you meet a man it won’t ever work until you reprogram your dating GPS so that you become “the destination” for the men you want.",
    },
    {
      number: 4,
      title: "Learn what “feminine” means now",
      description:
        "Especially as a successful woman so that you don’t have to jump into the girly-girl bucket to attract a high quality man.",
    },
    {
      number: 5,
      title: "Remove Limiting Beliefs",
      description:
        "Eliminate the “nothing works for me” belief in your head so that the universe knows you are loveable and sends you the right man to love.",
    },
  ];

  return (
    <>
      <div className="h-full flex lg:flex-row md:flex-row flex-col lg:px-[150px] md:px-[90px] px-[2%] pt-[70px] gap-x-[28px]">
        <div className="lg:w-5/12 md:w-5/12 lg:px-[5%] md:px-[5%] px-[25%] lg:pb-[0px] md:pb-[0px] pb-[50px]">
          <h1
            className="lg:text-left md:text-left text-center font-playfair font-bold lg:text-[65px] md:text-[55px] text-[30px] text-[#2c2820]"
            style={{ lineHeight: 1.33 }}
          >
            What’s on the agenda
          </h1>
        </div>

        <div className="lg:w-7/12 md:w-7/12 lg:px-[0px] md:px-[0px] px-[2%]">
          {/* tabs */}
          <div>
            {/* Tab Headers */}
            <div className="flex lg:flex-nowrap md:flex-nowrap flex-wrap bg-[#aa9f89] border-b border-gray-300 p-[13px] rounded-[42px]">
              {tabs.map((tab, index) => (
                <button
                  key={index}
                  className={`lg:flex-1 md:flex-1 flex-none w-full text-center py-2 px-4 font-playfair text-[30px] font-bold transition-all ease-in-out ${
                    activeTab === index
                      ? "text-[#2c2820] bg-[#fdf3e3] rounded-[36px]"
                      : "text-[#4d4433]"
                  }`}
                  onClick={() => setActiveTab(index)}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Tab Content */}
            <div className="p-4">
              <h1 className="text-left font-playfair font-bold text-[28px] text-[#2c2820] title-line-height lg:pt-[70px] md:pt-[60px] pt-[40px] pb-[20px]">
                {tabs[activeTab]?.title}
              </h1>
              <p className="font-oxygen text-[16px] text-[#7e7666] py-[20px]">
                {tabs[activeTab]?.content}
              </p>
            </div>
          </div>

          {/* TIME LINES */}
          <div className="lg:p-[30px] md:p-[30px] p-[20px]">
            <div className="flex flex-col items-center">
              <div className="relative w-full max-w-4xl">
                {timelineEvents.map((event, index) => (
                  <div key={event.number} className="flex items-start relative">
                    {/* Timeline Indicator */}
                    <div className="flex flex-col items-center">
                      <div className="bg-[#e99077] font-oxygen text-white flex items-center justify-center rounded-full w-10 h-10 text-md font-bold z-10">
                        {event.number}
                      </div>
                      {index < timelineEvents.length - 1 && (
                        <div className="w-[6px] bg-[#e99077] bg-opacity-20 h-full absolute top-10 left-[17px]"></div>
                      )}
                    </div>

                    {/* Timeline Content */}
                    <div className="ml-6 px-4 pb-4">
                      <h3 className="text-left font-playfair font-bold lg:text-[26px] md:text-[24px] text-[22px] text-[#2c2820] title-line-height pb-[20px]">
                        {event.title}
                      </h3>
                      <p className="font-oxygen text-[16px] text-[#7e7666] py-[16px]">
                        {event.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Timeline;
