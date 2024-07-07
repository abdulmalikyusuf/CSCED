import { useSinglePrismicDocument } from "@prismicio/react";
import { hourglass } from "ldrs";

hourglass.register();

import Community from "@/assets/svg/community-group-leader-svgrepo-com.svg";
import Gift from "@/assets/svg/gift-svgrepo-com.svg";
import Volunteer from "@/assets/svg/hand-yes-volunteer-fingers-svgrepo-com.svg";
import FeatureCard from "@/components/feature-card";
import Hero from "@/components/hero";
import SectionTwo from "@/components/section-two";
import AboutUs from "@/components/about-us";
import MissionAndVision from "@/components/mission-and-vision";
import Team from "@/components/team";
import RecruitVolunteers from "@/components/recruit-volunteers";
import Partners from "@/components/partners";
import type { HomepageDocument } from "#/types.generated.ts";

function Home() {
  const [document, { state }] =
    useSinglePrismicDocument<HomepageDocument>("homepage");

  const data = document?.data;

  if (state === "loading" || state === "idle" || state === "failed") {
    return (
      <div className="flex items-center justify-center h-screen">
        <l-hourglass
          size="40"
          bg-opacity="0.1"
          speed="1.75"
          color="black"
        ></l-hourglass>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-28 bg-white">
      <Hero data={data.hero_section} />
      <SectionTwo title={data.section_two_heading} data={data.section_grid} />
      <AboutUs data={data.about_us} />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 sm*:min-w-[480px] lg:h-screen lg:max-h-[900px]">
        {[
          {
            bgImage: "bg-[url(assets/images/feature-1.jpg)]",
            svgIcon: Community,
            title: data.features[0].title,
            text: data.features[0].text,
            transitionClass: "translate-y-[18%] md:translate-y-[30%]",
          },
          {
            bgImage: "bg-[url(assets/images/feature-2.jpg)]",
            svgIcon: Volunteer,
            title: data.features[1].title,
            text: data.features[1].text,
            transitionClass: "translate-y-[30%] md:translate-y-[40%]",
          },
          {
            bgImage: "bg-[url(assets/images/feature-3.jpg)]",
            svgIcon: Gift,
            title: data.features[2].title,
            text: data.features[2].text,
            transitionClass: "translate-y-[45%] md:translate-y-[53%]",
          },
        ].map((i) => (
          <FeatureCard key={i.title[0].text} {...i} />
        ))}
      </div>
      <Partners />
      <MissionAndVision />
      <RecruitVolunteers />
      <Team />
    </div>
  );
}

export default Home;
