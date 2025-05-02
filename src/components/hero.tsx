import { useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Splitting from "splitting";
import { GroupField } from "@prismicio/client";
import {
  HomepageDocumentDataHeroSectionItem,
  Simplify,
} from "#/types.generated";

import BgImage from "@/assets/gallery/IMG-20241116-WA0001.jpg";

gsap.registerPlugin(ScrollTrigger);

function Hero({
  data,
}: {
  data: GroupField<Simplify<HomepageDocumentDataHeroSectionItem>>;
}) {
  const container = useRef<HTMLDivElement | null>(null);
  const title = useRef<HTMLHeadingElement | null>(null);
  const subTitle = useRef<HTMLHeadingElement | null>(null);

  const animationDefaults = {
    duration: 0.5,
    ease: "power3.in",
  };
  const animateChars = () => {
    if (subTitle.current === null) return;
    gsap
      .timeline({ defaults: animationDefaults })
      .set(".char", { willChange: "transform, opacity, color", x: 10 }) // Prepare for animation
      .to(".char", {
        stagger: 0.05,
        scale: 1.45,
        color: getComputedStyle(subTitle.current).getPropertyValue(
          "--color-highlight-end"
        ),
      })
      .to(
        ".char",
        {
          duration: 0.4,
          ease: "sine",
          stagger: 0.05,
          scale: 1,
          color: getComputedStyle(subTitle.current).getPropertyValue(
            "--color-highlight-end-alt"
          ),
        },
        animationDefaults.duration
      );
  };

  const resetChars = () => {
    gsap.killTweensOf(".char");
    // Reset character properties for a potential re-run of the animation
    gsap.set(".char", {
      scale: 1,
      color: "", // Reset color if needed or set to initial color
    });
  };

  useGSAP(
    () => {
      if (container.current === null) return;

      //   subTitle.current.dataset.splitting = "";
      Splitting();

      ScrollTrigger.create({
        trigger: subTitle.current,
        start: "top bottom",
        onEnter: () => animateChars(),
        // onEnterBack: () => animateChars(),
        // Reset the character's state when scrolling back past the element
        onLeave: () => resetChars(),
        // onLeaveBack: () => resetChars(),
      });
    },
    { scope: container }
  );

  return (
    <div ref={container} className="relative h-screen max-h-[900px] flow-root">
      <div className="absolute inset-0 -z-0">
        <img src={BgImage} alt="" className="size-full object-cover" />
      </div>
      <div className="flex flex-col items-center justify-center h-full max-w-4xl mx-auto text-center">
        <h6
          className="text-lg md:text-2xl uppercase mb-2 md:mb-6 lg:mb-12"
          ref={title}
        >
          {data[0].title[0].text}
        </h6>
        <h2
          className="text-4xl md:text-6xl font-bold capitalize tracking-wider font-QuickSand [--color-highlight-end:_#fff] [--color-highlight-end-alt:_var(--primary)]"
          data-splitting="chars"
          ref={subTitle}
        >
          {data[0].subtitle[0].text}
        </h2>
        <button
          type="button"
          className="mt-4 md:mt-6 lg:mt-8 px-8 py-4 bg-black text-white rounded-full text-sm uppercase font-medium"
        >
          learn more
        </button>
      </div>
    </div>
  );
}

export default Hero;
