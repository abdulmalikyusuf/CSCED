import { useState } from "react";
import { Link } from "@tanstack/react-router";
import DonateNowBtn from "./donate-now-btn";

import { ImageField, RichTextField, TitleField } from "@prismicio/client";
import { PrismicRichText } from "@prismicio/react";

type MissionAndVisionProps = {
  mission: {
    text: RichTextField | undefined
    image: ImageField<never> | undefined
  };
  vision: {
    text: RichTextField | undefined
    image: ImageField<never> | undefined
  };
}
function MissionAndVision({ mission, vision }: MissionAndVisionProps) {
  const [tab, setTab] = useState<"vision" | "mission">("mission");
  return (
    <div className="min-h-full">
      <div className="flex gap-2 sm:gap-4 md:gap-6 ml-1">
        {["mission", "vision"].map((btn: "mission" | "vision") => (
          <button
            key={btn}
            type="button"
            onClick={() => setTab(btn)}
            className={`px-4 md:px-8 py-2 md:py-4 rounded-t-md md:rounded-t-lg text-sm md:text-lg leading-none font-medium md:font-semibold font-amatic uppercase
              ${tab === btn && "bg-primary text-white"} ${tab !== btn &&
              "text-primary border-[1.5px] md:border-2 !border-b-0 border-primary"
              }`}
          >
            {btn}
          </button>
        ))}
      </div>
      {tab === "mission" && <Mission {...mission} />}
      {tab === "vision" && <Vision {...vision} />}
    </div>
  );
}

export default MissionAndVision;

function Mission({ image, text }: MissionAndVisionProps["mission"]) {
  return (
    <div className="flex flex-wrap *:w-full md:*:w-1/2">
      <div className="bg-black p-6 sm:p-8 md:p-10 lg:p-16">
        <div className="md:text-lg font-medium leading-loose text-pretty text-justify">
          <PrismicRichText field={text} />
        </div>
        <Link
          to="/our-mission"
          className="block w-fit mt-10 px-4 md:px-8 py-2 md:py-4 bg-primary text-white rounded-full text-sm uppercase font-medium"
        >
          learn more
        </Link>
      </div>
      <div className="bg-[url(assets/images/Group-940-1-1.png)] min-h-96 relative">
        <img
          src={image?.url!}
          alt=""
          className="absolutebottom-0 object-cover w-full h-full"
        />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <button
            type="button"
            className="size-12 md:size-20 lg:size-[100px] rounded-full bg-primary flex justify-center items-center"
          >
            <span className="block w-2 h-2.5 md:w-4 md:h-5 bg-white [clip-path:_polygon(0%_0%,_100%_50%,_0%_100%)]" />
          </button>
        </div>
      </div>
    </div>
  );
}

function Vision({ image, text }: MissionAndVisionProps["vision"]) {
  return (
    <div className="flex flex-wrap *:w-full md:*:w-1/2">
      <div className="bg-black p-6 sm:p-8 md:p-10 lg:p-16">
        <div className="md:text-lg font-medium leading-loose text-pretty text-justify">
          <PrismicRichText field={text} />
        </div>

        <div className="mt-6 md:mt-10">
          <DonateNowBtn />
        </div>
      </div>
      <div className="bg-[url(assets/images/Group-940-1-1.png)] min-h-96 relative">
        <img
          src={image?.url!}
          alt=""
          className="absolutebottom-0 object-cover w-full h-full"
        />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <button
            type="button"
            className="size-12 md:size-20 lg:size-[100px] rounded-full bg-primary flex justify-center items-center"
          >
            <span className="block w-4 h-5 bg-white [clip-path:_polygon(0%_0%,_100%_50%,_0%_100%)]" />
          </button>
        </div>
      </div>
    </div>
  );
}
