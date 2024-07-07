import { RichTextField, TitleField } from "@prismicio/client";
import { LucideIcons } from "./icons";
import { PrismicRichText } from "@prismicio/react";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

type Props = {
  title: TitleField;
  bgImage: string;
  text: RichTextField;
  svgIcon: string;
  transitionClass: string;
};

function FeatureCard({
  title,
  bgImage,
  text,
  svgIcon,
  transitionClass,
}: Props) {
  const container = useRef<HTMLDivElement | null>(null);
  const titleRef = useRef<HTMLDivElement | null>(null);
  const textRef = useRef<HTMLParagraphElement | null>(null);

  const tl = gsap.timeline({ defaults: { duration: 0.5 } });
  const { contextSafe } = useGSAP(
    () => {
      const getter = gsap.getProperty(textRef.current);
      let textElHeight = getter("height");
      tl.set(textRef.current, {
        "--data-height": textElHeight,
        y: textElHeight,
        opacity: 0,
      }).to(titleRef.current, {
        y: textElHeight,
      });
    },
    { scope: container }
  );

  const handleMouseEnter = contextSafe(() => {
    tl.to(titleRef.current, {
      y: 0,
    }).to(textRef.current, { y: 0, opacity: 1, marginTop: "10px" });
  });
  const handleMouseLeave = contextSafe(() => {
    const getter = gsap.getProperty(textRef.current);
    const textElHeight = getter("height", "px");
    tl.to(textRef.current, { y: textElHeight, opacity: 0 }, 1).to(
      titleRef.current,
      {
        y: textElHeight,
      },
      1
    );
  });

  return (
    <div
      ref={container}
      className={`py-10 md:py-14 lg:py-16 h-96md:h-[480px] lg:h-screen lg:max-h-[900px] ${bgImage} bg-cover bg-center group overflow-clip flex flex-col items-start`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div
        className={`px-4 md:px-10 duration-700 transition-transform will-change-transform`}
      >
        <div className="">
          <div ref={titleRef} className="">
            <div className="size-10 md:size-16 mb-2">
              <img src={svgIcon} alt={title[0].text} className="" />
            </div>
            <div className="text-4xl md:text-5xl text-primary font-bold font-space-grotesk uppercase">
              {title[0].text}
            </div>
          </div>
          <p
            ref={textRef}
            className="md:text-lg font-medium leading-normal opacity-0 duration-700 transition-opacity group-hover:opacity-100"
          >
            <PrismicRichText field={text} />
          </p>
        </div>
      </div>
      <div className="mt-8 md:mt-10">
        <div className="p-[5px] rounded-r-full w-24 grayscale-0 bg-[#111] transition-colors duration-[400ms] group/absolute hover:bg-[#f8c792]">
          <div className="size-11 p-1 rounded-full flex items-center justify-center bg-white text-xl ml-auto">
            <LucideIcons.plus className="size-10 stroke-[#111] duration-[400ms] group-hover/absolute:stroke-[#f8c792] group-hover/absolute:rotate-[360deg]" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default FeatureCard;
