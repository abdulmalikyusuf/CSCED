import { useSinglePrismicDocument } from "@prismicio/react";

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

function Home() {
  const [document, { state }] = useSinglePrismicDocument("homepage");

  // const { about_us, hero_section, section_one, features } =
  //   // eslint-disable-next-line @typescript-eslint/no-explicit-any
  //   document && document.data;

  if (state === "loading") {
    return <p className="">Loading</p>;
  }

  return (
    <div className="flex flex-col gap-28 bg-white">
      <Hero />
      <SectionTwo />
      <AboutUs />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 sm*:min-w-[480px] lg:h-screen lg:max-h-[900px]">
        {[
          {
            bgImage: "bg-[url(assets/images/Frame-116-2-1.png)]",
            svgIcon: Community,
            title: "community development programs",
            text: "Engage in our holistic community development initiatives addressing unique local needs. Through collaborative efforts in infrastructure projects and educational programs, we work towards fostering sustainable growth and empowerment.",
            transitionClass: "translate-y-[18%] md:translate-y-[30%]",
          },
          {
            bgImage: "bg-[url(assets/images/Group-938-1.png)]",
            svgIcon: Volunteer,
            title: "become a volunteer",
            text: "Join FRAD Foundation as a volunteer, contributing to community development, humanitarian aid, and education in Maiduguri, Nigeria. Your commitment helps foster sustainable growth and empowerment, creating positive change.",
            transitionClass: "translate-y-[30%] md:translate-y-[40%]",
          },
          {
            bgImage: "bg-[url(assets/images/Group-939-1.png)]",
            svgIcon: Gift,
            title: "donate",
            text: "Support FRAD Foundation's impactful initiatives by donating today. Your contribution fuels community development, humanitarian aid, and education in Maiduguri, Nigeria. Together, we create positive change, fostering sustainable growth and empowerment for all.",
            transitionClass: "translate-y-[45%] md:translate-y-[53%]",
          },
        ].map((i) => (
          <FeatureCard key={i.title} {...i} />
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
