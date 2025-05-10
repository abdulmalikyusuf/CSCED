import { OurTeamPageDocumentDataTeamMemberItem } from "#/types.generated";
import { PrismicRichText } from "@prismicio/react";
import { LucideIcons } from "./icons";


const socialIcons = {
  twitter: LucideIcons.twitter,
  facebook: LucideIcons.facebook,
  linkedin: LucideIcons.linkedIn,
  instagram: LucideIcons.instagram,
};

interface PrismicLinkField {
  link_type: "Web" | "Media" | "Document" | "Any";
  key?: string;
  url?: string;
  target?: "_blank" | "_self";
}

export interface TeamMemberCardProps extends OurTeamPageDocumentDataTeamMemberItem {
  facebook: PrismicLinkField
  instagram: PrismicLinkField
  linkedin: PrismicLinkField
  twitter: PrismicLinkField
}

function TeamMemberCard({ facebook, instagram, linkedin, team_member_name, team_member_photo, team_member_position, twitter }: TeamMemberCardProps) {
  const socials = {
    twitter: twitter,
    facebook: facebook,
    instagram: instagram,
    linkedIn: linkedin,
  };
  console.log(facebook)
  const hasSocialMediaInfo = !!Object.entries(socials).filter(([string, linkField]) => linkField?.url).length
  const socialMediaInfo = Object.values(socials).filter((linkField) => linkField?.url).map(linkField => ({ platform: linkField?.url?.split("/")[2].replace(".com", ""), url: linkField?.url }))


  return (
    <div className="rounded-lg shadow-xl overflow-hidden group/parent">
      <div className="relative overflow-hidden">
        <img
          src={team_member_photo.url!}
          alt={`${team_member_name} - ${team_member_position} at Center for Social Change and Economic Development`}
          className="object-cover h-80 md:h-96 w-full group-hover/parent:grayscale"
        />
        {hasSocialMediaInfo && (
          <div className="absolute bottom-14 right-0">
            <div className="flex items-center p-[5px] rounded-l-full bg-black transition-transform duration-500 will-change-transform translate-x-[calc(100%-60px)] hover:bg-primary/70 group-hover/parent:translate-x-0">
              <div className="flex items-center justify-center size-11 rounded-full bg-white text-xl mr-auto">
                <LucideIcons.circleFadingPlus className="stroke-black group-hover/parent:stroke-primary" />
              </div>
              <ul className="flex gap-2 ml-4">
                {socialMediaInfo.map((link) => {
                  const Icon = socialIcons[link.platform as keyof typeof socialIcons];
                  return (
                    <li
                      key={link.platform}
                      className="opacity-0 group-hover/parent:opacity-100 size-8 rounded-full flex justify-center items-center border border-white"
                    >
                      <a href={link.url} className="">
                        <Icon size={16} className="" />
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        )}
      </div>
      <div className="pt-6 pb-4 px-8">
        <h6 className="text-xl md:text-2xl font-medium md:font-bold font-QuickSand mb-4 text-[#232323] hover:text-primary">
          {team_member_name[0]?.text ?? ""}
        </h6>
        <div className="pt-2 border-t">
          <div className="text-sm md:text-base font-Nunito text-[#232323] capitalize font-medium opacity-80">
            <PrismicRichText field={team_member_position} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default TeamMemberCard;
