import { LucideIcons } from "@/components/icons";
import { staffs } from "@/components/team";
import TeamMemberCard from "@/components/team-member-card";

function TheTeam() {
  return (
    <>
      <div className="relative h-[70vh] bg-[url(assets/images/feature-3.jpg)] bg-no-repeat bg-cover bg-bottom flex flex-col items-center justify-center">
        <div className="">
          <h2 className="text-2xl md:text-4xl font-bold text-center text-primary text-stroke-px text-stroke-black gradient-text bg-gradient-to-br from-primary to-black">
            The Team
          </h2>
          <div className="mt-4 flex gap-2 items-center justify-center text-sm font-semibold">
            <h6 className="text-primary">HOME</h6>
            <LucideIcons.chevronRight size={16} />
            <h6 className="uppercase">the team</h6>
          </div>
        </div>
      </div>
      <div className="py-16 px-4 sm:px-8 lg:px-16 mb-20">
        <div className="text-center text-[#232323]">
          <h6 className="md:text-xl font-semibold font-amatic text-primary">
            PROFESSIONAL TEAM
          </h6>
          <h4 className="text-3xl md:text-5xl font-bold font-DMSans capitalize">
            Meet our volunteer team
          </h4>
        </div>
        <div className="grid grid-cols-[repeat(auto-fit,_minmax(min(320px,_100%),_1fr))] gap-6 mt-6">
          {staffs.map((staff) => (
            <TeamMemberCard key={staff.name} {...staff} />
          ))}
        </div>
      </div>
    </>
  );
}

export default TheTeam;
