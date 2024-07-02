import { RichTextField, TitleField } from "@prismicio/client";
import { LucideIcons } from "./icons";
import { PrismicRichText } from "@prismicio/react";

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
  return (
    <div
      className={`relative h-96 md:h-[480px] lg:h-screen lg:max-h-[900px] ${bgImage} bg-cover bg-center group overflow-clip flex flex-col items-end`}
    >
      <div className="absolute-inset-0 bg-black/90" />
      <div
        className={`py-6 px-10 md:py-8 lg:py-10 w-full ${transitionClass} group-hover:translate-y-0 duration-700 transition-transform will-change-transform`}
      >
        <div className="">
          <div className="size-10 md:size-16 mb-3">
            <img src={svgIcon} alt={title[0].text} className="" />
          </div>
          <div className="text-4xl md:text-5xl text-primary font-bold font-space-grotesk uppercase">
            {title[0].text}
          </div>
          <p className="mt-4 md:mt-6 md:text-lg font-medium leading-normal opacity-0 duration-700 transition-opacity group-hover:opacity-100">
            <PrismicRichText field={text} />
          </p>
        </div>
      </div>
      <div className="absolute bottom-10 left-0">
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
