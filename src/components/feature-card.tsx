import { LucideIcons } from "./icons";

type Props = {
  title: string;
  bgImage: string;
  text: string;
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
      key={title}
      className={`relative h-96 md:h-[480px] lg:h-screen lg:max-h-[900px] ${bgImage} bg-cover bg-center group overflow-clip`}
    >
      <div
        className={`py-6 px-10 md:py-8 lg:py-10 w-full ${transitionClass} group-hover:translate-y-0 duration-700 transition-transform will-change-transform`}
      >
        <div className="">
          <div className="size-10 md:size-16 mb-3">
            <img src={svgIcon} alt={text} className="" />
          </div>
          <div className="text-4xl md:text-5xl font-bold font-space-grotesk uppercase">
            {title}
          </div>
          <p className="mt-4 md:mt-6 md:text-lg font-medium leading-normal opacity-0 duration-700 transition-opacity group-hover:opacity-100">
            {text}
          </p>
        </div>
      </div>
      <div className="absolute bottom-14 left-0">
        <div className="p-[5px] rounded-r-full w-24 grayscale-0 bg-[#01592E] transition-colors duration-[400ms] group/absolute hover:bg-[#FFAC00]">
          <div className="size-11 p-1 rounded-full flex items-center justify-center bg-white text-xl ml-auto">
            <LucideIcons.plus className="size-10 stroke-[#01592E] duration-[400ms] group-hover/absolute:stroke-[#FFAC00] group-hover/absolute:rotate-[360deg]" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default FeatureCard;
