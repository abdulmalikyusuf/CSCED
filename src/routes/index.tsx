import { useSinglePrismicDocument } from "@prismicio/react";
import { hourglass } from "ldrs";

hourglass.register();

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
      <Partners />
      <MissionAndVision />
      <RecruitVolunteers />
      <Team />
    </div>
  );
}

export default Home;
