import { useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Splitting from "splitting";
import { GroupField, TitleField } from "@prismicio/client";
import { PrismicRichText } from "@prismicio/react";

import ConflitResolution from "@/assets/images/Icon-Blue-Conflict-Resolution-And-Mediation.png";
import Education from "@/assets/images/1016545.png";
import FoodSecurity from "@/assets/images/noun-food-security-4965899.png";
import WomensRight from "@/assets/images/Women's Right.png";
import {
  HomepageDocumentDataSectionGridItem,
  Simplify,
} from "#/types.generated";
import DonateNowBtn from "./donate-now-btn";

gsap.registerPlugin(ScrollTrigger);

type Props = {
  title: TitleField;
  data: GroupField<Simplify<HomepageDocumentDataSectionGridItem>>;
};
function SectionTwo({ title, data }: Props) {
  const container = useRef<HTMLDivElement | null>(null);
  const text = useRef<HTMLSpanElement | null>(null);
  const animationDefaults = {
    duration: 1,
    ease: "sine",
  };

  // const animateChars = () => {
  //   if (text.current === null) return;
  //   gsap
  //     .timeline({ defaults: animationDefaults })
  //     .to(".char", {
  //       stagger: (pos, _, arr) => 0.06 * (arr.length - 1 - pos),
  //       opacity: 0,
  //     })
  //     .to(".char", {
  //       stagger: (pos) => 0.2 + 0.05 * pos,
  //       opacity: 1,
  //     })
  //     .fromTo(
  //       text.current,
  //       {
  //         "--after-width": "0%",
  //         willChange: "height",
  //       },
  //       {
  //         duration: 1,
  //         ease: "power4",
  //         "--after-width": getComputedStyle(text.current).getPropertyValue(
  //           "--after-width-final"
  //         ),
  //       },
  //       "<"
  //     );
  // };

  // const resetChars = () => {
  //   gsap.killTweensOf([".char", text.current]);
  //   gsap.set(text.current, {
  //     "--after-width": "0%",
  //   });
  // };

  // useGSAP(
  //   () => {
  //     text.current.dataset.splitting = "";
  //     Splitting();

  //     ScrollTrigger.create({
  //       trigger: text.current,
  //       start: "top 50%",
  //       onEnter: () => animateChars(),
  //       onEnterBack: () => animateChars(),
  //       // Reset the character's state when scrolling back past the element
  //       onLeave: () => resetChars(),
  //       onLeaveBack: () => resetChars(),
  //     });
  //   },
  //   { scope: container.current }
  // ); // <-- scope is for selector text (optional)
  return (
    <div
      ref={container}
      className="flex flex-col lg:flex-row gap-14 md:gap-16 text-black px-4 sm:px-8 lg:px-16 py-10 md:py-24 bg-[url(assets/images/clean-gray-paper.png)]"
    >
      <div className="min-w-80">
        <h4 className="text-3xl md:text-4xl leading-none font-bold text-pretty font-amatic">
          {title[0].text}
          {/* <span
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
          </span>{" "} */}
        </h4>
        <div className="mt-6 md:mt-8">
          <DonateNowBtn />
        </div>
      </div>
      <div className="flex-shrink grid grid-cols-1 md:grid-cols-2 gap-y-14 gap-x-8">
        {[ConflitResolution, Education, FoodSecurity, WomensRight].map(
          (image, idx) => (
            <div key={idx}>
              <div className="flex items-center gap-2 md:gap-4">
                <div className="size-10 md:size-14 flex-shrink-0">
                  <img src={image} alt={idx.toString()} className="" />
                </div>
                <h6 className="text-xl md:text-2xl !leading-none font-medium md:font-semibold text-primary">
                  {data[idx].title[0].text}
                </h6>
              </div>

              <div className="mt-2 md:mt-4">
                <div className="opacity-80 text-pretty text-justify">
                  <PrismicRichText field={data[idx].text} />
                </div>
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
}

export default SectionTwo;
