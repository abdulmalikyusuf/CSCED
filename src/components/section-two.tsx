import { useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Splitting from "splitting";

import IconBox5 from "@/assets/images/icon-box_05.png";
import IconBox6 from "@/assets/images/icon-box_06.png";
import IconBox7 from "@/assets/images/icon-box_07.png";
import IconBox8 from "@/assets/images/icon-box_08.png";

gsap.registerPlugin(ScrollTrigger);

function SectionTwo() {
  const container = useRef<HTMLDivElement | null>(null);
  const text = useRef<HTMLSpanElement | null>(null);
  const animationDefaults = {
    duration: 1,
    ease: "sine",
  };

  const animateChars = () => {
    if (text.current === null) return;
    gsap
      .timeline({ defaults: animationDefaults })
      .to(".char", {
        stagger: (pos, _, arr) => 0.06 * (arr.length - 1 - pos),
        opacity: 0,
      })
      .to(".char", {
        stagger: (pos) => 0.2 + 0.05 * pos,
        opacity: 1,
      })
      .fromTo(
        text.current,
        {
          "--after-width": "0%",
          willChange: "height",
        },
        {
          duration: 1,
          ease: "power4",
          "--after-width": getComputedStyle(text.current).getPropertyValue(
            "--after-width-final"
          ),
        },
        "<"
      );
  };

  const resetChars = () => {
    gsap.killTweensOf([".char", text.current]);
    gsap.set(text.current, {
      "--after-width": "0%",
    });
  };

  useGSAP(
    () => {
      text.current.dataset.splitting = "";
      Splitting();

      ScrollTrigger.create({
        trigger: text.current,
        start: "top 50%",
        onEnter: () => animateChars(),
        onEnterBack: () => animateChars(),
        // Reset the character's state when scrolling back past the element
        onLeave: () => resetChars(),
        onLeaveBack: () => resetChars(),
      });
    },
    { scope: container.current }
  ); // <-- scope is for selector text (optional)
  return (
    <div
      ref={container}
      className="flex flex-col lg:flex-row gap-14 md:gap-16 text-black px-4 sm:px-8 lg:px-16 py-10 md:py-24 bg-[url(assets/images/clean-gray-paper.png)]"
    >
      <div className="min-w-80">
        <h4 className="text-3xl font-bold text-pretty font-space-grotesk">
          Empowering Lives,{" "}
          <span
            ref={text}
            data-splitting="chars"
            className="inline-flex relative after:absolute after:-left-[2.5%] after:top-[15%] after:-z-[1] [--after-width:_0%] [--after-width-final:105%] after:rounded-[8px] after:w-[var(--after-width)] after:bg-[var(--color-bg-highlight)] [--color-bg-highlight:#dc764c] [--color-highlight-start:#fadabd]"
            // className={
            //   `inline-flex relative w-fit` +
            //   ` [--after-width:_0%] [--after-width-final:105%] [--color-bg-highlight:#dc764c] [--color-highlight-start:#fadabd]` +
            //   ` after:-left-[2.5%] after:top-[15%] after:absolute after:z-[-1] after:rounded-[8px] after:w-[var(--after-width)] after:bg-[var(--color-bg-highlight)]`
            // }
          >
            Creating
          </span>{" "}
          Impact
        </h4>
        <button
          type="button"
          className="mt-8 text-[#232323] uppercase font-medium text-sm rounded-full px-8 py-4 border-2 border-[#01592E]"
        >
          Donate Now
        </button>
      </div>
      <div className="flex-shrink grid grid-cols-1 md:grid-cols-2 gap-y-14 gap-x-8">
        {[IconBox5, IconBox6, IconBox7, IconBox8].map((image, idx) => (
          <div key={idx} className="flex">
            <div className="w-24 flex-shrink-0">
              <img src={image} alt={idx.toString()} className="" />
            </div>
            <div className="">
              <h6 className="text-xl mb-3 font-semibold">
                Community Development Programs
              </h6>
              <p className="opacity-80 text-wrap">
                Engage in our holistic community development initiatives. From
                infrastructure projects to educational programs, we work
                collaboratively to foster sustainable growth and empowerment.
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SectionTwo;
