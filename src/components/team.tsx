import TeamMemberCard from "@/components/team-member-card";

export const staffs = [
  {
    name: "Abdulkarim Hamid",
    position: "Board Chair",
    imageSrc: "src/assets/images/staffs/abdulkarim-hamid.jpg",
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
    imageSrc: "src/assets/images/staffs/abdulrashid-mustapha.jpg",
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
    imageSrc: "src/assets/images/staffs/idris-isa-gabdo.jpg",
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
    imageSrc: "src/assets/images/staffs/shehu-usman-jijiwa.jpg",
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
    imageSrc: "src/assets/images/staffs/abubakar-baba-mustapha.jpg",
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
    imageSrc: "src/assets/images/staffs/salamatu-hassanu-raji.jpg",
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
    imageSrc: "src/assets/images/staffs/susuti-kefas-mustapha.jpg",
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
    imageSrc: "src/assets/images/staffs/uhwe-ndon-indo.jpg",
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
    imageSrc: "src/assets/images/staffs/shuaibu-musa.jpg",
    socials: {
      twitter: "Shuaibu57",
      facebook: "Shuaibu Musa Babaji",
      instagram: "Babajigirei",
      linkedIn: "Shuaibu Musa",
    },
  },
];
function Team() {
  return (
    <div className="px-4 sm:px-8 lg:px-16 mb-20">
      <div className="text-center text-[#232323]">
        <h6 className="md:text-xl font-semibold text-primary font-amatic">
          PROFESSIONAL TEAM
        </h6>
        <h4 className="text-3xl lg:text-5xl font-bold">
          Know the Heroes in Person
        </h4>
      </div>
      <div className="flex *:min-w-[320px] gap-6 mt-6 overflow-x-scroll">
        {staffs.map((staff) => (
          <TeamMemberCard key={staff.name} {...staff} />
        ))}
      </div>
    </div>
  );
}

export default Team;
