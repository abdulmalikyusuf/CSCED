import { createRoute } from "@tanstack/react-router";
import { PrismicImage, PrismicRichText } from "@prismicio/react";

import { LucideIcons } from "@/components/icons";
import TeamMemberCard, { TeamMemberCardProps } from "@/components/team-member-card";
import { rootRoute } from "./root";
import { client } from "@/lib/prismic";
import { Simplify } from "@/types";


export const teamRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/our-team',
  component: OurTeam,
  loader: async () => {
    const teampage = (await client.getByType("our_team_page")).results.at(0)?.data
    if (!teampage) {
      throw new Error("Team page not found")
    }
    return teampage
  }
})

function OurTeam() {
  const team = teamRoute.useLoaderData()

  return (
    <>
      <div className="relative h-[70vh] bg-no-repeat bg-cover bg-bottom flex flex-col items-center justify-center">
        <div className="absolute inset-0 -z-0">
          <PrismicImage field={team.team_hero_image} className="w-full h-full object-cover" />
        </div>
        <div className="relative z-10">
          <h2 className="text-2xl md:text-4xl font-bold text-center text-primary text-stroke-px text-stroke-black gradient-text bg-gradient-to-br from-primary to-black">
            {team.team_hero_text[0]?.text}
          </h2>
          <div className="mt-4 flex gap-2 items-center justify-center text-sm font-semibold">
            <h6 className="text-primary">HOME</h6>
            <LucideIcons.chevronRight size={16} />
            <h6 className="uppercase">Our team</h6>
          </div>
        </div>
      </div>
      <div className="py-16 px-4 sm:px-8 lg:px-16 mb-20">
        <div className="text-center text-[#232323]">
          <h6 className="md:text-xl font-semibold font-amatic text-primary">
            {team.team_heading[0]?.text}
          </h6>
          <div className="text-3xl md:text-5xl font-bold font-DMSans capitalize">
            <PrismicRichText field={team.team_subtitle} />
          </div>
        </div>
        <div className="grid grid-cols-[repeat(auto-fit,_minmax(min(320px,_100%),_1fr))] gap-6 mt-6">
          {team.team_member.map((staff: Simplify<TeamMemberCardProps>) => (
            <TeamMemberCard key={staff.team_member_name[0]?.text} {...staff} />
          ))}
        </div>
      </div>
    </>
  );
}
