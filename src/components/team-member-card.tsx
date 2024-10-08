import { LucideIcons } from "./icons";

interface TeamMemberCardProps {
  imageSrc: string;
  name: string;
  position: string;
  socials: {
    twitter: string;
    facebook: string;
    instagram: string;
    linkedIn: string;
  };
}
const socialIcons = {
  twitter: LucideIcons.twitter,
  facebook: LucideIcons.facebook,
  linkedIn: LucideIcons.linkedIn,
  instagram: LucideIcons.instagram,
};
function TeamMemberCard(props: TeamMemberCardProps) {
  return (
    <div className="rounded-lg shadow-xl overflow-hidden group/parent">
      <div className="relative overflow-hidden">
        <img
          src={props.imageSrc}
          alt={`${props.name} - ${props.position} at Center for Social Change and Economic Development`}
          className="object-cover h-80 md:h-96 w-full group-hover/parent:grayscale"
        />
        {Object.entries(props.socials).filter(
          ([, value]) => value.trim() !== ""
        ).length && (
          <div className="absolute bottom-14 right-0">
            <div className="flex items-center p-[5px] rounded-l-full bg-black transition-transform duration-500 will-change-transform translate-x-[calc(100%-60px)] hover:bg-primary/70 group-hover/parent:translate-x-0">
              <div className="flex items-center justify-center size-11 rounded-full bg-white text-xl mr-auto">
                <LucideIcons.circleFadingPlus className="stroke-black group-hover/parent:stroke-primary" />
              </div>
              <ul className="flex gap-2 ml-4">
                {Object.entries(props.socials).map((item) => {
                  const Icon = socialIcons[item[0]];
                  const socialLinkPrefix =
                    item[0] === "twitter"
                      ? "https://twitter.com/"
                      : item[0] === "facebook"
                      ? "https://facebook.com/"
                      : item[0] === "instagram"
                      ? "https://instagram.com/"
                      : item[0] === "linkedIn"
                      ? "https://linkedin.com/"
                      : "https://linkedin.com/";
                  if (!item[1]) return;
                  return (
                    <li
                      key={item[0]}
                      className="opacity-0 group-hover/parent:opacity-100 size-8 rounded-full flex justify-center items-center border border-white"
                    >
                      <a href={`${socialLinkPrefix}/${item[1]}`} className="">
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
          {props.name}
        </h6>
        <div className="pt-2 border-t">
          <p className="text-sm md:text-base font-Nunito text-[#232323] capitalize font-medium opacity-80">
            {props.position}
          </p>
        </div>
      </div>
    </div>
  );
}

export default TeamMemberCard;
