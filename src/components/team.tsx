import React from "react";
import TeamMemberCard from "@/components/team-member-card";

function Team() {
  return (
    <div className="px-4 sm:px-8 lg:px-16 mb-20">
      <div className="text-center text-[#232323]">
        <h6 className="text-lg font-semibold">PROFESSIONAL TEAM</h6>
        <h4 className="text-4xl font-bold font-space-grotesk">
          Know the Heroes in Person
        </h4>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-6">
        <TeamMemberCard />
      </div>
    </div>
  );
}

export default Team;
