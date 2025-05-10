import { useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { createRoute } from "@tanstack/react-router";
import { hourglass } from "ldrs";

hourglass.register();

import Hero from "@/components/hero";
import SectionTwo from "@/components/section-two";
import AboutUs from "@/components/about-us";
import MissionAndVision from "@/components/mission-and-vision";
import Team from "@/components/team";
import RecruitVolunteers from "@/components/recruit-volunteers";
import Partners from "@/components/partners";
import { rootRoute } from "./root";
import { client } from "@/lib/prismic";
import { usePrevNextButtons } from "@/hooks/use-embla-buttons";

export const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  component: Home,
  loader: async () => {
    const indexpage = await client.getByType("index")
    const teampage = await client.getByType("our_team_page")
    return { index: indexpage.results.at(0)?.data, team: teampage.results.at(0)?.data }
  }
})


function Home() {
  const { index, team } = indexRoute.useLoaderData()
  const [, emblaApi] = useEmblaCarousel();
  const [heroRef] = useEmblaCarousel({ loop: true }, [
    Autoplay({ stopOnInteraction: true }),
  ]);
  const { scrollTo, slidesInView } = usePrevNextButtons(emblaApi);
  const [currIdx] = useState(slidesInView.at(0) ?? 0);

  useEffect(() => {
    scrollTo(currIdx);
  }, [scrollTo, currIdx]);
  const mission = {
    text: index?.mission_text, image: index?.mission_image
  }
  const vision = {
    text: index?.vision_text, image: index?.vision_image
  }
  return (
    <div className="flex flex-col gap-28 bg-white">
      <div className="overflow-hidden" ref={heroRef}>
        <div className="flex">
          {index?.hero.map((item, index) => (
            <Hero key={`${item?.hero_text.at(0).text}-${index}`} imageUrl={item?.hero_image.url} text="Welcome to CSCED-Nigeria" subText={item?.hero_text.at(0).text} />
          ))}
        </div>
      </div>
      <SectionTwo title={index?.objectives_heading} data={index?.objectives} />
      <AboutUs data={index?.about} />
      <Partners partners={index?.partners} />
      <MissionAndVision mission={mission} vision={vision} />
      <RecruitVolunteers title={index?.volunteer_title} text={index?.volunteer_text} items={index?.volunteering_pitch} />
      <Team heading={team?.team_heading} subtitle={team?.team_subtitle} staffs={team?.team_member} />
    </div>
  );
}

export default Home;
