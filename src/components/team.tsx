import TeamMemberCard from "@/components/team-member-card";
import abdulkarimhamid from "@/assets/images/staffs/abdulkarim-hamid.jpg";
import abdulrashidmustapha from "@/assets/images/staffs/abdulrashid-mustapha.jpg";
import isagabdo from "@/assets/images/staffs/idris-isa-gabdo.jpg";
import usmanjijiwa from "@/assets/images/staffs/shehu-usman-jijiwa.jpg";
import babamustapha from "@/assets/images/staffs/abubakar-baba-mustapha.jpg";
import hassanuraji from "@/assets/images/staffs/salamatu-hassanu-raji.jpg";
import kefasmustapha from "@/assets/images/staffs/susuti-kefas-mustapha.jpg";
import ndonindo from "@/assets/images/staffs/uhwe-ndon-indo.jpg";
import shuaibumusa from "@/assets/images/staffs/shuaibu-musa.jpg";
import { GroupField, RichTextField, TitleField } from "@prismicio/client";
import { Simplify } from "@/types";
import { OurTeamPageDocumentDataTeamMemberItem } from "#/types.generated";
import { PrismicRichText } from "@prismicio/react";

export const staffs = [
  {
    name: "Abdulkarim Hamid",
    position: "Board Chair",
    imageSrc: abdulkarimhamid,
    socials: {
      twitter: "",
      facebook: "",
      instagram: "",
      linkedIn: "",
    },
  },
  {
    name: "Abubakar Baba Mustapha",
    position: "Executive Director",
    imageSrc: babamustapha,
    socials: {
      twitter: "abubakarbm",
      facebook: "abubakar baba mustapha",
      instagram: "abubakarbabamustaph",
      linkedIn: "Abubakar Baba Mustapha",
    },
  },
  {
    name: "Idris Isa Gabdo",
    position: "Program Manager",
    imageSrc: isagabdo,
    socials: {
      twitter: "",
      facebook: "",
      instagram: "Idris_gabdo",
      linkedIn: "Idris Isa Gabdo",
    },
  },
  {
    name: "Shehu Usman Jijiwa",
    position: "Operation Manager",
    imageSrc: usmanjijiwa,
    socials: {
      twitter: "",
      facebook: "jijiwa shehu usman",
      instagram: "shehu usman jijiwa",
      linkedIn: "",
    },
  },
  {
    name: "Abdulrashid Mustapha",
    position: "M&E Officer",
    imageSrc: abdulrashidmustapha,
    socials: {
      twitter: "RashmanGY",
      facebook: "Abdulrashid Baba Mustapha",
      instagram: "rashman01",
      linkedIn: "abdulrashid-mustapha",
    },
  },
  {
    name: "Salamatu Hassanu Raji",
    position: "Admin Manager",
    imageSrc: hassanuraji,
    socials: {
      twitter: "",
      facebook: "",
      instagram: "",
      linkedIn: "",
    },
  },
  {
    name: "Susuti Kefas Mustapha",
    position: "Gender & Protection Specialist",
    imageSrc: kefasmustapha,
    socials: {
      twitter: "",
      facebook: "",
      instagram: "",
      linkedIn: "",
    },
  },
  {
    name: "Uhwe Ndon Indo",
    position: "Farmer Field School Specialist",
    imageSrc: ndonindo,
    socials: {
      twitter: "",
      facebook: "",
      instagram: "",
      linkedIn: "",
    },
  },
  {
    name: "Shuaibu Musa",
    position: "Finance & Procurement Officer",
    imageSrc: shuaibumusa,
    socials: {
      twitter: "Shuaibu57",
      facebook: "Shuaibu Musa Babaji",
      instagram: "Babajigirei",
      linkedIn: "Shuaibu Musa",
    },
  },
];

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
        {staffs.map((staff: Simplify<OurTeamPageDocumentDataTeamMemberItem>, index) => (
          <TeamMemberCard key={index} {...staff} />
        ))}
      </div>
    </div>
  );
}

export default Team;
