import { IndexDocumentDataVolunteeringPitchItem, Simplify } from "#/types.generated";
import VolunteerImage from "@/assets/images/volunteer-1888823_640.webp";
import { LucideIcons } from "@/components/icons";
import { GroupField, RichTextField } from "@prismicio/client";
import { TitleField } from "@prismicio/client";

type RecruitVolunteersProps = {
  title: TitleField | undefined;
  text: RichTextField | undefined;
  items: GroupField<Simplify<IndexDocumentDataVolunteeringPitchItem>> | undefined
}

function RecruitVolunteers({ title, text, items }: RecruitVolunteersProps) {
  return (
    <div className="flex flex-col md:flex-row gap-14 md:gap-16 px-4 sm:px-8 lg:px-16">
      <div className="flex-1">
        <img src={VolunteerImage} alt="" className="" />
      </div>
      <div className="flex-1">
        <p className="md:text-xl font-medium font-amatic tracking-tight text-primary">
          BECOME A VOLUNTEER
        </p>
        <h5 className="text-3xl md:text-5xl font-semibold md:font-bold text-[#232323]">
          Why We Need You
        </h5>
        <div className="flex flex-col gap-4 mt-6">
          {[
            {
              title: "community impact",
              text: "Your involvement directly impacts communities in Maiduguri, Nigeria, contributing to community development, humanitarian aid, and educational programs.",
            },
            {
              title: "Diverse Skillsets",
              text: "We value your unique skills and experiences. Whether you specialize in education, healthcare, or project management, your expertise is vital to our diverse initiatives.",
            },
            {
              title: "Global Collaboration",
              text: "Joining as a volunteer allows you to be part of a global collaborative effort. Together, we bridge gaps, share perspectives, and work towards a more inclusive and connected world.",
            },
            {
              title: "Personal Growth",
              text: "Volunteering with CSCED is not just about giving back; it's also an opportunity for personal growth. Gain valuable experiences, develop new skills, and make a meaningful impact on the lives of others.",
            },
          ].map(({ title, text }) => (
            <details
              key={title}
              className="group/accordion transition-transform duration-300 cursor-poQuickSand"
            >
              <summary className="flex justify-between marker:hidden rounded-full py-2 px-5 text-[#232323] text-sm md:text-lg font-medium capitalize border-2 border-black/15 group-open:bg-[#01592E] group-open:text-white group-open:border-[#01592E]">
                <p className="">{title}</p>
                <p className="text-primary group-open:text-white">
                  <LucideIcons.plus
                    size={16}
                    className="inline-block open:hidden"
                  />
                  <LucideIcons.minus
                    size={16}
                    className="hidden open:inline-block"
                  />
                </p>
              </summary>
              <div className="mx-5 mt-4 opacity-0 group-open/accordion:opacity-100 transition-[height,_opacity] duration-500">
                <p className="text-pretty text-[#232323] font-medium leading-relaxed opacity-80">
                  {text}
                </p>
              </div>
            </details>
          ))}
        </div>
      </div>
    </div>
  );
}

export default RecruitVolunteers;
