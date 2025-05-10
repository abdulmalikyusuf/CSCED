import type { GroupField, RichTextField, TitleField } from "@prismicio/client";
import { PrismicRichText } from "@prismicio/react";

import TeamMemberCard, { TeamMemberCardProps } from "@/components/team-member-card";
import { Simplify } from "@/types";
import { OurTeamPageDocumentDataTeamMemberItem } from "#/types.generated";

type TeamProps = {
  heading: TitleField | undefined, subtitle: RichTextField | undefined, staffs: GroupField<Simplify<OurTeamPageDocumentDataTeamMemberItem>> | undefined
}

function Team({ heading, subtitle, staffs }: TeamProps) {
  if (!staffs || staffs.length === 0) return null;

  return (
    <div className="px-4 sm:px-8 lg:px-16 mb-20">
      <div className="text-center text-[#232323]">
        <div className="md:text-xl font-semibold text-primary font-amatic uppercase mb-2">
          {heading?.[0]?.text}
        </div>
        <div className="text-3xl lg:text-5xl font-bold capitalize">
          <PrismicRichText field={subtitle} />
        </div>
      </div>
      <div className="flex *:min-w-[320px] gap-6 mt-6 overflow-x-scroll no-scrollbar pb-10 -mr-4 sm:-mr-8 lg:-mr-16">
        {staffs.map((staff: Simplify<TeamMemberCardProps>, index) => (
          <TeamMemberCard key={index} {...staff} />
        ))}
      </div>
    </div>
  );
}

export default Team;
